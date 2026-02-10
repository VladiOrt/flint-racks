import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, Handshake, Gauge, ShieldCheck } from "lucide-react";
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

      {/* Values */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#d6c4a9' }}>
        <div className="container-brand section-padding">
          <div className="text-center mb-16">
            <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
              Lo Que Nos Define
            </span>
            <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-foreground mt-3">
              VALORES DE MARCA
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-foreground/10 p-8 hover:border-primary/30 transition-colors"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <value.icon size={36} className="text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-heading text-2xl tracking-wide text-foreground mb-3">
                  {value.title.toUpperCase()}
                </h3>
                <p className="font-body text-sm text-foreground/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: values.length * 0.1 }}
              className="border border-primary/30 p-8 flex flex-col justify-between"
              style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
            >
              <div>
                <h3 className="font-heading text-2xl tracking-wide text-foreground mb-3">
                  TRABAJA CON NOSOTROS
                </h3>
                <p className="font-body text-sm text-foreground/60 leading-relaxed">
                  Conoce nuestros servicios y descubre cómo podemos optimizar tu operación.
                </p>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary font-body font-semibold px-8 py-3 text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors duration-200 w-fit mt-6"
              >
                Ver Servicios
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
}
