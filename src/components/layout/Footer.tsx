import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 pt-8">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-sans font-bold text-xl">V</span>
              </div>
              <span className="font-sans font-semibold text-xl text-white tracking-tight">
                Vista<span className="text-primary">360</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              State-of-the-art digital experiences and virtual capabilities that help forward-thinking brands increase conversions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-medium text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/services", label: "Services" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-medium text-white text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "360° Virtual Tours",
                "Website Development",
                "Web App Development",
                "Mobile App Development",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-medium text-white text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Accra, Ghana
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +233 XX XXX XXXX
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                hello@vista360.gh
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Vista360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
