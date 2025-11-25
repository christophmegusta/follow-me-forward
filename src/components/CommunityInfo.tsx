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
    <section id="community" className="py-24 md:py-40 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-warm mx-auto mb-8 rounded-full"
          />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Unsere Gemeinschaft
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Gemeinsam auf dem Weg der Nachfolge Jesu
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-card rounded-3xl p-8 lg:p-10 shadow-soft hover:shadow-elegant transition-all duration-500 border border-border/50 hover:border-primary/20 overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-5 mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-warm flex items-center justify-center shadow-elegant"
                  >
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-warm opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-warm opacity-5 blur-3xl rounded-3xl group-hover:opacity-10 transition-opacity duration-500" />
            
            {/* Card */}
            <div className="relative bg-gradient-soft backdrop-blur-sm rounded-3xl p-10 md:p-16 border border-border/50 shadow-soft">
              <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30 rounded-tl-2xl" />
              <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30 rounded-br-2xl" />
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-xl md:text-2xl text-foreground/90 italic mb-8 leading-relaxed font-light">
                  „Was siehst du aber den Splitter im Auge deines Bruders, und den Balken in deinem eigenen Auge bemerkst du nicht?"
                </p>
                <p className="text-lg text-muted-foreground mb-10 font-medium">
                  – Matthäus 7,3–5
                </p>
                
                <div className="h-px w-32 bg-gradient-warm mx-auto mb-10 opacity-50" />
                
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-warm">
                  Unser Herr segne euch, liebe Brüder und Schwestern 🙏
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityInfo;
