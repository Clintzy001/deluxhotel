import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader
        subtitle="Get In Touch"
        title="Contact & Reservations"
        description="Our concierge team is here to curate your perfect experience."
      />

      <section ref={ref} className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-medium">We'd Love to Hear From You</h2>
              <p className="text-muted-foreground font-body leading-relaxed">
                Whether you're planning a getaway, a dinner reservation, or a spa day, 
                our team is ready to make it happen.
              </p>
            </div>

            {[
              { icon: MapPin, label: "Address", value: "42 Grandeur Avenue, Victoria Island, Lagos" },
              { icon: Phone, label: "Phone", value: "+234 (0) 812 345 6789" },
              { icon: Mail, label: "Email", value: "reservations@aurelian.com" },
              { icon: Clock, label: "Hours", value: "24/7 — We Never Sleep" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-primary font-body mb-1 font-semibold">
                    {label}
                  </p>
                  <p className="text-foreground font-body text-sm">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6 bg-card border border-border rounded-xl p-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="bg-muted border border-border rounded-lg px-5 py-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="bg-muted border border-border rounded-lg px-5 py-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-muted border border-border rounded-lg px-5 py-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
            <select
              className="w-full bg-muted border border-border rounded-lg px-5 py-4 text-sm font-body text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              defaultValue=""
              required
            >
              <option value="" disabled>Select Service</option>
              <option>Hotel Reservation</option>
              <option>Restaurant Booking</option>
              <option>Spa & Massage</option>
              <option>Barbing Salon</option>
              <option>Laundry Service</option>
            </select>
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-muted border border-border rounded-lg px-5 py-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 bg-royal-gradient text-primary-foreground text-xs tracking-[0.2em] uppercase font-body rounded-lg hover:opacity-90 transition-opacity"
            >
              {submitted ? "Message Sent ✓" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
