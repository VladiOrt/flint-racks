import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Services", path: "/services" },
      { label: "Blog", path: "/blog" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Selective Racking", path: "/services" },
      { label: "Drive-In Racking", path: "/services" },
      { label: "Push-Back Systems", path: "/services" },
      { label: "Cantilever Racks", path: "/services" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", path: "/faqs" },
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-iron text-iron-foreground">
      {/* Main Footer */}
      <div className="container-brand section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-heading text-3xl tracking-wider text-primary">
                FLINT RACKS
              </span>
              <span className="text-primary text-xs align-super">®</span>
            </Link>
            <p className="font-body text-iron-foreground/60 text-sm leading-relaxed max-w-sm mb-8">
              Industrial racking solutions designed, fabricated, and installed with precision. 
              Structure that elevates your business.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:contact@flintracks.com" className="flex items-center gap-3 text-sm text-iron-foreground/60 hover:text-primary transition-colors">
                <Mail size={16} />
                contact@flintracks.com
              </a>
              <a href="tel:+521234567890" className="flex items-center gap-3 text-sm text-iron-foreground/60 hover:text-primary transition-colors">
                <Phone size={16} />
                +52 (123) 456-7890
              </a>
              <span className="flex items-center gap-3 text-sm text-iron-foreground/60">
                <MapPin size={16} />
                Monterrey, NL, México
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-xl tracking-wider text-iron-foreground mb-6">
                {col.title.toUpperCase()}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="font-body text-sm text-iron-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-iron-foreground/10">
        <div className="container-brand section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-iron-foreground/40">
            © {new Date().getFullYear()} Flint Racks. All rights reserved.
          </p>
          <p className="font-body text-xs text-iron-foreground/40">
            Estructura es Poder
          </p>
        </div>
      </div>
    </footer>
  );
}
