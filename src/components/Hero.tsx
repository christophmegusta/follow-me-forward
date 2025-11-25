import { motion } from "framer-motion";
import heroImage from "@/assets/hero-shepherd.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Scroll Button */}
      <motion.a
        href="#community"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-8 left-8 z-20 bg-background/80 backdrop-blur-sm text-foreground px-6 py-3 rounded-full text-sm font-semibold shadow-elegant hover:shadow-hover transition-all duration-300 border border-border/20"
      >
        Unsere Gemeinschaft
      </motion.a>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Spirituelle Landschaft" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-glow opacity-30" />
      </div>

      {/* Floating Orbs */}
      <motion.div animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.6, 0.3]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }} className="absolute top-20 right-[10%] w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <motion.div animate={{
      y: [0, 40, 0],
      opacity: [0.2, 0.5, 0.2]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }} className="absolute bottom-20 left-[15%] w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-12 py-20">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }} className="max-w-5xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1.2,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }} className="mb-12">
            <motion.div initial={{
            width: 0
          }} animate={{
            width: "100px"
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }} className="h-1 bg-gradient-warm mx-auto mb-8 rounded-full" />
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] text-foreground tracking-tight lg:text-6xl">
              „Ich habe dich bei deinem <span className="text-transparent bg-clip-text bg-gradient-warm">Namen gerufen</span>, du bist mein."
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
              – Jesaja 43,1
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.7
        }} className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-warm opacity-5 blur-2xl rounded-3xl" />
            <p className="text-lg md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-light relative">
              Wir sind eine Gemeinschaft von Jüngern, die dem Herrn Jesus nachfolgen möchten – im Geiste, mit all unserer Kraft und von ganzem Herzen.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 1
        }} className="mt-16">
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="inline-block">
              <a href="#signup" className="group relative inline-flex items-center gap-3 bg-gradient-warm text-white px-10 py-5 rounded-full text-lg font-semibold shadow-elegant hover:shadow-hover transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Jetzt Nachfolgen</span>
                <motion.span animate={{
                x: [0, 5, 0]
              }} transition={{
                duration: 1.5,
                repeat: Infinity
              }} className="relative z-10">
                  →
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default Hero;