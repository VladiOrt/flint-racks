import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import coverageHero from "@/assets/coverage-hero.jpg";
import MexicoMapSection from "@/components/coverage/MexicoMapSection";

const coverageFaqs = [
  {
    question: "¿Realizan instalaciones en todo México?",
    answer: "Sí, contamos con cobertura en las principales ciudades y zonas industriales de México. Nuestro equipo de instalación se desplaza a cualquier punto del país para garantizar un servicio profesional y oportuno.",
  },
  {
    question: "¿Cuánto tiempo tarda la instalación fuera de la zona metropolitana?",
    answer: "El tiempo de instalación varía según la ubicación y el tamaño del proyecto. Generalmente, para proyectos fuera de la zona metropolitana, el proceso toma entre 5 y 15 días hábiles desde la confirmación del pedido.",
  },
  {
    question: "¿Ofrecen servicio de mantenimiento en todas las ubicaciones?",
    answer: "Sí, nuestro servicio de mantenimiento preventivo y correctivo está disponible en todas las ubicaciones donde realizamos instalaciones. Contamos con equipos regionales para atender cualquier necesidad.",
  },
  {
    question: "¿Tienen distribuidores autorizados en mi ciudad?",
    answer: "Contamos con una red de distribuidores autorizados en las principales ciudades del país. Contáctanos para verificar la disponibilidad en tu zona y conectarte con el distribuidor más cercano.",
  },
];

const regions = [
  { name: "Norte", cities: ["Monterrey", "Chihuahua", "Tijuana", "Saltillo", "Hermosillo"] },
  { name: "Centro", cities: ["CDMX", "Querétaro", "Puebla", "Toluca", "Aguascalientes"] },
  { name: "Bajío", cities: ["León", "Guadalajara", "San Luis Potosí", "Irapuato", "Celaya"] },
  { name: "Sur", cities: ["Mérida", "Villahermosa", "Oaxaca", "Veracruz", "Cancún"] },
];

export default function Coverage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden">
        <motion.img
          src={coverageHero}
          alt="Cobertura Flint Racks"
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
            className="font-heading text-[15vw] sm:text-[16vw] lg:text-[14vw] tracking-wider leading-none max-w-full overflow-hidden"
            style={{
              background: "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0.1))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            COBERTURA
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
              PRESENCIA <span className="text-primary">NACIONAL</span>,
              <br />
              SERVICIO LOCAL
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-5 lg:max-w-sm lg:pb-1"
            >
              <p className="font-body text-iron-foreground/70 text-sm leading-relaxed">
                Cubrimos el 98% del territorio mexicano con puntos estratégicos en toda la República.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:bg-red-deep transition-colors duration-200 w-fit"
              >
                Solicitar Cobertura
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cubrimos gran parte del país */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-brand section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text + Stats */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase text-foreground leading-tight"
              >
                Cubrimos gran parte del país
              </motion.h2>
              <div className="w-20 h-1 bg-primary mt-6 mb-8" />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-body text-muted-foreground text-lg leading-relaxed mb-10"
              >
                Con presencia en más de 25 estados de la República Mexicana, llevamos soluciones de almacenamiento industrial a donde tu negocio lo necesite. Nuestro equipo de especialistas garantiza instalación profesional y soporte técnico en cada región.
              </motion.p>

              {/* Stats */}
              <div className="flex gap-12">
                <div>
                  <span className="font-heading text-5xl text-primary">25+</span>
                  <p className="font-body text-muted-foreground mt-1">Estados</p>
                </div>
                <div>
                  <span className="font-heading text-5xl text-primary">500+</span>
                  <p className="font-body text-muted-foreground mt-1">Proyectos</p>
                </div>
                <div>
                  <span className="font-heading text-5xl text-primary">50+</span>
                  <p className="font-body text-muted-foreground mt-1">Ciudades</p>
                </div>
              </div>
            </div>

            {/* Right: Regions grid */}
            <div className="grid grid-cols-2 gap-6">
              {regions.map((region, i) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-heading text-xl uppercase text-foreground">{region.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {region.cities.map((city) => (
                      <li key={city} className="font-body text-muted-foreground text-sm">
                        {city}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map - hidden for now */}
      {/* <MexicoMapSection /> */}

      {/* FAQs + CTA */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-brand section-padding">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl uppercase text-foreground text-center mb-16"
          >
            Preguntas Frecuentes
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            {coverageFaqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center gap-6 py-6 text-left group"
                  >
                    <span
                      className={`font-heading text-xl transition-colors duration-300 ${
                        isOpen ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-heading text-lg md:text-xl uppercase flex-1 transition-colors duration-300 ${
                        isOpen ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div className="relative w-6 h-6 flex items-center justify-center">
                      <div className="w-4 h-[2px] bg-foreground" />
                      <div
                        className={`absolute w-4 h-[2px] bg-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-0 opacity-0" : "rotate-90 opacity-100"
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="font-body text-muted-foreground pb-6 pl-12">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Progress line */}
                  <div className="h-[1px] bg-border">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: isOpen ? "100%" : "0%" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA FAQs */}
          <div className="text-center mt-12">
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-sm px-8 py-4 hover:bg-red-deep transition-colors duration-200 uppercase tracking-wide"
            >
              Ver todas las preguntas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cotiza Ahora - CTA Contacto */}
      <section className="relative py-20 lg:py-28">
        <img
          src={coverageHero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-iron/85" />
        <div className="relative container-brand section-padding z-10">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl uppercase text-iron-foreground leading-tight"
            >
              ¿Listo para cotizar tu proyecto?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-body text-iron-foreground/70 text-lg mt-6 mb-8 leading-relaxed"
            >
              Contáctanos y recibe una cotización personalizada. Nuestro equipo de expertos te ayudará a encontrar la solución ideal para tu almacén.
            </motion.p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary font-body font-semibold text-sm px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 uppercase tracking-wide"
            >
              Iniciar cotización
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
