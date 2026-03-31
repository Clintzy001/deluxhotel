import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Heart, Globe } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "200+", label: "Luxury Suites" },
  { value: "50+", label: "Expert Staff" },
  { value: "4.9", label: "Guest Rating" },
];

const values = [
  { icon: Award, title: "Excellence", desc: "We pursue perfection in every detail — from the thread count of our linens to the precision of every dish." },
  { icon: Users, title: "Hospitality", desc: "Every guest is family. We anticipate needs before they're spoken and exceed expectations consistently." },
  { icon: Heart, title: "Passion", desc: "Our team is driven by a genuine love for service, craftsmanship, and creating unforgettable moments." },
  { icon: Globe, title: "Sustainability", desc: "Luxury and responsibility coexist. We embrace eco-conscious practices across all our operations." },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader
        subtitle="Our Story"
        title="About Aurélian"
        description="A legacy of unparalleled luxury, service, and sophistication since 2009."
        backgroundImage={heroImage}
      />

      {/* Story */}
      <section className="section-padding max-w-5xl mx-auto">
        <div className="space-y-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-medium">
            A Legacy of <span className="italic text-royal-gradient">Unparalleled</span> Hospitality
          </h2>
          <div className="line-decoration mx-auto" />
          <div className="space-y-6 text-left md:text-center max-w-3xl mx-auto">
            <p className="text-muted-foreground font-body leading-relaxed">
              Since 2009, Aurélian has redefined luxury hospitality. Nestled in the heart of Victoria Island, Lagos,
              our establishment blends timeless elegance with modern sophistication — offering an all-encompassing
              retreat for the discerning traveler.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              What began as a vision to create the ultimate urban sanctuary has blossomed into a destination renowned
              for its impeccable service, world-class dining, rejuvenating spa experiences, and attention to detail
              that borders on the obsessive.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              From our Michelin-inspired restaurant to the serene spa sanctuary, every corner of Aurélian whispers
              refinement. Our dedicated team ensures every moment of your stay is nothing short of extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={ref} className="section-padding bg-muted/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
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
      </section>

      {/* Values */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-body">What Drives Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium">Our Values</h2>
          <div className="line-decoration mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 space-y-4 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <v.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium">{v.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
