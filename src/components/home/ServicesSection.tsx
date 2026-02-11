import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import imgPredefined from "@/assets/service-predefined-racks.jpg";
import imgCustom from "@/assets/service-custom-racks.jpg";

const services = [
  {
    title: "Racks Prediseñados",
    subtitle: "Estándar",
    description:
      "Soluciones de almacenamiento listas para instalar, diseñadas con medidas y configuraciones estándar que se adaptan a la mayoría de los espacios industriales. Ideales para optimizar tu operación de forma rápida y eficiente.",
    image: imgPredefined,
    link: "/services",
  },
  {
    title: "Racks Personalizados",
    subtitle: "A la Medida",
    description:
      "Diseñamos y fabricamos racks completamente adaptados a las necesidades específicas de tu operación, espacio y tipo de carga. Cada proyecto es único, garantizando máxima eficiencia y aprovechamiento de tu almacén.",
    image: imgCustom,
    link: "/services",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-brand section-padding">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
            Lo Que Hacemos
          </span>
          <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-foreground mt-3 uppercase">
            Nuestros Servicios
          </h2>
        </motion.div>

        {/* Cards - Desktop */}
        <div className="hidden lg:flex gap-4 h-[550px]">
          {services.map((service, i) => {
            const isActive = activeIndex === i;
            return (
              <motion.div
                key={service.title}
                className="relative overflow-hidden cursor-pointer group"
                style={{ borderRadius: 0 }}
                animate={{ flex: isActive ? 1.5 : 1 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <Link to={service.link} className="block w-full h-full">
                  {/* Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-iron/80 via-iron/20 to-transparent" />

                  {/* Content at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                    <motion.div
                      initial={false}
                      animate={{
                        y: isActive ? 0 : 20,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="font-body text-xs text-primary font-semibold uppercase tracking-wider">
                        {service.subtitle}
                      </span>
                      <h3 className="font-heading text-2xl lg:text-3xl text-iron-foreground uppercase tracking-wide mt-1">
                        {service.title}
                      </h3>
                      <p className="font-body text-sm text-iron-foreground/80 mt-2 leading-relaxed max-w-md line-clamp-3">
                        {service.description}
                      </p>
                    </motion.div>

                    {/* Arrow button */}
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-white text-foreground"
                      }`}
                      animate={{
                        y: isActive ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Cards - Mobile */}
        <div className="lg:hidden flex flex-col gap-4">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="relative h-[400px] overflow-hidden group block"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-iron/80 via-iron/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <span className="font-body text-xs text-primary font-semibold uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                  <h3 className="font-heading text-2xl text-iron-foreground uppercase tracking-wide mt-1">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-iron-foreground/80 mt-2 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
