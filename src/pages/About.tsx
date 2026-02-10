import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, Handshake, Gauge, ShieldCheck } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import MissionGallerySection from "@/components/about/MissionGallerySection";
import GalleryScrollAlign from "@/components/about/GalleryScrollAlign";
import heroImg from "@/assets/hero-warehouse.jpg";

const values = [
  { icon: ShieldCheck, title: "Solidez", description: "Estructuras confiables garantizadas, construidas para durar y rendir bajo condiciones exigentes." },
  { icon: Lightbulb, title: "Innovación", description: "Diseño adaptado a tus necesidades operativas específicas y planes de crecimiento." },
  { icon: Handshake, title: "Compromiso", description: "Acompañamos a nuestros clientes en cada fase — desde el diseño hasta la operación." },
  { icon: Gauge, title: "Eficiencia", description: "Maximizando espacio, tiempo y productividad en cada instalación." },
  { icon: Target, title: "Seguridad", description: "Cada rack protege no solo productos, sino toda tu operación empresarial." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ── Value Card (replicates ServicesSection card style) ── */
function ValueCard({ value, index }: { value: typeof values[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [perimeter, setPerimeter] = useState(0);

  useEffect(() => {
    if (!cardRef.current) return;
    const update = () => {
      const { width, height } = cardRef.current!.getBoundingClientRect();
      setPerimeter(2 * (width + height));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
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
      {perimeter > 0 && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 1 }}>
          <rect x="0.5" y="0.5" width="calc(100% - 1px)" height="calc(100% - 1px)" fill="none"
            stroke="hsl(var(--primary))" strokeWidth="2"
            strokeDasharray={perimeter} strokeDashoffset={isHovered ? 0 : perimeter}
            style={{ transition: "stroke-dashoffset 1s linear" }} />
        </svg>
      )}
      <value.icon size={40} className="text-primary mb-6 relative z-[2]" strokeWidth={1.5} />
      <h3 className="font-heading text-2xl tracking-wide text-foreground mb-3 relative z-[2]">
        {value.title.toUpperCase()}
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 relative z-[2]">
        {value.description}
      </p>
    </motion.div>
  );
}

/* ── Values Section (desktop grid + mobile carousel) ── */
function ValuesSection() {
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const allItems = values.length + 1; // +1 for CTA card

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
        const next = (prev + 1) % allItems;
        scrollToIndex(next);
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile, scrollToIndex, allItems]);

  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;
    const container = scrollRef.current;
    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const childWidth = (container.children[0] as HTMLElement)?.offsetWidth || 1;
      const gap = 16;
      const index = Math.round(scrollLeft / (childWidth + gap));
      setActiveIndex(Math.min(index, allItems - 1));
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isMobile, allItems]);

  const ctaCard = (mobile?: boolean) => (
    <div
      className={`${mobile ? "flex-shrink-0 w-[80vw] snap-center" : ""} p-8 flex flex-col justify-between border border-primary bg-primary`}
      style={{ minHeight: mobile ? "320px" : undefined }}
    >
      <div>
        <h3 className="font-heading text-2xl tracking-wide text-primary-foreground mb-3">
          TRABAJA CON NOSOTROS
        </h3>
        <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
          Conoce nuestros servicios y descubre cómo podemos optimizar tu operación.
        </p>
      </div>
      <Link
        to="/services"
        className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground bg-transparent font-body font-semibold px-6 py-3 text-sm uppercase tracking-wider hover:bg-primary-foreground hover:text-primary transition-colors duration-200 self-start mt-6"
      >
        Ver Servicios
        <ArrowRight size={14} />
      </Link>
    </div>
  );

  if (isMobile) {
    return (
      <section className="py-16 overflow-hidden" style={{ backgroundColor: '#d6c4a9' }}>
        <div className="px-6 mb-8 text-center">
          <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">Lo Que Nos Define</span>
          <h2 className="font-heading text-3xl tracking-wide text-foreground mt-3">VALORES DE MARCA</h2>
        </div>
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-4 scrollbar-hide" style={{ WebkitOverflowScrolling: "touch" }}>
          {values.map((value) => (
            <div key={value.title} className="flex-shrink-0 w-[80vw] snap-center bg-card border border-border p-6 flex flex-col" style={{ minHeight: "320px" }}>
              <value.icon size={36} className="text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-xl tracking-wide text-foreground mb-2">{value.title.toUpperCase()}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">{value.description}</p>
            </div>
          ))}
          {ctaCard(true)}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: allItems }).map((_, i) => (
            <button key={i} onClick={() => { setActiveIndex(i); scrollToIndex(i); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
              aria-label={`Ir al valor ${i + 1}`} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#d6c4a9' }}>
      <div className="container-brand section-padding">
        <div className="text-center mb-16">
          <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">Lo Que Nos Define</span>
          <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-foreground mt-3">VALORES DE MARCA</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <ValueCard key={value.title} value={value} index={i} />
          ))}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: values.length * 0.1 }}>
            {ctaCard()}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden">
        {/* Background image */}
        <motion.img
          src={heroImg}
          alt="Almacén industrial"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-iron/70" />

        {/* Large watermark text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span
            className="font-heading text-[15vw] sm:text-[18vw] lg:text-[14vw] tracking-wider leading-none max-w-full overflow-hidden"
            style={{
              background: "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0.1))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            NOSOTROS
          </span>
        </motion.div>

        {/* Content */}
        <div className="relative container-brand section-padding pb-16 lg:pb-20 w-full">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-iron-foreground leading-[0.95] max-w-3xl"
            >
              NUESTRA VISIÓN ES
              <br />
              <span className="text-primary">CONSTRUIR</span> TU FUTURO
            </motion.h1>

            {/* Right column: description + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-5 lg:max-w-sm lg:pb-1"
            >
              <p className="font-body text-iron-foreground/70 text-sm leading-relaxed">
                Diseñamos, fabricamos e instalamos soluciones de racks industriales respaldadas por experiencia técnica y de campo.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:bg-red-deep transition-colors duration-200 w-fit"
              >
                Contáctanos
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <MissionGallerySection />
      <GalleryScrollAlign />

      <ValuesSection />

    </>
  );
}
