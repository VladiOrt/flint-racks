import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import MarqueeBanner from "@/components/layout/MarqueeBanner";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("¡Gracias! Nos pondremos en contacto contigo pronto.");
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-32 lg:py-40">
        <div className="container-brand section-padding">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.span variants={fadeUp} className="font-body text-sm text-primary-foreground/80 font-semibold uppercase tracking-wider">
              Contacto
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-heading text-6xl md:text-7xl tracking-wider text-primary-foreground mt-4 leading-[0.95]">
              CONSTRUYAMOS
              <br />
              ALGO
              <br />
              JUNTOS
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-brand section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
                Ponte en Contacto
              </span>
              <h2 className="font-heading text-5xl tracking-wide text-foreground mt-3 leading-[0.95]">
                ¿LISTO PARA INICIAR TU PROYECTO?
              </h2>
              <p className="font-body text-muted-foreground text-base mt-6 leading-relaxed">
                Ya sea que necesites un nuevo sistema de racks, una evaluación de almacén o quieras 
                discutir tus necesidades de optimización de almacenamiento, estamos aquí para ayudarte.
              </p>

              <div className="flex flex-col gap-6 mt-10">
                <a href="mailto:contact@flintracks.com" className="flex items-start gap-4 group">
                  <div className="bg-iron p-3">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-sm text-foreground">Correo</h4>
                    <p className="font-body text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      contact@flintracks.com
                    </p>
                  </div>
                </a>
                <a href="tel:+521234567890" className="flex items-start gap-4 group">
                  <div className="bg-iron p-3">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-sm text-foreground">Teléfono</h4>
                    <p className="font-body text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      +52 (123) 456-7890
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="bg-iron p-3">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-sm text-foreground">Ubicación</h4>
                    <p className="font-body text-sm text-muted-foreground">
                      Monterrey, Nuevo León, México
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border p-8 lg:p-10">
              <h3 className="font-heading text-2xl tracking-wide text-foreground mb-6">
                ENVÍANOS UN MENSAJE
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                      Empresa
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 text-sm hover:bg-red-deep transition-colors w-full sm:w-auto"
                >
                  Enviar Mensaje
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <MarqueeBanner />
    </>
  );
}
