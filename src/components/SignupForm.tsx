import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, ArrowRight } from "lucide-react";

const SignupForm = () => {
  const [contactMethod, setContactMethod] = useState<"email" | "phone">("email");
  const [contact, setContact] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Willkommen in der Gemeinschaft!",
      description: `Wir haben dir eine Nachricht an ${contact} gesendet mit einem Link zur Community.`,
    });

    setContact("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Werde Teil der Gemeinschaft
            </h2>
            <p className="text-xl text-muted-foreground">
              Erhalte Zugang zu unserer Community und beginne deine Reise der Nachfolge
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-warm">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <Label className="text-lg font-semibold">
                  Wie möchtest du kontaktiert werden?
                </Label>
                <RadioGroup
                  value={contactMethod}
                  onValueChange={(value) => setContactMethod(value as "email" | "phone")}
                  className="grid grid-cols-2 gap-4"
                >
                  <div>
                    <RadioGroupItem value="email" id="email" className="peer sr-only" />
                    <Label
                      htmlFor="email"
                      className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-muted bg-background p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all"
                    >
                      <Mail className="w-8 h-8" />
                      <span className="font-medium">E-Mail</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="phone" id="phone" className="peer sr-only" />
                    <Label
                      htmlFor="phone"
                      className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-muted bg-background p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all"
                    >
                      <Phone className="w-8 h-8" />
                      <span className="font-medium">SMS</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact" className="text-lg font-semibold">
                  {contactMethod === "email" ? "Deine E-Mail" : "Deine Handynummer"}
                </Label>
                <Input
                  id="contact"
                  type={contactMethod === "email" ? "email" : "tel"}
                  placeholder={
                    contactMethod === "email"
                      ? "beispiel@email.de"
                      : "+49 123 456789"
                  }
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  className="h-14 text-lg rounded-xl"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg bg-gradient-warm hover:opacity-90 transition-opacity rounded-xl font-semibold shadow-warm"
              >
                {isSubmitting ? (
                  "Wird gesendet..."
                ) : (
                  <>
                    Community-Link erhalten
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-sm text-muted-foreground text-center mt-6">
              Du erhältst eine Nachricht mit einem persönlichen Link zu unserer Community-Webseite
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignupForm;
