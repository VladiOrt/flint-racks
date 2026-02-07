import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "FAQs", path: "/faqs" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-iron/95 backdrop-blur-sm">
      <div className="container-brand section-padding flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-3xl tracking-wider text-primary">
            FLINT RACKS
          </span>
          <span className="text-primary text-xs">®</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-sm tracking-wide uppercase transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-iron-foreground/80 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-sm px-6 py-3 hover:bg-red-deep transition-colors duration-200"
        >
          Get a Quote
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-iron-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-iron border-t border-iron-foreground/10 overflow-hidden"
          >
            <nav className="section-padding py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`font-body text-base uppercase tracking-wide ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-iron-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center bg-primary text-primary-foreground font-body font-semibold text-sm px-6 py-3"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
