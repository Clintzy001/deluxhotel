import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-hotel.jpg";

const HeroSection = () => (
  <section className="relative h-screen w-full overflow-hidden">
    <img
      src={heroImage}
      alt="Aurélian Hotel luxury lobby"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-overlay" />

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="space-y-6"
      >
        <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-royal-light font-body">
          Hotel · Lounge · Spa
        </p>
        <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-medium leading-[1.1] max-w-4xl text-white">
          Where Luxury{" "}
          <span className="italic text-royal-gradient">Meets</span>{" "}
          Serenity
        </h1>
        <p className="font-body text-sm md:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
          A sanctuary of refined elegance — indulge in world-class dining,
          rejuvenating spa rituals, and bespoke grooming, all under one roof.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-12 flex flex-col sm:flex-row gap-4"
      >
        <Link
          to="/services"
          className="px-10 py-4 bg-royal-gradient text-white text-xs tracking-[0.2em] uppercase font-body rounded-lg hover:opacity-90 transition-opacity"
        >
          Explore Services
        </Link>
        <Link
          to="/contact"
          className="px-10 py-4 border border-white/30 text-white text-xs tracking-[0.2em] uppercase font-body rounded-lg hover:border-royal-light hover:text-royal-light transition-colors"
        >
          Book a Stay
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10"
      >
        <div className="w-[1px] h-16 bg-royal-light/40 mx-auto animate-pulse" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
