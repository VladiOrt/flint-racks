import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import imgPredefined from "@/assets/service-predefined-racks.jpg";
import imgCustom from "@/assets/service-custom-racks.jpg";
import logoBlack from "@/assets/logo-stacked-black.png";

export default function ServiceShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Service 1 panels slide IN (from off-screen to 0)
  // Left image: starts at -110% (above), slides to 0%
  const leftImageY = useTransform(scrollYProgress, [0.15, 0.55], ["110%", "0%"]);
  // Right text: starts at 110% (below), slides to 0%
  const rightTextY = useTransform(scrollYProgress, [0.15, 0.55], ["-110%", "0%"]);

  // Overlay opacity for images
  const overlayOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.5, 0.35]);

  return (
    <section ref={sectionRef} className="relative" style={{ height: "350vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* ===== LEFT HALF ===== */}
          <div className="relative h-full overflow-hidden hidden lg:block">
            {/* Base layer: Service 2 text (visible initially) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-sand px-8 z-[1]">
              <TextPanel
                badge="A la Medida"
                title="Racks Personalizados"
                alignRight
              />
            </div>

            {/* Overlay layer: Service 1 image (slides in from bottom) */}
            <motion.div
              className="absolute inset-0 z-[2]"
              style={{ y: leftImageY }}
            >
              <img
                src={imgPredefined}
                alt="Racks Prediseñados"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-iron"
                style={{ opacity: overlayOpacity }}
              />
              {/* Float text bottom-right */}
              <div className="absolute bottom-10 right-10 text-right text-iron-foreground z-[3]">
                <span className="font-heading text-8xl text-iron-foreground/25 leading-none block">
                  01
                </span>
                <div className="w-full h-px bg-iron-foreground/40 my-3" />
                <p className="font-heading text-sm tracking-wider uppercase max-w-[260px] ml-auto">
                  Soluciones listas para optimizar tu almacén
                </p>
              </div>
            </motion.div>
          </div>

          {/* ===== RIGHT HALF ===== */}
          <div className="relative h-full overflow-hidden">
            {/* Base layer: Service 2 image (visible initially) */}
            <div className="absolute inset-0 z-[1]">
              <img
                src={imgCustom}
                alt="Racks Personalizados"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-iron/40" />
              {/* Float text bottom-left */}
              <div className="absolute bottom-10 left-10 text-iron-foreground z-[3]">
                <span className="font-heading text-8xl text-iron-foreground/25 leading-none block">
                  02
                </span>
                <div className="w-full h-px bg-iron-foreground/40 my-3" />
                <p className="font-heading text-sm tracking-wider uppercase max-w-[260px]">
                  Diseño e ingeniería según tu operación
                </p>
              </div>
            </div>

            {/* Overlay layer: Service 1 text (slides in from top) */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center bg-sand px-8 z-[2]"
              style={{ y: rightTextY }}
            >
              <TextPanel
                badge="Estándar"
                title="Racks Prediseñados"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TextPanel({
  badge,
  title,
  alignRight = false,
}: {
  badge: string;
  title: string;
  alignRight?: boolean;
}) {
  return (
    <div className={`max-w-md flex flex-col ${alignRight ? "items-end text-right" : "items-start text-left"}`}>
      <img
        src={logoBlack}
        alt="Flint Racks"
        className="w-14 h-auto mb-12"
      />

      <span className="inline-block font-body text-xs font-semibold uppercase tracking-wider bg-iron text-iron-foreground px-4 py-1.5 rounded-full mb-5">
        {badge}
      </span>

      <h2 className="font-heading text-4xl sm:text-5xl tracking-wide text-sand-foreground leading-[0.95] uppercase">
        {title}
      </h2>

      <div className="w-16 h-px bg-border my-8" />

      <Link
        to="/contact"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:bg-red-deep transition-colors duration-200"
      >
        Cotizar
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
