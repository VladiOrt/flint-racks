import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Target, Lightbulb, Handshake, Gauge, ShieldCheck } from "lucide-react";
import MarqueeBanner from "@/components/layout/MarqueeBanner";
import aboutImg from "@/assets/about-installation.jpg";
import heroImg from "@/assets/hero-warehouse.jpg";

const values = [
  { icon: ShieldCheck, title: "Solidez", description: "Estructuras confiables garantizadas, construidas para durar y rendir bajo condiciones exigentes." },
  { icon: Lightbulb, title: "Innovación", description: "Diseño adaptado a tus necesidades operativas específicas y planes de crecimiento." },
  { icon: Handshake, title: "Compromiso", description: "Acompañamos a nuestros clientes en cada fase — desde el diseño hasta la operación." },
  { icon: Gauge, title: "Eficiencia", description: "Maximizando espacio, tiempo y productividad en cada instalación." },
  { icon: Target, title: "Seguridad", description: "Cada rack protege no solo productos, sino toda tu operación empresarial." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden">
        {/* Background image */}
        <img
          src={heroImg}
          alt="Almacén industrial"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-iron/70" />

        {/* Large watermark text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span className="font-heading text-[18vw] lg:text-[14vw] tracking-wider text-iron-foreground/10 leading-none">
            NOSOTROS
          </span>
        </motion.div>

        {/* Content */}
        <div className="relative container-brand section-padding pb-16 lg:pb-20 w-full">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-iron-foreground leading-[0.95] max-w-3xl"
            >
              NUESTRA VISIÓN ES
              <br />
              <span className="text-primary">CONSTRUIR</span> TU FUTURO
            </motion.h1>

            {/* Right column: description + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-5 lg:max-w-sm lg:pb-1"
            >
              <p className="font-body text-iron-foreground/70 text-sm leading-relaxed">
                Diseñamos, fabricamos e instalamos soluciones de racks industriales respaldadas por experiencia técnica y de campo.
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

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-brand section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
                Quiénes Somos
              </span>
              <h2 className="font-heading text-5xl tracking-wide text-foreground mt-3 leading-[0.95]">
                CONSTRUIDO CON SEGURIDAD, DISEÑADO PARA RENDIR
              </h2>
              <p className="font-body text-muted-foreground text-base mt-6 leading-relaxed">
                Flint Racks nació de la convicción de que la eficiencia y la seguridad son la base 
                de toda operación bien diseñada. Somos una marca enfocada en diseñar, fabricar 
                e implementar racks industriales y soluciones de almacenamiento, respaldados por 
                conocimiento técnico y experiencia de campo.
              </p>
              <p className="font-body text-muted-foreground text-base mt-4 leading-relaxed">
                En un mundo donde las operaciones de las empresas dependen de su capacidad de organización, 
                seguridad y optimización de espacio, nos convertimos en un socio estratégico. Hablamos de 
                estructuras metálicas, pero también de confianza, respaldo y visión de crecimiento.
              </p>
              <p className="font-body text-muted-foreground text-base mt-4 leading-relaxed">
                Porque entendemos que cada rack sostiene mucho más que productos: sostiene la 
                logística, la seguridad y la continuidad del negocio.
              </p>
            </div>
            <div className="relative">
              <img src={aboutImg} alt="Instalación" className="w-full aspect-square object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-iron">
        <div className="container-brand section-padding">
          <div className="text-center mb-16">
            <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
              Lo Que Nos Define
            </span>
            <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-iron-foreground mt-3">
              VALORES DE MARCA
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-iron-foreground/10 p-8 hover:border-primary/30 transition-colors"
              >
                <value.icon size={36} className="text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-heading text-2xl tracking-wide text-iron-foreground mb-3">
                  {value.title.toUpperCase()}
                </h3>
                <p className="font-body text-sm text-iron-foreground/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-brand section-padding">
          <div className="text-center mb-16">
            <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
              Nuestro Equipo
            </span>
            <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-foreground mt-3">
              MIEMBROS DEL EQUIPO
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Thomas Edwards", role: "Director de Operaciones", initials: "TE" },
              { name: "María González", role: "Directora de Seguridad", initials: "MG" },
              { name: "Carlos Mendoza", role: "Ingeniero de Diseño", initials: "CM" },
            ].map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-48 h-48 mx-auto bg-iron flex items-center justify-center mb-6">
                  <span className="font-heading text-4xl text-primary">{member.initials}</span>
                </div>
                <h3 className="font-heading text-xl tracking-wide text-foreground">
                  {member.name.toUpperCase()}
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand py-20 lg:py-24">
        <div className="container-brand section-padding text-center">
          <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-sand-foreground leading-[0.95]">
            ¿LISTO PARA TRABAJAR JUNTOS?
          </h2>
          <p className="font-body text-sand-foreground/60 text-base mt-4 max-w-lg mx-auto">
            Permítenos ayudarte a optimizar las operaciones de tu almacén con soluciones diseñadas para tus necesidades específicas.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-iron text-iron-foreground font-body font-semibold px-10 py-4 text-sm mt-8 hover:bg-primary transition-colors"
          >
            Contáctanos
            <CheckCircle size={16} />
          </a>
        </div>
      </section>

      <MarqueeBanner />
    </>
  );
}
