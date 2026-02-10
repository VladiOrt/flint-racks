import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "¿Qué tipos de racks industriales ofrecen?",
    answer:
      "Ofrecemos una amplia gama de racks industriales incluyendo selectivos, drive-in, drive-through, push-back, dinámicos por gravedad, cantilever y entrepisos. Cada sistema se diseña según las necesidades específicas de almacenamiento y operación de su empresa.",
  },
  {
    question: "¿Cuánto tiempo toma un proyecto de instalación?",
    answer:
      "El tiempo varía según la complejidad y escala del proyecto. Un proyecto estándar puede completarse entre 4 y 8 semanas, incluyendo diseño, fabricación e instalación. Proyectos más grandes pueden requerir fases adicionales que planificamos cuidadosamente para minimizar la interrupción de sus operaciones.",
  },
  {
    question: "¿Sus racks cumplen con normativas sísmicas?",
    answer:
      "Sí, todos nuestros sistemas de racks están diseñados y fabricados cumpliendo con las normativas sísmicas vigentes. Realizamos cálculos estructurales específicos para cada proyecto considerando la zona sísmica, tipo de suelo y cargas de operación.",
  },
  {
    question: "¿Ofrecen servicio de mantenimiento preventivo?",
    answer:
      "Sí, contamos con programas de mantenimiento preventivo e inspección periódica. Nuestros técnicos certificados realizan revisiones programadas para detectar y corregir cualquier anomalía, garantizando la seguridad y prolongando la vida útil de sus sistemas de almacenamiento.",
  },
  {
    question: "¿Pueden adaptar racks a espacios existentes?",
    answer:
      "Absolutamente. Nuestro equipo de ingeniería realiza un levantamiento detallado de su espacio para diseñar soluciones a medida que maximicen el aprovechamiento del área disponible, considerando alturas, columnas, accesos y flujo operativo.",
  },
  {
    question: "¿Qué garantía ofrecen en sus productos?",
    answer:
      "Todos nuestros racks cuentan con garantía de fabricación. Además, proporcionamos garantía en la instalación y ofrecemos soporte técnico continuo. Los detalles específicos de garantía se definen según el tipo de producto y proyecto.",
  },
  {
    question: "¿Trabajan con empresas de cualquier tamaño?",
    answer:
      "Sí, atendemos desde pequeñas y medianas empresas hasta grandes corporativos. Nuestras soluciones son escalables y se adaptan a cualquier volumen de operación, garantizando siempre la misma calidad y compromiso sin importar el tamaño del proyecto.",
  },
];

export default function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-brand section-padding">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wide text-foreground text-center mb-6 leading-[0.95]"
        >
          PREGUNTAS
          <br />
          FRECUENTES
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-center mb-16"
        >
          <Link
            to="/faqs"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors duration-200"
          >
            Ver Todas las Preguntas
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left py-6 flex items-center gap-6 group cursor-pointer"
                >
                  <span
                    className={`font-heading text-lg tracking-wide transition-colors duration-300 ${
                      isOpen ? "text-foreground" : "text-muted-foreground/50"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-heading text-xl md:text-2xl lg:text-3xl tracking-wide uppercase flex-1 transition-colors duration-300 ${
                      isOpen ? "text-foreground" : "text-muted-foreground/50"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <Minus size={24} className="text-foreground" />
                    ) : (
                      <Plus size={24} className="text-muted-foreground/50" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed pb-6 pl-12 lg:pl-16 pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Progress line */}
                <div className="h-px bg-border relative">
                  <div
                    className="absolute inset-y-0 left-0 bg-primary transition-all duration-500 ease-out"
                    style={{ width: isOpen ? "100%" : "0%" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
