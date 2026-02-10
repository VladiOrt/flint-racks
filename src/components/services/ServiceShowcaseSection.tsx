import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import imgPredefined from "@/assets/service-predefined-racks.jpg";
import imgCustom from "@/assets/service-custom-racks.jpg";
import logoBlack from "@/assets/logo-stacked-black.png";

const services = [
  {
    number: "01",
    badge: "Estándar",
    title: "Racks Prediseñados",
    subtitle: "Soluciones listas para optimizar tu almacén",
    image: imgPredefined,
  },
  {
    number: "02",
    badge: "A la Medida",
    title: "Racks Personalizados",
    subtitle: "Diseño e ingeniería según tu operación",
    image: imgCustom,
  },
];

export default function ServiceShowcaseSection() {
  return (
    <section className="bg-background">
      {services.map((service, i) => {
        const isReversed = i % 2 !== 0;

        return (
          <div
            key={service.number}
            className={`grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] ${
              isReversed ? "" : ""
            }`}
          >
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col justify-center items-center text-center px-8 py-16 lg:py-0 bg-sand ${
                isReversed ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <div className="max-w-md">
                <img
                  src={logoBlack}
                  alt="Flint Racks"
                  className="w-16 h-auto mx-auto mb-10"
                />

                <span className="inline-block font-body text-xs font-semibold uppercase tracking-wider bg-iron text-iron-foreground px-4 py-1.5 rounded-full mb-6">
                  {service.badge}
                </span>

                <h2 className="font-heading text-4xl sm:text-5xl tracking-wide text-sand-foreground leading-[0.95] uppercase">
                  {service.title}
                </h2>

                <div className="w-16 h-px bg-border mx-auto my-8" />

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:bg-red-deep transition-colors duration-200"
                >
                  Cotizar
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Image side */}
            <div
              className={`relative overflow-hidden ${
                isReversed ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover min-h-[50vh] lg:min-h-full"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-iron/40" />

              {/* Overlay text */}
              <div
                className={`absolute bottom-8 px-8 text-iron-foreground ${
                  isReversed ? "left-0" : "right-0 text-right"
                }`}
              >
                <span className="font-heading text-7xl lg:text-8xl text-iron-foreground/30 leading-none">
                  {service.number}
                </span>
                <div className="w-12 h-px bg-iron-foreground/50 my-3" />
                <p className="font-heading text-sm tracking-wider uppercase max-w-[250px]">
                  {service.subtitle}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
