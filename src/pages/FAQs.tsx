import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MarqueeBanner from "@/components/layout/MarqueeBanner";

const faqs = [
  {
    question: "¿Qué tipos de sistemas de racks ofrecen?",
    answer: "Ofrecemos una gama completa que incluye rack selectivo, rack drive-in y drive-through, sistemas push-back, racks cantilever, soluciones de mezzanine y sistemas multinivel. Cada solución está diseñada para cumplir con tus requerimientos operativos específicos.",
  },
  {
    question: "¿Cuánto tiempo toma una instalación típica?",
    answer: "Los tiempos de instalación varían según el alcance del proyecto. Una instalación estándar de almacén típicamente toma de 2 a 4 semanas. Ofrecemos planes de despliegue por fases para minimizar la interrupción en tus operaciones, permitiéndote continuar trabajando mientras instalamos.",
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
    question: "¿Cuál es el tiempo de entrega para un nuevo proyecto de racks?",
    answer: "Desde la consulta inicial hasta la instalación, un proyecto típico toma de 6 a 10 semanas dependiendo de la complejidad y el alcance. Esto incluye diseño, ingeniería, fabricación e instalación. Se dispone de tiempos acelerados para proyectos urgentes.",
  },
  {
    question: "¿Sus sistemas de racks cumplen con los requisitos sísmicos?",
    answer: "Sí. Todos nuestros sistemas están diseñados para cumplir o superar los requisitos sísmicos locales. Utilizamos cálculos estructurales y materiales certificados, y cada instalación incluye anclaje y arriostramiento adecuados para zonas sísmicas.",
  },
  {
    question: "¿Qué industrias atienden?",
    answer: "Atendemos una amplia gama de industrias incluyendo logística y distribución, alimentos y bebidas, farmacéutica, automotriz, retail, e-commerce, manufactura y operaciones de almacenamiento en frío.",
  },
  {
    question: "¿Ofrecen opciones de financiamiento o arrendamiento?",
    answer: "Trabajamos con nuestros clientes para encontrar el mejor arreglo financiero para sus necesidades. Contáctanos para discutir las opciones disponibles incluyendo compra directa, arrendamiento y planes de implementación por fases.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FAQs() {
  return (
    <>
      {/* Hero */}
      <section className="bg-iron py-32 lg:py-40">
        <div className="container-brand section-padding">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.span variants={fadeUp} className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
              Preguntas Frecuentes
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-heading text-6xl md:text-7xl tracking-wider text-iron-foreground mt-4 leading-[0.95]">
              PREGUNTAS
              <br />
              <span className="text-primary">FRECUENTES</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-brand section-padding">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border bg-card px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="font-body font-semibold text-base text-foreground hover:text-primary py-6 [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <h3 className="font-heading text-3xl tracking-wide text-foreground">
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
