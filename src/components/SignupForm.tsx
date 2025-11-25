import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Send, MessageSquare, ArrowRight } from "lucide-react";

const SignupForm = () => {
  const [contactMethod, setContactMethod] = useState<"whatsapp" | "telegram" | "sms">("whatsapp");
  const [contact, setContact] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    const methodNames = {
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      sms: "SMS"
    };
    
    toast({
      title: "Willkommen in der Gemeinschaft!",
      description: `Wir haben dir eine Nachricht per ${methodNames[contactMethod]} an ${contact} gesendet mit einem Link zur Community.`,
    });

    setContact("");
    setIsSubmitting(false);
  };

  return (
    <section id="signup" className="py-24 md:py-40 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-soft" />
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-glow opacity-50" />
      
      <div className="container px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-warm mx-auto mb-8 rounded-full"
            />
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
              Werde Teil der Gemeinschaft
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
              Erhalte Zugang zu unserer Community und beginne deine Reise der Nachfolge
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-warm opacity-10 blur-2xl rounded-3xl group-hover:opacity-20 transition-opacity duration-500" />
            
            {/* Card */}
            <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-elegant border border-border/50">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-5">
                  <Label className="text-lg md:text-xl font-semibold text-foreground">
                    Wie möchtest du kontaktiert werden?
                  </Label>
                  <RadioGroup
                    value={contactMethod}
                    onValueChange={(value) => setContactMethod(value as "whatsapp" | "telegram" | "sms")}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                  >
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <RadioGroupItem value="whatsapp" id="whatsapp" className="peer sr-only" />
                      <Label
                        htmlFor="whatsapp"
                        className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-border bg-background/50 p-8 hover:bg-accent/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-gradient-hero peer-data-[state=checked]:shadow-elegant cursor-pointer transition-all duration-300"
                      >
                        <div className="w-14 h-14 rounded-xl bg-gradient-warm flex items-center justify-center shadow-soft">
                          <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
                        </div>
                        <span className="font-semibold text-lg">WhatsApp</span>
                      </Label>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <RadioGroupItem value="telegram" id="telegram" className="peer sr-only" />
                      <Label
                        htmlFor="telegram"
                        className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-border bg-background/50 p-8 hover:bg-accent/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-gradient-hero peer-data-[state=checked]:shadow-elegant cursor-pointer transition-all duration-300"
                      >
                        <div className="w-14 h-14 rounded-xl bg-gradient-warm flex items-center justify-center shadow-soft">
                          <Send className="w-7 h-7 text-white" strokeWidth={2} />
                        </div>
                        <span className="font-semibold text-lg">Telegram</span>
                      </Label>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <RadioGroupItem value="sms" id="sms" className="peer sr-only" />
                      <Label
                        htmlFor="sms"
                        className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-border bg-background/50 p-8 hover:bg-accent/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-gradient-hero peer-data-[state=checked]:shadow-elegant cursor-pointer transition-all duration-300"
                      >
                        <div className="w-14 h-14 rounded-xl bg-gradient-warm flex items-center justify-center shadow-soft">
                          <MessageSquare className="w-7 h-7 text-white" strokeWidth={2} />
                        </div>
                        <span className="font-semibold text-lg">SMS</span>
                      </Label>
                    </motion.div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="contact" className="text-lg md:text-xl font-semibold text-foreground">
                    Deine Handynummer
                  </Label>
                  <Input
                    id="contact"
                    type="tel"
                    placeholder="+49 123 456789"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                    className="h-16 text-lg rounded-2xl border-2 focus:border-primary transition-colors bg-background/50"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 text-lg bg-gradient-warm hover:shadow-hover transition-all duration-300 rounded-2xl font-semibold shadow-elegant text-white border-0 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        "Wird gesendet..."
                      ) : (
                        <>
                          Community-Link erhalten
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
                          </motion.span>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </motion.div>
              </form>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 space-y-4"
              >
                <p className="text-sm md:text-base text-muted-foreground text-center leading-relaxed">
                  Du erhältst eine Nachricht mit einem persönlichen Link zu unserer Community-Webseite
                </p>
                <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
                  <p className="text-xs md:text-sm text-muted-foreground text-center leading-relaxed">
                    🔒 <strong>Datenschutz:</strong> Deine Nummer wird nicht gespeichert und es wird keinerlei Werbung verschickt. 
                    Du erhältst ausschließlich den Link zur Community zum Schutz der Gemeinschaft.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignupForm;
