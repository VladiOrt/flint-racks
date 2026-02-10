import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import img1 from "@/assets/showcase-rack-1.jpg";
import img2 from "@/assets/showcase-rack-2.jpg";
import img3 from "@/assets/showcase-rack-3.jpg";

const images = [img1, img2, img3, img1, img2, img3];

const bars = [
  { label: "Satisfacción del Cliente", value: 97 },
  { label: "Proyectos a Tiempo", value: 92 },
];

function ProgressBar({ label, value }: { label: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex justify-between font-body text-sm font-semibold uppercase tracking-wider text-foreground">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full h-1 bg-border overflow-hidden">
        <motion.div
          className="h-full bg-foreground"
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function ProductShowcaseSection() {
  return (
    <section className="bg-background overflow-hidden">
      {/* Big text banner */}
      <div className="py-10 lg:py-14 flex items-center justify-center">
        <span className="font-heading text-[18vw] sm:text-[15vw] lg:text-[12vw] tracking-wider leading-none text-foreground select-none">
          SISTEMAS
        </span>
      </div>

      {/* Content row */}
      <div className="flex flex-col lg:flex-row">
        {/* Left – text + progress bars */}
        <div className="w-full lg:w-[40%] px-6 lg:px-16 pb-16 lg:pb-20 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl tracking-wide text-foreground leading-[0.95] uppercase"
          >
            Experiencia en la que Puedes Confiar
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-muted-foreground text-sm leading-relaxed mt-5 max-w-md"
          >
            Cada proyecto respaldado por años de experiencia en diseño, fabricación e instalación de sistemas de almacenamiento industrial.
          </motion.p>

          <div className="w-full h-px bg-border my-8" />

          <div className="flex flex-col gap-6 max-w-md">
            {bars.map((bar) => (
              <ProgressBar key={bar.label} label={bar.label} value={bar.value} />
            ))}
          </div>
        </div>

        {/* Right – horizontal scrolling images */}
        <div className="w-full lg:w-[60%] overflow-hidden pb-16 lg:pb-20">
          <motion.div
            className="flex gap-5 pl-6"
            animate={{ x: [0, -1260] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] sm:w-[315px] aspect-square overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Proyecto de racks ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
