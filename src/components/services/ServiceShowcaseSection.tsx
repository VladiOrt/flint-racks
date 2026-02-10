import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import imgPredefined from "@/assets/service-predefined-racks.jpg";
import imgCustom from "@/assets/service-custom-racks.jpg";

export default function ServiceShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const leftImageY = useTransform(scrollYProgress, [0.15, 0.55], ["110%", "0%"]);
  const rightTextY = useTransform(scrollYProgress, [0.15, 0.55], ["-110%", "0%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.5, 0.35]);

  return (
    <section ref={sectionRef} className="relative" style={{ height: "350vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* ===== LEFT HALF ===== */}
          <div className="relative h-full overflow-hidden hidden lg:block">
            {/* Base layer: Service 2 text */}
            <div className="absolute inset-0 flex flex-col justify-center bg-sand px-12 lg:px-16 z-[1]">
              <TextPanel
                subtitle="A la Medida"
                title="Racks Personalizados"
                paragraph="Diseñamos y fabricamos soluciones de almacenamiento únicas, adaptadas a las dimensiones, cargas y flujos operativos de tu almacén."
              />
            </div>

            {/* Overlay layer: Service 1 image (slides in from bottom) */}
            <motion.div
              className="absolute inset-0 z-[2] overflow-hidden"
              style={{ y: leftImageY }}
            >
              <motion.img
                src={imgPredefined}
                alt="Racks Prediseñados"
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.15 }}
                viewport={{ once: true }}
                transition={{ duration: 30, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 bg-iron"
                style={{ opacity: overlayOpacity }}
              />
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
            {/* Base layer: Service 2 image */}
            <div className="absolute inset-0 z-[1] overflow-hidden">
              <motion.img
                src={imgCustom}
                alt="Racks Personalizados"
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.15 }}
                viewport={{ once: true }}
                transition={{ duration: 30, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-iron/40" />
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
              className="absolute inset-0 flex flex-col justify-center bg-sand px-12 lg:px-16 z-[2]"
              style={{ y: rightTextY }}
            >
              <TextPanel
                subtitle="Estándar"
                title="Racks Prediseñados"
                paragraph="Sistemas de almacenamiento probados y listos para instalar, con tiempos de entrega reducidos y máxima eficiencia operativa."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TextPanel({
  subtitle,
  title,
  paragraph,
}: {
  subtitle: string;
  title: string;
  paragraph: string;
}) {
  return (
    <div className="max-w-md flex flex-col items-start text-left">
      <span className="font-body text-sm font-semibold uppercase tracking-wider text-sand-foreground/60 mb-4">
        {subtitle}
      </span>

      <h2 className="font-heading text-4xl sm:text-5xl tracking-wide text-sand-foreground leading-[0.95] uppercase">
        {title}
      </h2>

      <p className="font-body text-sm text-sand-foreground/70 leading-relaxed mt-5 max-w-sm">
        {paragraph}
      </p>

      <div className="w-16 h-px bg-border my-8" />

      <Link
        to="/contact"
        className="inline-flex items-center gap-2 bg-sand-foreground text-sand font-body font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
      >
        Cotizar
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
