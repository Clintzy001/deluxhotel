import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
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
    description:
      "Savour exquisite cuisine crafted by world-renowned chefs. From intimate candlelit dinners to vibrant lounge evenings, every meal is an experience worth savouring.",
    image: restaurantImg,
    icon: Utensils,
    link: "/restaurant",
    features: ["International Cuisine", "Private Dining", "Cocktail Lounge", "Room Service"],
  },
  {
    title: "Spa & Wellness",
    subtitle: "Massage & Rejuvenation",
    description:
      "Surrender to serenity with our holistic treatments — deep-tissue massage, aromatherapy, facials, and hydrotherapy in a tranquil setting designed for total relaxation.",
    image: spaImg,
    icon: Sparkles,
    link: "/spa",
    features: ["Deep Tissue Massage", "Aromatherapy", "Facials", "Hydrotherapy"],
  },
  {
    title: "Grooming Studio",
    subtitle: "Barbing Salon",
    description:
      "Precision cuts, hot-towel shaves, and beard sculpting in a sophisticated gentleman's lounge. Look sharp, feel sharper.",
    image: barberImg,
    icon: Scissors,
    link: "/salon",
    features: ["Precision Haircuts", "Hot Towel Shave", "Beard Sculpting", "Scalp Treatment"],
  },
  {
    title: "Laundry Service",
    subtitle: "Premium Garment Care",
    description:
      "Same-day dry cleaning, pressing, and garment restoration — because every detail matters when you're a guest of distinction.",
    image: laundryImg,
    icon: WashingMachine,
    link: "/laundry",
    features: ["Same-Day Service", "Dry Cleaning", "Pressing & Ironing", "Garment Restoration"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader
        subtitle="What We Offer"
        title="Our Services"
        description="Experience world-class hospitality across every touchpoint — from fine dining and spa rejuvenation to expert grooming and premium garment care."
      />

      <section ref={ref} className="section-padding max-w-7xl mx-auto">
        <div className="space-y-24 lg:space-y-32">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
              >
                <div className="w-full lg:w-1/2 overflow-hidden group rounded-xl">
                  <div className="relative overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-overlay-light" />
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <service.icon size={22} className="text-primary" />
                    </div>
                    <p className="text-xs tracking-[0.3em] uppercase text-primary font-body">
                      {service.subtitle}
                    </p>
                    <h3 className="font-display text-3xl md:text-5xl font-medium">
                      {service.title}
                    </h3>
                    <div className="line-decoration" />
                  </div>
                  <p className="text-muted-foreground font-body leading-relaxed max-w-md">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {service.features.map((f) => (
                      <li key={f} className="text-sm font-body text-foreground/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="inline-flex px-8 py-3 bg-royal-gradient text-primary-foreground text-xs tracking-[0.15em] uppercase font-body rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
