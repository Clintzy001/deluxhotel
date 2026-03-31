import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import spaImg from "@/assets/spa.jpg";

const treatments = [
  { name: "Deep Tissue Massage", duration: "60 min", price: "₦25,000", desc: "Intense pressure targeting deep muscle layers for total relief." },
  { name: "Aromatherapy Massage", duration: "90 min", price: "₦30,000", desc: "Essential oils combined with gentle techniques for deep relaxation." },
  { name: "Hot Stone Therapy", duration: "75 min", price: "₦28,000", desc: "Heated basalt stones placed along energy points for tension release." },
  { name: "Luxury Facial", duration: "60 min", price: "₦20,000", desc: "Deep cleansing, exfoliation, and hydration for radiant skin." },
  { name: "Hydrotherapy Session", duration: "45 min", price: "₦18,000", desc: "Water-based treatment for circulation and muscle recovery." },
  { name: "Couples Retreat", duration: "120 min", price: "₦55,000", desc: "Side-by-side massage, facial, and aromatherapy for two." },
];

const amenities = [
  "Steam Room", "Sauna", "Infinity Pool", "Relaxation Lounge",
  "Herbal Tea Bar", "Meditation Garden", "Private Treatment Rooms", "Yoga Studio",
];

const Spa = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <PageHeader
      subtitle="Spa & Wellness"
      title="Massage & Rejuvenation"
      description="A tranquil sanctuary designed for complete mind, body, and soul restoration."
      backgroundImage={spaImg}
    />

    {/* Treatments */}
    <section className="section-padding max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <p className="text-xs tracking-[0.3em] uppercase text-primary font-body">Our Treatments</p>
        <h2 className="font-display text-3xl md:text-5xl font-medium">Spa Menu</h2>
        <div className="line-decoration mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {treatments.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className="bg-card border border-border rounded-xl p-6 space-y-3 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-display text-xl font-medium">{t.name}</h3>
              <p className="font-display text-lg text-primary whitespace-nowrap">{t.price}</p>
            </div>
            <p className="text-sm text-muted-foreground font-body">{t.desc}</p>
            <p className="text-xs text-primary font-body font-semibold tracking-wider">{t.duration}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Amenities */}
    <section className="section-padding bg-muted/50">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-4">Facilities</p>
        <h2 className="font-display text-3xl md:text-5xl font-medium mb-12">Spa Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {amenities.map((a) => (
            <div key={a} className="bg-card border border-border rounded-xl p-5 text-center">
              <p className="font-body text-sm font-medium text-foreground">{a}</p>
            </div>
          ))}
        </div>
        <Link
          to="/contact"
          className="mt-12 inline-flex px-10 py-4 bg-royal-gradient text-primary-foreground text-xs tracking-[0.2em] uppercase font-body rounded-lg hover:opacity-90 transition-opacity"
        >
          Book a Treatment
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Spa;
