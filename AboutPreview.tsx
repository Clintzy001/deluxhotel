import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "200+", label: "Luxury Suites" },
  { value: "50+", label: "Expert Staff" },
  { value: "4.9", label: "Guest Rating" },
];

const AboutPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs tracking-[0.3em] uppercase text-primary font-body">
                Our Story
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight">
                A Legacy of{" "}
                <span className="italic text-royal-gradient">Unparalleled</span>{" "}
                Hospitality
              </h2>
              <div className="line-decoration" />
            </div>
            <p className="text-muted-foreground font-body leading-relaxed">
              Since 2009, Aurélian has redefined luxury hospitality. Nestled in
              the heart of the city, our establishment blends timeless elegance
              with modern sophistication — offering an all-encompassing retreat
              for the discerning traveler.
            </p>
            <Link
              to="/about"
              className="inline-flex px-8 py-3 bg-royal-gradient text-primary-foreground text-xs tracking-[0.15em] uppercase font-body rounded-lg hover:opacity-90 transition-opacity"
            >
              Read Our Story
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center space-y-2 shadow-sm"
              >
                <p className="font-display text-3xl md:text-4xl text-royal-gradient">
                  {stat.value}
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-body">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
