<?php
// ===================================================================
// 1. KONFIGURATION
// ===================================================================
//const INVITATION_URL = 'https://wolke.der-weg-des-herrn.de/call/4pgjurtc';
const INVITATION_URL = 'https://wolke.der-weg-des-herrn.de/apps/collectives/p/mp424wr7cXHNdC5/Gemeinschaft-2';
const INVITATION_MSG = "Komm, Folge Mir Nach!\n\nHier ist Dein Einladungslink für Deine Nachfolge:\n\n";

const TWILIO_SID           = 'AC5b6ca08d371c363f3484c2e6f37b23dc';
const TWILIO_AUTH_TOKEN    = '76874fa003c02a7557d79590f5d78a3c';
const TWILIO_MESSAGING_SID = 'MGabdf7e1beaec695e8e50b53c90a1fc06';

// Set SMS provider: 'twilio' or 'hetzner'
const SMS_PROVIDER = 'hetzner';

// ===================================================================
// 2. CORS – NUR DEINE DOMAINS ERLAUBT (maximale Sicherheit)
// ===================================================================
$allowedOrigins = [
    'https://komm-folge-mir-nach.de',
    'https://www.komm-folge-mir-nach.de'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    // Kein gültiger Origin → CORS blockieren (Browser sieht keinen ACAO-Header)
    // Wir geben trotzdem JSON zurück, aber ohne CORS → Browser blockiert den Zugriff
}

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400');
header('Vary: Origin');

// OPTIONS-Preflight sofort beantworten und beenden
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Falls kein gültiger Origin → ab hier trotzdem weiterlaufen, aber Browser kann Antwort nicht lesen
// (zusätzliche Absicherung gegen Missbrauch von außerhalb)

// ===================================================================
// 3. Parameter prüfen
// ===================================================================
$service = strtolower($_GET['to'] ?? '');
$mobile  = trim($_GET['mobile'] ?? '');

if (!in_array($service, ['sms', 'whatsapp'], true)) {
    echo json_encode(['success' => false, 'message' => 'Parameter "to" muss "sms" oder "whatsapp" sein']);
    exit;
}

if (empty($mobile) || strlen($mobile) < 8 || strlen($mobile) > 20) {
    echo json_encode(['success' => false, 'message' => 'Ungültige Mobilnummer']);
    exit;
}

// ===================================================================
// 4. Nummer normalisieren → +49...
// ===================================================================
if (substr($mobile, 0, 2) === '00') {
    $mobile = '+' . substr($mobile, 2);
} elseif ($mobile[0] === '0') {
    $mobile = '+49' . substr($mobile, 1);
} elseif ($mobile[0] !== '+') {
    $mobile = '+49' . $mobile;
}

// ===================================================================
// 5. Nachricht zusammenbauen
// ===================================================================
$text = INVITATION_MSG . INVITATION_URL;

// WhatsApp braucht das "whatsapp:" Prefix
$to = ($service === 'whatsapp') ? "whatsapp:{$mobile}" : $mobile;

// ===================================================================
// 6. Versand über Twilio Messaging Service
// ===================================================================
// 6. Versand über Twilio oder Hetzner SMS
// ===================================================================
$provider = SMS_PROVIDER;
$result = null;

if ($service === 'sms' && $provider === 'hetzner') {
    
    $domain   = 'komm-folge-mir-nach.de';        // Hetzner SMS Konsole Domain
    $passwort = 'x2§Y{3uhSS1H';          // Hetzner SMS Konsole

    // $mobile ist jetzt garantiert im Format +49176... (durch deine Normalisierung oben)
    
    if (substr($mobile, 0, 3) !== '+49') {
        // Hetzner unterstützt nur DE-Nummern vernünftig → andere ablehnen oder Twilio fallback
        echo json_encode(['success' => false, 'message' => 'Hetzner unterstützt nur deutsche Nummern']);
        exit;
    }
    
    $land   = '+49';                                      // immer +49
    $nummer = '0' . substr($mobile, 3);                   // +49176... → 0176...
    // Falls die Nummer schon mit 0 anfängt (selten, aber möglich bei falscher Eingabe), korrigieren:
    $nummer = ltrim($nummer, '0');                        // führende Nullen weg außer eine
    $nummer = '0' . $nummer;                              // wieder eine 0 vorne → garantiert 01...

    // Sicherstellen, dass es wirklich mit 0 anfängt und 10–11 Stellen nach der 0 hat
    if (!preg_match('/^0[1-9]\d{8,10}$/', $nummer)) {
        echo json_encode(['success' => false, 'message' => 'Ungültige deutsche Mobilnummer für Hetzner']);
        exit;
    }

    $absender = 'DerWeg';
    
    require_once 'sms.php';
    $sms = new SMS('https://konsoleh.your-server.de/');
    $resultArr = $sms->send($domain, $passwort, $land, $nummer, $text, $absender);
    
    $result = [
        'success' => $resultArr[0] == 1,
        'message' => $resultArr[1]
    ];
} else {
    $result = sendViaTwilioMessagingService($to, $text);
}

echo json_encode([
    'success'  => $result['success'],
    'message'  => $result['message'],
    'sent_to'  => $service,
    'mobile'   => $mobile
]);
exit;

// ===================================================================
// 7. Hetzner-Versand-Funktion
// ===================================================================
// ...existing code...

// ===================================================================
// 7. Twilio-Versand-Funktion
// ===================================================================
function sendViaTwilioMessagingService(string $to, string $body): array
{
    $sid    = TWILIO_SID;
    $token  = TWILIO_AUTH_TOKEN;
    $msgSid = TWILIO_MESSAGING_SID;

    $url = "https://api.twilio.com/2010-04-01/Accounts/{$sid}/Messages.json";

    $data = [
        'To'                  => $to,
        'MessagingServiceSid' => $msgSid,
        'Body'                => $body
    ];

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL            => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => http_build_query($data),
        CURLOPT_USERPWD        => $sid . ':' . $token,
        CURLOPT_HTTPHEADER     => ['Content-Type: application/x-www-form-urlencoded'],
        CURLOPT_TIMEOUT        => 15
    ]);

    $response  = curl_exec($ch);
    $httpCode  = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($httpCode === 201) {
        return [
            'success' => true,
            'message' => $service === 'whatsapp' ? 'WhatsApp gesendet' : 'SMS gesendet'
        ];
    }

    $errorMsg = 'Unbekannter Fehler';
    if ($curlError) {
        $errorMsg = 'cURL Fehler: ' . $curlError;
    } else {
        $decoded = json_decode($response, true);
        $errorMsg = $decoded['message'] ?? $decoded['error_message'] ?? "Twilio Fehler (HTTP $httpCode)";
    }

    return [
        'success' => false,
        'message' => 'Versand fehlgeschlagen: ' . $errorMsg
    ];
}
