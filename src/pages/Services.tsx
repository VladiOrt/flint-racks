import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Warehouse, Layers, Truck, Wrench, BarChart3, Ruler } from "lucide-react";

import MissionStatsSection from "@/components/services/MissionStatsSection";
import ServiceShowcaseSection from "@/components/services/ServiceShowcaseSection";
import ExpertiseSection from "@/components/services/ExpertiseSection";
import ProductShowcaseSection from "@/components/services/ProductShowcaseSection";
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

      <ExpertiseSection />

      <ProductShowcaseSection />

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
                  { step: "01", title: "Primer Contacto", desc: "Nos acercamos a ti para conocer tus necesidades y entender cómo podemos atender los retos de tu operación." },
                  { step: "02", title: "Información del Cliente", desc: "Realizamos una entrevista detallada para mapear dimensiones, necesidades específicas y definir cómo trabajaremos juntos." },
                  { step: "03", title: "Visita de Campo", desc: "Nuestros especialistas visitan tu bodega para evaluar necesidades de carga, distribución y logística interna." },
                  { step: "04", title: "Levantamiento y Propuesta", desc: "El especialista realiza un levantamiento completo, determina materiales y costos, y te presenta una propuesta que satisfaga tus necesidades." },
                  { step: "05", title: "Aprobación y Planeación", desc: "Cada bodega es diferente. Tu ejecutivo creará una planeación a la medida para cumplir con el proyecto en tiempo y forma según tu industria." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <span className="font-heading text-4xl text-primary">{item.step}</span>
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
            <div className="overflow-hidden">
              <motion.img
                src={heroImg}
                alt="Proyecto de almacén"
                className="w-full aspect-[3/4] object-cover"
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.2 }}
                viewport={{ once: true }}
                transition={{ duration: 20, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Reference style */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Proyecto de almacén"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-heading text-[12vw] lg:text-[10vw] text-white/[0.07] uppercase tracking-wider leading-none">
            CONTÁCTANOS
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 container-brand section-padding text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wide max-w-4xl mx-auto leading-[0.95]"
          >
            INICIA TU PROYECTO HOY
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-white/70 text-base mt-6 max-w-lg mx-auto"
          >
            Contáctanos para una consultoría gratuita y evaluación de tu almacén.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-10"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-10 py-4 text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors duration-200"
            >
              Cotizar Proyecto
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
