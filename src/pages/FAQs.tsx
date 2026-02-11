import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus } from "lucide-react";
import MarqueeBanner from "@/components/layout/MarqueeBanner";
import heroImg from "@/assets/hero-warehouse.jpg";

interface FAQCategory {
  title: string;
  faqs: { question: string; answer: string }[];
}

const categories: FAQCategory[] = [
  {
    title: "SERVICIOS",
    faqs: [
      {
        question: "¿Qué tipos de sistemas de racks ofrecen?",
        answer: "Ofrecemos una gama completa que incluye rack selectivo, rack drive-in y drive-through, sistemas push-back, racks cantilever, soluciones de mezzanine y sistemas multinivel. Cada solución está diseñada para cumplir con tus requerimientos operativos específicos.",
      },
      {
        question: "¿Proporcionan servicios de inspección de racks?",
        answer: "Sí. Proporcionamos programas integrales de inspección que incluyen inspecciones anuales certificadas, reportes de evaluación de daños, reemplazo de componentes y auditorías de cumplimiento de seguridad. Las inspecciones regulares son críticas para mantener un ambiente de almacén seguro.",
      },
      {
        question: "¿Pueden trabajar con la distribución existente de mi almacén?",
        answer: "Por supuesto. Nuestro equipo de ingeniería realiza evaluaciones exhaustivas del sitio, considerando las condiciones del piso, alturas de techo, ubicación de columnas y patrones de flujo de trabajo existentes. Diseñamos soluciones que optimizan tu espacio actual.",
      },
      {
        question: "¿Sus sistemas de racks cumplen con los requisitos sísmicos?",
        answer: "Sí. Todos nuestros sistemas están diseñados para cumplir o superar los requisitos sísmicos locales. Utilizamos cálculos estructurales y materiales certificados, y cada instalación incluye anclaje y arriostramiento adecuados para zonas sísmicas.",
      },
      {
        question: "¿Qué industrias atienden?",
        answer: "Atendemos una amplia gama de industrias incluyendo logística y distribución, alimentos y bebidas, farmacéutica, automotriz, retail, e-commerce, manufactura y operaciones de almacenamiento en frío.",
      },
    ],
  },
  {
    title: "COBERTURA EN EL PAÍS",
    faqs: [
      {
        question: "¿En qué estados de la república tienen cobertura?",
        answer: "Contamos con cobertura a nivel nacional. Tenemos presencia directa en los principales centros industriales del país y red de distribución que nos permite atender proyectos en cualquier estado de la república mexicana.",
      },
      {
        question: "¿Realizan instalaciones fuera de su zona principal?",
        answer: "Sí, nuestro equipo de instalación se desplaza a cualquier punto del país. Contamos con cuadrillas especializadas que pueden movilizarse para proyectos en ubicaciones remotas o fuera de las principales zonas metropolitanas.",
      },
      {
        question: "¿Tienen sucursales o centros de distribución regionales?",
        answer: "Operamos desde nuestras instalaciones principales y contamos con alianzas estratégicas en diferentes regiones del país que nos permiten ofrecer tiempos de respuesta competitivos sin importar la ubicación de tu proyecto.",
      },
      {
        question: "¿Ofrecen servicio de mantenimiento en todo el país?",
        answer: "Sí, nuestros programas de mantenimiento preventivo e inspección están disponibles a nivel nacional. Coordinamos visitas periódicas con nuestros técnicos certificados para garantizar el óptimo funcionamiento de tus sistemas.",
      },
      {
        question: "¿Cómo manejan la logística para proyectos en zonas alejadas?",
        answer: "Planificamos cuidadosamente la logística de cada proyecto considerando rutas de transporte, accesos y condiciones locales. Incluimos los costos de movilización de forma transparente en nuestras cotizaciones.",
      },
    ],
  },
  {
    title: "CONTACTO",
    faqs: [
      {
        question: "¿Cómo puedo solicitar una cotización?",
        answer: "Puedes solicitar una cotización a través de nuestro formulario de contacto en la página web, por correo electrónico o llamando directamente a nuestras oficinas. Un asesor se pondrá en contacto contigo en menos de 24 horas hábiles.",
      },
      {
        question: "¿Ofrecen visitas técnicas sin costo?",
        answer: "Sí, realizamos visitas técnicas de evaluación sin costo ni compromiso para proyectos dentro de nuestra zona de cobertura directa. Durante la visita, nuestros ingenieros evalúan el espacio y tus necesidades para elaborar una propuesta personalizada.",
      },
      {
        question: "¿Cuál es el horario de atención?",
        answer: "Nuestro horario de atención es de lunes a viernes de 8:00 a 18:00 horas. Para emergencias o proyectos en curso, contamos con una línea de soporte técnico disponible fuera de horario regular.",
      },
      {
        question: "¿Ofrecen opciones de financiamiento o arrendamiento?",
        answer: "Trabajamos con nuestros clientes para encontrar el mejor arreglo financiero para sus necesidades. Contáctanos para discutir las opciones disponibles incluyendo compra directa, arrendamiento y planes de implementación por fases.",
      },
      {
        question: "¿Trabajan con empresas de cualquier tamaño?",
        answer: "Sí, atendemos desde pequeñas y medianas empresas hasta grandes corporativos. Nuestras soluciones son escalables y se adaptan a cualquier volumen de operación, garantizando siempre la misma calidad y compromiso.",
      },
    ],
  },
  {
    title: "TIEMPOS DE ENTREGA",
    faqs: [
      {
        question: "¿Cuánto tiempo toma una instalación típica?",
        answer: "Los tiempos de instalación varían según el alcance del proyecto. Una instalación estándar de almacén típicamente toma de 2 a 4 semanas. Ofrecemos planes de despliegue por fases para minimizar la interrupción en tus operaciones.",
      },
      {
        question: "¿Cuál es el tiempo de entrega para un nuevo proyecto de racks?",
        answer: "Desde la consulta inicial hasta la instalación, un proyecto típico toma de 6 a 10 semanas dependiendo de la complejidad y el alcance. Esto incluye diseño, ingeniería, fabricación e instalación. Se dispone de tiempos acelerados para proyectos urgentes.",
      },
      {
        question: "¿Pueden acelerar un proyecto urgente?",
        answer: "Sí, contamos con opciones de fabricación acelerada para proyectos con plazos ajustados. Evaluamos cada caso de forma individual para determinar la viabilidad y los costos asociados a la aceleración del proyecto.",
      },
      {
        question: "¿Qué pasa si hay retrasos en la instalación?",
        answer: "Mantenemos comunicación constante sobre el avance del proyecto. En caso de imprevistos, informamos de inmediato y presentamos un plan de contingencia para minimizar el impacto en tus operaciones y cumplir con los plazos acordados.",
      },
      {
        question: "¿Cuánto toma recibir una cotización después de la visita técnica?",
        answer: "Generalmente entregamos la cotización formal entre 3 y 5 días hábiles después de la visita técnica. Para proyectos más complejos que requieren ingeniería detallada, el plazo puede extenderse hasta 10 días hábiles.",
      },
    ],
  },
];

function FAQCategoryBlock({ category, globalOffset }: { category: FAQCategory; globalOffset: number }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <div>
      {/* Category title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
          Categoría
        </span>
        <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-wide text-foreground mt-2 leading-[0.95]">
          {category.title}
        </h3>
      </motion.div>

      {/* FAQ items */}
      <div>
        {category.faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          const num = globalOffset + i + 1;
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
                  {String(num).padStart(2, "0")}
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
  );
}

export default function FAQs() {
  let globalOffset = 0;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden">
        <motion.img
          src={heroImg}
          alt="FAQ Flint Racks"
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
            className="font-heading text-[22vw] sm:text-[22vw] lg:text-[16vw] tracking-wider leading-none max-w-full overflow-hidden"
            style={{
              background: "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0.1))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            FAQ
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
              PREGUNTAS
              <br />
              <span className="text-primary">FRECUENTES</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-5 lg:max-w-sm lg:pb-1"
            >
              <p className="font-body text-iron-foreground/70 text-sm leading-relaxed">
                Encuentra respuestas a las dudas más comunes sobre nuestros servicios, instalación y soporte técnico.
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

      {/* FAQs by category */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-brand section-padding">
          <div className="max-w-4xl mx-auto flex flex-col gap-20 lg:gap-28">
            {categories.map((category, idx) => {
              const offset = globalOffset;
              globalOffset += category.faqs.length;
              return (
                <FAQCategoryBlock
                  key={idx}
                  category={category}
                  globalOffset={offset}
                />
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-20 lg:mt-28">
            <h3 className="font-heading text-3xl md:text-4xl tracking-wide text-foreground">
              ¿AÚN TIENES PREGUNTAS?
            </h3>
            <p className="font-body text-muted-foreground text-base mt-3">
              Nuestro equipo está listo para ayudarte a encontrar la solución adecuada.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-iron text-iron-foreground font-body font-semibold px-10 py-4 text-sm mt-6 hover:bg-primary transition-colors"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      <MarqueeBanner />
    </>
  );
}
