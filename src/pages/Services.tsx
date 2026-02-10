import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Warehouse, Layers, Truck, Wrench, BarChart3, Ruler } from "lucide-react";
import MarqueeBanner from "@/components/layout/MarqueeBanner";
import MissionStatsSection from "@/components/services/MissionStatsSection";
import ServiceShowcaseSection from "@/components/services/ServiceShowcaseSection";
import servicesImg from "@/assets/services-racks.jpg";
import heroImg from "@/assets/hero-warehouse.jpg";

const services = [
  {
    icon: Warehouse,
    title: "Rack Selectivo",
    description: "El sistema de almacenamiento más versátil, con acceso directo a cada posición de tarima. Ideal para operaciones que requieren alta selectividad y rotación rápida de inventario.",
    features: ["Acceso directo a todas las tarimas", "Gestión de inventario FIFO", "Alturas de viga ajustables", "Compatible con todo tipo de montacargas"],
  },
  {
    icon: Layers,
    title: "Rack Drive-In y Drive-Through",
    description: "Almacenamiento de alta densidad que elimina pasillos entre racks. Perfecto para grandes cantidades del mismo SKU y ambientes de almacenamiento en frío.",
    features: ["Máxima densidad de almacenamiento", "Ideal para cuartos fríos", "Opciones LIFO/FIFO", "Huella reducida"],
  },
  {
    icon: Truck,
    title: "Sistemas Push-Back",
    description: "Almacenamiento dinámico con carros anidados sobre rieles inclinados. Combina alta densidad con mejor selectividad que los sistemas drive-in.",
    features: ["2-6 tarimas de profundidad por carril", "Recuperación por gravedad", "Almacenamiento de múltiples SKU", "Tiempos de acceso más rápidos"],
  },
  {
    icon: Ruler,
    title: "Rack Cantilever",
    description: "Diseñado para artículos largos, voluminosos o de forma irregular. Los brazos se extienden desde columnas verticales creando bahías de almacenamiento sin obstrucción.",
    features: ["Sin obstrucción de columna frontal", "Alturas de brazo ajustables", "Opciones interior y exterior", "Capacidad de carga pesada"],
  },
  {
    icon: BarChart3,
    title: "Mezzanine y Sistemas Multinivel",
    description: "Eleva tu capacidad de almacenamiento agregando niveles intermedios de piso dentro de tu estructura de almacén existente.",
    features: ["Duplica o triplica el espacio", "Integrado con racks", "Diseños personalizables", "Ingeniería con normativa"],
  },
  {
    icon: Wrench,
    title: "Inspección y Mantenimiento de Racks",
    description: "Programas integrales de inspección y servicios de mantenimiento para garantizar la seguridad y el rendimiento continuo de tus sistemas de racks.",
    features: ["Inspecciones anuales certificadas", "Reportes de evaluación de daños", "Reemplazo de componentes", "Auditorías de cumplimiento de seguridad"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden">
        <motion.img
          src={servicesImg}
          alt="Racks industriales"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-iron/70" />

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
            SERVICIOS
          </span>
        </motion.div>

        <div className="relative container-brand section-padding pb-16 lg:pb-20 w-full">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-iron-foreground leading-[0.95] max-w-3xl"
            >
              SOLUCIONES
              <br />
              <span className="text-primary">DISEÑADAS</span> PARA TI
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-5 lg:max-w-sm lg:pb-1"
            >
              <p className="font-body text-iron-foreground/70 text-sm leading-relaxed">
                Desde rack selectivo hasta alta densidad, diseñamos e instalamos la solución adecuada para tu operación.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:bg-red-deep transition-colors duration-200 w-fit"
              >
                Cotizar Proyecto
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <MissionStatsSection />

      <ServiceShowcaseSection />

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-brand section-padding">
          <div className="text-center mb-16">
            <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
              Lo Que Ofrecemos
            </span>
            <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-foreground mt-3">
              SISTEMAS DE RACKS
            </h2>
            <p className="font-body text-muted-foreground text-base mt-4 max-w-xl mx-auto">
              Desde selectivo hasta alta densidad, diseñamos e instalamos la solución adecuada para tu operación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group border border-border hover:border-primary/30 bg-card p-8 transition-all duration-300"
              >
                <service.icon size={40} className="text-primary mb-6" strokeWidth={1.5} />
                <h3 className="font-heading text-xl tracking-wide text-foreground mb-3">
                  {service.title.toUpperCase()}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs font-body text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-iron">
        <div className="container-brand section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
                Nuestro Proceso
              </span>
              <h2 className="font-heading text-5xl tracking-wide text-iron-foreground mt-3 leading-[0.95]">
                DEL CONCEPTO A LA OPERACIÓN
              </h2>
              <div className="flex flex-col gap-8 mt-10">
                {[
                  { step: "01", title: "Consultoría y Evaluación", desc: "Analizamos tu espacio, operaciones y requerimientos." },
                  { step: "02", title: "Diseño e Ingeniería", desc: "Soluciones personalizadas diseñadas a tus especificaciones exactas." },
                  { step: "03", title: "Fabricación", desc: "Manufactura propia con materiales certificados." },
                  { step: "04", title: "Instalación", desc: "Despliegue profesional con mínima interrupción." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <span className="font-heading text-4xl text-primary/30">{item.step}</span>
                    <div>
                      <h3 className="font-heading text-xl tracking-wide text-iron-foreground">
                        {item.title.toUpperCase()}
                      </h3>
                      <p className="font-body text-sm text-iron-foreground/60 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={heroImg} alt="Proyecto de almacén" className="w-full aspect-[3/4] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <MarqueeBanner />

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-sand">
        <div className="container-brand section-padding text-center">
          <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-sand-foreground">
            INICIA TU PROYECTO HOY
          </h2>
          <p className="font-body text-sand-foreground/60 text-base mt-4 max-w-lg mx-auto">
            Contáctanos para una consultoría gratuita y evaluación de tu almacén.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-iron text-iron-foreground font-body font-semibold px-10 py-4 text-sm mt-8 hover:bg-primary transition-colors"
          >
            Cotizar
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
