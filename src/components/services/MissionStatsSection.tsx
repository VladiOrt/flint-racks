import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import imgRacks from "@/assets/services-racks.jpg";

const stats = [
  { value: 500, suffix: "+", label: "Proyectos Completados", description: "Soluciones de almacenamiento instaladas en todo México con resultados comprobados." },
  { value: 15, suffix: "+", label: "Años de Experiencia", description: "Respaldados por más de una década de conocimiento técnico y operativo en el sector." },
  { value: 99, suffix: "%", label: "Clientes Satisfechos", description: "Nuestro compromiso con la calidad se refleja en la confianza de quienes nos eligen." },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate(count, value, { duration: 2, ease: "easeOut" });
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [count, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <span ref={ref} className="font-heading text-6xl md:text-7xl lg:text-8xl tracking-wide text-foreground">0{suffix}</span>;
}

export default function MissionStatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-brand section-padding">
        {/* Top: heading + image */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-16 lg:mb-20">
          <div className="lg:max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block font-body text-sm text-foreground font-semibold uppercase tracking-wider border border-foreground rounded-full px-4 py-1.5"
            >
              Industrias
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-wide text-foreground mt-6 leading-[0.95] uppercase"
            >
              Construcción de calidad es la base de un mejor futuro
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:w-[400px] flex-shrink-0"
          >
            <img
              src={imgRacks}
              alt="Instalación industrial"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 lg:p-10"
              style={{ backgroundColor: "#faf6ec" }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="mt-6 pt-6 border-t border-foreground/15">
                <h3 className="font-heading text-sm tracking-wider text-foreground uppercase mb-2">
                  {stat.label}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
