import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Utensils, Sparkles, Scissors, WashingMachine } from "lucide-react";
import restaurantImg from "@/assets/restaurant.jpg";
import spaImg from "@/assets/spa.jpg";
import barberImg from "@/assets/barber.jpg";
import laundryImg from "@/assets/laundry.jpg";

const services = [
  {
    title: "Fine Dining",
    subtitle: "Restaurant & Lounge",
    description: "Savour exquisite cuisine crafted by world-renowned chefs in an intimate setting.",
    image: restaurantImg,
    icon: Utensils,
    link: "/restaurant",
  },
  {
    title: "Spa & Wellness",
    subtitle: "Massage & Rejuvenation",
    description: "Surrender to serenity with holistic treatments — deep-tissue massage, aromatherapy, and more.",
    image: spaImg,
    icon: Sparkles,
    link: "/spa",
  },
  {
    title: "Grooming Studio",
    subtitle: "Barbing Salon",
    description: "Precision cuts, hot-towel shaves, and beard sculpting in a sophisticated lounge.",
    image: barberImg,
    icon: Scissors,
    link: "/salon",
  },
  {
    title: "Laundry Service",
    subtitle: "Premium Garment Care",
    description: "Same-day dry cleaning, pressing, and garment restoration — every detail matters.",
    image: laundryImg,
    icon: WashingMachine,
    link: "/laundry",
  },
];

const ServicesPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-body">
            What We Offer
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium">
            Our Services
          </h2>
          <div className="line-decoration mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            >
              <Link
                to={service.link}
                className="group block bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-overlay-light" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-primary/90 rounded-lg flex items-center justify-center">
                    <service.icon size={18} className="text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-body">
                    {service.subtitle}
                  </p>
                  <h3 className="font-display text-xl font-medium text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-block text-xs text-primary font-body font-semibold tracking-wider uppercase mt-2 group-hover:translate-x-1 transition-transform">
                    Learn More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
