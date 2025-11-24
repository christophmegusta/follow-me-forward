import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Spirituelle Landschaft" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
              „Ich habe dich bei deinem Namen gerufen, du bist mein."
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              – Jesaja 43,1
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Eine Gemeinschaft von Jüngern, die dem Herrn Jesus nachfolgen möchten – 
              im Geiste, mit all unserer Kraft und von ganzem Herzen.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
