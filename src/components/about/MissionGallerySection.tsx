import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

import imgAutomotive from "@/assets/industry-automotive.jpg";
import imgFood from "@/assets/industry-food.jpg";
import imgLogistics from "@/assets/industry-logistics.jpg";
import imgManufacturing from "@/assets/industry-manufacturing.jpg";
import imgPharma from "@/assets/industry-pharma.jpg";
import imgRetail from "@/assets/industry-retail.jpg";
import imgInstallation from "@/assets/about-installation.jpg";
import imgRacks from "@/assets/services-racks.jpg";

const galleryImages = [
  { src: imgAutomotive, alt: "Industria automotriz" },
  { src: imgFood, alt: "Industria alimentaria" },
  { src: imgLogistics, alt: "Logística" },
  { src: imgManufacturing, alt: "Manufactura" },
  { src: imgPharma, alt: "Farmacéutica" },
  { src: imgRetail, alt: "Retail" },
  { src: imgInstallation, alt: "Instalación" },
  { src: imgRacks, alt: "Racks industriales" },
];

export default function MissionGallerySection() {
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
        const next = (prev + 1) % galleryImages.length;
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
      setActiveIndex(Math.min(index, galleryImages.length - 1));
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <>
      {/* Mission Statement */}
      <section className="py-24 lg:py-36 bg-background relative overflow-hidden">
        {/* Floating decorative circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-16 lg:top-24 right-[5%] w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden hidden md:block"
        >
          <img src={imgRacks} alt="" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-20 lg:bottom-28 left-[8%] w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden hidden md:block"
        >
          <img src={imgInstallation} alt="" className="w-full h-full object-cover" />
        </motion.div>

        <div className="container-brand section-padding relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-body text-sm text-primary font-semibold uppercase tracking-wider"
            >
              Quiénes Somos
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-wide text-foreground mt-4 leading-[0.95] uppercase"
            >
              Construido con seguridad, diseñado para rendir
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 space-y-4 max-w-3xl mx-auto"
            >
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                Flint Racks nació de la convicción de que la eficiencia y la seguridad son la base
                de toda operación bien diseñada. Somos una marca enfocada en diseñar, fabricar
                e implementar racks industriales y soluciones de almacenamiento, respaldados por
                conocimiento técnico y experiencia de campo.
              </p>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                En un mundo donde las operaciones de las empresas dependen de su capacidad de organización,
                seguridad y optimización de espacio, nos convertimos en un socio estratégico. Hablamos de
                estructuras metálicas, pero también de confianza, respaldo y visión de crecimiento.
              </p>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                Porque entendemos que cada rack sostiene mucho más que productos: sostiene la
                logística, la seguridad y la continuidad del negocio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-foreground text-foreground font-body font-semibold px-10 py-4 text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                Ver Nuestros Servicios
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-background overflow-hidden">
        {isMobile ? (
          <>
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-4 scrollbar-hide"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex-shrink-0 w-[75vw] snap-center"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    scrollToIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Ir a imagen ${i + 1}`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="container-brand section-padding">
            <div className="grid grid-cols-4 gap-5">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`overflow-hidden ${i % 2 === 0 ? "mt-8" : ""}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
