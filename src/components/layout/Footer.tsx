import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoRed from "@/assets/logo-red.svg";

const footerLinks = [
  {
    title: "Empresa",
    links: [
      { label: "Nosotros", path: "/about" },
      { label: "Servicios", path: "/services" },
      { label: "Blog", path: "/blog" },
      { label: "Contacto", path: "/contact" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Rack Selectivo", path: "/services" },
      { label: "Rack Drive-In", path: "/services" },
      { label: "Sistemas Push-Back", path: "/services" },
      { label: "Rack Cantilever", path: "/services" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "Preguntas Frecuentes", path: "/faqs" },
      { label: "Política de Privacidad", path: "/privacy" },
      { label: "Términos de Servicio", path: "/terms" },
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
              <img src={logoRed} alt="Flint Racks" className="h-8 w-auto" />
            </Link>
            <p className="font-body text-iron-foreground/60 text-sm leading-relaxed max-w-sm mb-8">
              Soluciones de racks industriales diseñadas, fabricadas e instaladas con precisión. 
              Estructura que eleva tu negocio.
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
            © {new Date().getFullYear()} Flint Racks. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-iron-foreground/40">
            Estructura es Poder
          </p>
        </div>
      </div>
    </footer>
  );
}
