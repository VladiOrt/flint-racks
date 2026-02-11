import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Minus, Plus } from "lucide-react";

import { toast } from "sonner";
import heroImg from "@/assets/hero-warehouse.jpg";

/* ─── Contact FAQs ─── */
const contactFaqs = [
  {
    question: "¿Qué tipos de sistemas de racks ofrecen?",
    answer:
      "Ofrecemos una gama completa que incluye rack selectivo, rack drive-in y drive-through, sistemas push-back, racks cantilever, soluciones de mezzanine y sistemas multinivel.",
  },
  {
    question: "¿Cuánto tiempo toma una instalación típica?",
    answer:
      "Los tiempos de instalación varían según el alcance del proyecto. Una instalación estándar típicamente toma de 2 a 4 semanas. Ofrecemos planes de despliegue por fases para minimizar la interrupción.",
  },
  {
    question: "¿Ofrecen visitas técnicas sin costo?",
    answer:
      "Sí, realizamos visitas técnicas de evaluación sin costo ni compromiso. Durante la visita, nuestros ingenieros evalúan el espacio y tus necesidades para elaborar una propuesta personalizada.",
  },
  {
    question: "¿Tienen cobertura a nivel nacional?",
    answer:
      "Contamos con cobertura a nivel nacional. Tenemos presencia directa en los principales centros industriales del país y red de distribución que nos permite atender proyectos en cualquier estado.",
  },
];

/* ─── FAQ Accordion Item ─── */
function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left py-6 flex items-center gap-6 group cursor-pointer"
      >
        <span
          className={`font-heading text-lg tracking-wide transition-colors duration-300 ${
            isOpen ? "text-foreground" : "text-muted-foreground/50"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
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

      <div className="h-px bg-border relative">
        <div
          className="absolute inset-y-0 left-0 bg-primary transition-all duration-500 ease-out"
          style={{ width: isOpen ? "100%" : "0%" }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Contact Page ─── */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("Debes aceptar los términos y condiciones.");
      return;
    }
    toast.success("¡Gracias! Nos pondremos en contacto contigo pronto.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setAgreed(false);
  };

  const inputClass =
    "w-full bg-transparent border-b border-iron-foreground/30 px-0 py-3 font-body text-sm text-iron-foreground placeholder:text-iron-foreground/50 focus:border-primary focus:outline-none transition-colors";

  return (
    <>
      {/* ── Hero + Form ── */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Contacto Flint Racks"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-iron/80" />

        {/* Large watermark — desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 hidden md:flex items-start justify-center pointer-events-none select-none"
          style={{ paddingTop: '10%' }}
        >
          <span
            className="font-heading text-[10vw] tracking-wider leading-none"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0.1))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CONTACTO
          </span>
        </motion.div>

        {/* Mobile subtitle */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden absolute top-28 left-6 font-heading text-sm tracking-[0.3em] text-primary uppercase z-10"
        >
          CONTACTO
        </motion.span>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10 w-full max-w-3xl mx-auto px-6 mt-32 lg:mt-40"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              <input
                type="text"
                placeholder="Tu Nombre"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={inputClass}
              />
              <input
                type="email"
                placeholder="Correo Electrónico"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={inputClass}
              />
              <input
                type="tel"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Asunto"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className={inputClass}
              />
            </div>
            <textarea
              placeholder="Mensaje"
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`${inputClass} resize-none`}
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-3 text-sm uppercase tracking-wider hover:bg-red-deep transition-colors"
              >
                Enviar
              </button>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="w-4 h-4 border border-iron-foreground/40 bg-transparent accent-primary"
                />
                <span className="font-body text-xs text-iron-foreground/60">
                  Acepto los términos y condiciones
                </span>
              </label>
            </div>
          </form>
        </motion.div>
      </section>

      {/* ── Info Cards ── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-brand section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-border p-6 lg:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-heading text-sm tracking-wider text-foreground uppercase">
                  Dirección
                </h4>
                <MapPin size={18} className="text-muted-foreground" />
              </div>
              <p className="font-body text-sm text-muted-foreground uppercase leading-relaxed">
                Monterrey, Nuevo León,
                <br />
                México
              </p>
            </motion.div>

            {/* Reach Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-border p-6 lg:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-heading text-sm tracking-wider text-foreground uppercase">
                  Contáctanos
                </h4>
                <Send size={18} className="text-muted-foreground" />
              </div>
              <div className="flex flex-col gap-1">
                <a
                  href="mailto:contact@flintracks.com"
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@flintracks.com
                </a>
                <a
                  href="tel:+521234567890"
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +52 (123) 456-7890
                </a>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-border p-6 lg:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-heading text-sm tracking-wider text-foreground uppercase">
                  Horario
                </h4>
                <Clock size={18} className="text-muted-foreground" />
              </div>
              <div className="font-body text-sm text-muted-foreground uppercase leading-relaxed flex flex-col gap-0.5">
                <span>Lun – Vie: 8:00 – 18:00</span>
                <span>Sábado: 9:00 – 14:00</span>
                <span>Domingo: Cerrado</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.443282450274!2d-99.19302092314275!3d19.436445740554795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d203e7b9f2d751%3A0x100e1b6dbac1268c!2stBE%20Studio%20-%20Agencia%20de%20Branding!5e0!3m2!1ses!2smx!4v1770772002634!5m2!1ses!2smx"
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Flint Racks"
          className="w-full"
        />
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-20 lg:py-28 bg-background border-t border-border">
        <div className="container-brand section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground leading-[0.95]">
              PREGUNTAS
              <br />
              FRECUENTES
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {contactFaqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
