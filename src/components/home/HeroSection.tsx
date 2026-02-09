import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-warehouse.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function HeroSection() {
  return (
    <section className="relative h-screen max-h-[100vh] flex items-center overflow-hidden bg-iron">
      {/* Background image with split reveal */}
      <div className="absolute inset-0 flex">
        {/* Left image half */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="h-full overflow-hidden"
        >
          <img
            src={heroImg}
            alt="Almacén industrial con racks"
            className="w-screen h-full object-cover"
          />
        </motion.div>
        {/* Right image half */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="h-full overflow-hidden flex justify-end"
        >
          <img
            src={heroImg}
            alt="Almacén industrial con racks"
            className="w-screen h-full object-cover object-right"
          />
        </motion.div>
      </div>

      {/* Dark overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute inset-0 bg-iron/75"
      />

      {/* Decorative lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="h-full w-full flex justify-between px-[20%]">
          <div className="w-px h-full bg-iron-foreground" />
          <div className="w-px h-full bg-iron-foreground" />
          <div className="w-px h-full bg-iron-foreground" />
          <div className="w-px h-full bg-iron-foreground" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative container-brand section-padding w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2, delayChildren: 1 } },
          }}
          className="flex flex-col lg:flex-row items-end lg:items-end justify-between gap-12 lg:gap-16"
        >
          {/* Left: Headline + trust */}
          <motion.div variants={fadeUp} className="flex-1 flex flex-col gap-8">
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] tracking-wider text-iron-foreground leading-[0.9]">
              MÁS QUE
              <br />
              RACKS:
              <br />
              <span className="text-primary">ESTRUCTURA</span>
              <br />
              QUE ELEVA
              <br />
              TU NEGOCIO.
            </h1>

            {/* Trust badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                <CheckCircle size={20} className="text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="font-body text-xs text-iron-foreground/60 uppercase tracking-wider">
                  La confianza de +500 empresas
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Description + CTA */}
          <motion.div variants={fadeUp} className="lg:max-w-sm flex flex-col gap-6">
            <img
              src={heroImg}
              alt="Detalle de rack industrial"
              className="w-40 h-28 object-cover hidden lg:block"
            />
            <p className="font-body text-iron-foreground/70 text-base leading-relaxed">
              Diseñamos, fabricamos e instalamos soluciones de racks industriales respaldadas por
              experiencia técnica y de campo. Cada proyecto nace de un análisis riguroso.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 text-sm hover:bg-red-deep transition-colors duration-300 w-fit"
            >
              Cotizar Proyecto
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
