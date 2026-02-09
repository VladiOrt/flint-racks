import { Link } from "react-router-dom";
import { ArrowRight, Shield, Cog, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  {
    icon: Shield,
    title: "Diseño e Ingeniería",
    description:
      "Soluciones de racks personalizadas, diseñadas según tus especificaciones exactas, requisitos sísmicos y flujo operativo.",
  },
  {
    icon: Cog,
    title: "Fabricación",
    description:
      "Manufactura propia con materiales certificados y riguroso control de calidad en cada etapa.",
  },
  {
    icon: TrendingUp,
    title: "Instalación",
    description:
      "Instalación profesional con mínima interrupción en tus operaciones. Planes de despliegue por fases disponibles.",
  },
  {
    icon: Users,
    title: "Mantenimiento e Inspección",
    description:
      "Programas regulares de inspección y servicios de mantenimiento para mantener tus sistemas seguros y funcionando.",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [perimeter, setPerimeter] = useState(0);

  useEffect(() => {
    if (!cardRef.current) return;
    const updatePerimeter = () => {
      const { width, height } = cardRef.current!.getBoundingClientRect();
      setPerimeter(2 * (width + height));
    };
    updatePerimeter();
    window.addEventListener("resize", updatePerimeter);
    return () => window.removeEventListener("resize", updatePerimeter);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-card p-8 lg:p-10 flex flex-col h-full border border-border"
      style={{
        boxShadow: isHovered ? "0px 5px 10px rgba(0,0,0,0.1)" : "0px 0px 0px rgba(0,0,0,0)",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Animated border overlay using SVG */}
      {perimeter > 0 && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ zIndex: 1 }}
        >
          <rect
            x="0.5"
            y="0.5"
            width="calc(100% - 1px)"
            height="calc(100% - 1px)"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray={perimeter}
            strokeDashoffset={isHovered ? 0 : perimeter}
            style={{
              transition: `stroke-dashoffset 2s linear`,
            }}
          />
        </svg>
      )}

      <service.icon size={40} className="text-primary mb-6 relative z-[2]" strokeWidth={1.5} />
      <h3 className="font-heading text-2xl tracking-wide text-foreground mb-3 relative z-[2]">
        {service.title.toUpperCase()}
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 relative z-[2]">
        {service.description}
      </p>
      <Link
        to="/services"
        className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-body font-semibold px-6 py-3 text-sm mt-6 hover:bg-secondary/80 transition-colors duration-200 self-start relative z-[2]"
      >
        Conocer Más
        <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}

export default function ServicesSection() {
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const child = scrollRef.current.children[index] as HTMLElement;
    if (child) {
      scrollRef.current.scrollTo({
        left: child.offsetLeft - (scrollRef.current.offsetWidth - child.offsetWidth) / 2,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % services.length;
        scrollToIndex(next);
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile, scrollToIndex]);

  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;
    const container = scrollRef.current;
    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const childWidth = (container.children[0] as HTMLElement)?.offsetWidth || 1;
      const gap = 16;
      const index = Math.round(scrollLeft / (childWidth + gap));
      setActiveIndex(Math.min(index, services.length - 1));
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  if (isMobile) {
    return (
      <section className="py-16 bg-background overflow-hidden">
        <div className="px-6 mb-8 text-center">
          <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
            Lo Que Hacemos
          </span>
          <h2 className="font-heading text-3xl tracking-wide text-foreground mt-3">
            NUESTROS SERVICIOS
          </h2>
          <p className="font-body text-muted-foreground text-sm mt-3 leading-relaxed">
            Desde el diseño hasta la instalación, proporcionamos soluciones integrales de racks.
          </p>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-4 scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="flex-shrink-0 w-[80vw] snap-center bg-card border border-border p-6 flex flex-col"
              style={{ minHeight: "320px" }}
            >
              <service.icon size={36} className="text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-xl tracking-wide text-foreground mb-2">
                {service.title.toUpperCase()}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-body font-semibold px-6 py-3 text-sm mt-4 hover:bg-secondary/80 transition-colors duration-200 self-start"
              >
                Conocer Más
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                scrollToIndex(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
              aria-label={`Ir al servicio ${i + 1}`}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-brand section-padding">
        <div className="text-center mb-16">
          <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
            Lo Que Hacemos
          </span>
          <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-foreground mt-3">
            NUESTROS SERVICIOS
          </h2>
          <p className="font-body text-muted-foreground text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Desde el diseño hasta la instalación, proporcionamos soluciones integrales de racks que
            maximizan la eficiencia y seguridad de tu almacén.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
