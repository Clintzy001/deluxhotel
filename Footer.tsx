import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Restaurant", href: "/restaurant" },
  { label: "Spa & Massage", href: "/spa" },
  { label: "Grooming Salon", href: "/salon" },
  { label: "Laundry", href: "/laundry" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link to="/" className="font-display text-2xl tracking-wider text-royal-gradient inline-block">
            AURÉLIAN
          </Link>
          <p className="text-sm font-body text-background/60 leading-relaxed max-w-xs">
            A sanctuary of refined elegance — world-class dining, rejuvenating spa, bespoke grooming, all under one roof.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h4 className="text-xs tracking-[0.2em] uppercase font-body font-semibold text-background/80">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm font-body text-background/50 hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-xs tracking-[0.2em] uppercase font-body font-semibold text-background/80">Contact</h4>
          <div className="space-y-3">
            {[
              { icon: MapPin, text: "42 Grandeur Avenue, Victoria Island, Lagos" },
              { icon: Phone, text: "+234 (0) 812 345 6789" },
              { icon: Mail, text: "info@aurelian.com" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3">
                <Icon size={14} className="text-royal-light mt-0.5 flex-shrink-0" />
                <p className="text-sm font-body text-background/50">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-background/40 font-body">
          © {new Date().getFullYear()} Aurélian Hotel & Lounge. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service"].map((item) => (
            <span key={item} className="text-xs text-background/40 font-body hover:text-background/60 cursor-pointer transition-colors">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
