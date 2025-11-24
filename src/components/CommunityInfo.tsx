import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Sparkles } from "lucide-react";

const CommunityInfo = () => {
  const features = [
    {
      icon: Users,
      title: "Vielfältige Gemeinschaft",
      description: "Wir kommen aus verschiedenen Konfessionen und Gruppen zusammen, um gemeinsam Nachfolge zu leben. Ob Protestant, Katholik, Baptist, Charismatiker oder ohne Kirchenzugehörigkeit – alle sind willkommen."
    },
    {
      icon: Heart,
      title: "Einheit in Christus",
      description: "Wir sind alle Glieder eines Leibes, nämlich unseres Herrn Jesus Christus. In Liebe widmen wir uns gemeinsamen Gebet, Gesang, Abendmahl, Studium und lebendiger Gemeinschaft."
    },
    {
      icon: BookOpen,
      title: "Nachfolge in Tat und Wahrheit",
      description: "Unser Ziel ist nicht gemeinsame Theologie, sondern Nachfolge in Tat und Wahrheit – ganz im Geiste des Herrn, wie Er in der Heiligen Schrift verkündet wird."
    },
    {
      icon: Sparkles,
      title: "Gegenseitige Erbauung",
      description: "Wir ermutigen uns in der Nachfolge, fangen uns auf wenn wir angefochten werden und bekräftigen uns mit Erbauung und Segen. Statt Belehrungen setzen wir auf Gebet und Vertrauen in den Heiligen Geist."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Unsere Gemeinschaft
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gemeinsam auf dem Weg der Nachfolge Jesu
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-warm transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-warm flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border">
            <p className="text-lg md:text-xl text-muted-foreground italic mb-6">
              „Was siehst du aber den Splitter im Auge deines Bruders, und den Balken in deinem eigenen Auge bemerkst du nicht?"
            </p>
            <p className="text-base text-muted-foreground">
              – Matthäus 7,3–5
            </p>
            <p className="text-xl font-semibold text-foreground mt-8">
              Unser Herr segne euch, liebe Brüder und Schwestern 🙏
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityInfo;
