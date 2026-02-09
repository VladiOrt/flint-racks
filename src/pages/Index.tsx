import { Link } from "react-router-dom";
import { ArrowRight, Shield, Cog, TrendingUp, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import MarqueeBanner from "@/components/layout/MarqueeBanner";
import LatestBlogs from "@/components/blog/LatestBlogs";
import HeroSection from "@/components/home/HeroSection";
import aboutImg from "@/assets/about-installation.jpg";
import servicesImg from "@/assets/services-racks.jpg";
import benefit1Img from "@/assets/benefit-1.jpg";
import benefit2Img from "@/assets/benefit-2.jpg";
import benefit3Img from "@/assets/benefit-3.jpg";

const stats = [
  { value: "18+", label: "Años de Experiencia" },
  { value: "1,200+", label: "Proyectos Completados" },
  { value: "98%", label: "Satisfacción del Cliente" },
  { value: "50+", label: "Miembros del Equipo" },
];

const services = [
  {
    icon: Shield,
    title: "Diseño e Ingeniería",
    description: "Soluciones de racks personalizadas, diseñadas según tus especificaciones exactas, requisitos sísmicos y flujo operativo.",
  },
  {
    icon: Cog,
    title: "Fabricación",
    description: "Manufactura propia con materiales certificados y riguroso control de calidad en cada etapa.",
  },
  {
    icon: TrendingUp,
    title: "Instalación",
    description: "Instalación profesional con mínima interrupción en tus operaciones. Planes de despliegue por fases disponibles.",
  },
  {
    icon: Users,
    title: "Mantenimiento e Inspección",
    description: "Programas regulares de inspección y servicios de mantenimiento para mantener tus sistemas seguros y funcionando.",
  },
];

const clients = [
  "CLIMB THE MOUNTAIN",
  "WALL PAINT SHOP",
  "CHIPPY'S",
  "MIGHTY FURNITURES",
  "CARA INDOORS",
  "THE H SHOP",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />


      {/* Brand Statement */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-brand section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
                Sobre Flint Racks
              </span>
              <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-foreground mt-3 leading-[0.95]">
                SOLUCIONES CONFIABLES Y RENTABLES A TU MEDIDA
              </h2>
              <p className="font-body text-muted-foreground text-base mt-6 leading-relaxed">
                Flint Racks nació de la convicción de que la eficiencia y la seguridad son la base 
                de toda operación bien diseñada. Somos una marca enfocada en diseñar, fabricar 
                e implementar racks industriales y soluciones de almacenamiento, respaldados por 
                conocimiento técnico y experiencia de campo.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-iron text-iron-foreground font-body font-semibold px-8 py-4 text-sm mt-10 hover:bg-primary transition-colors duration-200"
              >
                Conocer Más
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img src={aboutImg} alt="Instalación de racks industriales" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-primary p-8">
                <span className="font-heading text-5xl text-primary-foreground">18+</span>
                <p className="font-body text-sm text-primary-foreground/80 mt-1">Años de<br/>Experiencia</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-brand section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground leading-[0.95]">
              BENEFICIOS DE TRABAJAR
              <br />
              CON NOSOTROS
            </h2>
          </motion.div>

          {/* Checkerboard grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Row 1: text - image - text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center gap-4 py-8"
            >
              <Shield size={36} className="text-foreground" strokeWidth={1} />
              <h3 className="font-heading text-xl tracking-wide text-foreground">
                INGENIERÍA ESTRUCTURAL
                <br />
                CERTIFICADA
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
                Cada diseño cumple con normativas sísmicas y de seguridad, respaldado por ingenieros certificados.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img src={benefit1Img} alt="Instalación de racks industriales" className="w-full aspect-[4/5] object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center gap-4 py-8"
            >
              <Cog size={36} className="text-foreground" strokeWidth={1} />
              <h3 className="font-heading text-xl tracking-wide text-foreground">
                SOLUCIONES
                <br />
                PERSONALIZADAS
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
                Diseñamos cada proyecto según las necesidades específicas de tu industria y operación.
              </p>
            </motion.div>

            {/* Row 2: image - text - image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img src={benefit2Img} alt="Detalle de estructura metálica" className="w-full aspect-[4/5] object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center gap-4 py-8"
            >
              <TrendingUp size={36} className="text-foreground" strokeWidth={1} />
              <h3 className="font-heading text-xl tracking-wide text-foreground">
                GESTIÓN INTEGRAL
                <br />
                DE PROYECTOS
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
                Acompañamiento completo desde el diseño hasta la instalación y mantenimiento continuo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img src={benefit3Img} alt="Almacén con racks organizados" className="w-full aspect-[4/5] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-iron py-16 lg:py-20">
        <div className="container-brand section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <span className="font-heading text-5xl md:text-6xl text-primary">
                  {stat.value}
                </span>
                <p className="font-body text-sm text-iron-foreground/60 mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-brand section-padding">
          <div className="text-center mb-16">
            <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
              Lo Que Hacemos
            </span>
            <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-foreground mt-3">
              NUESTROS SERVICIOS
            </h2>
            <p className="font-body text-muted-foreground text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Desde el diseño hasta la instalación, proporcionamos soluciones integrales de racks que maximizan 
              la eficiencia y seguridad de tu almacén.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card border border-border hover:border-primary/30 p-8 lg:p-10 transition-all duration-300"
              >
                <service.icon size={40} className="text-primary mb-6" strokeWidth={1.5} />
                <h3 className="font-heading text-2xl tracking-wide text-foreground mb-3">
                  {service.title.toUpperCase()}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold text-foreground mt-6 group-hover:text-primary transition-colors"
                >
                  Conocer Más
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicesImg} alt="Detalles de racks industriales" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-iron/90" />
        </div>
        <div className="relative container-brand section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wide text-iron-foreground leading-[0.95]">
              ¿LISTO PARA
              <br />
              <span className="text-primary">CONSTRUIR MÁS FUERTE?</span>
            </h2>
            <p className="font-body text-iron-foreground/60 text-base mt-6 max-w-lg mx-auto leading-relaxed">
              Cada rack que diseñamos sostiene más que productos — respalda tu logística, 
              tu seguridad y la continuidad de tu negocio.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-10 py-5 text-sm mt-10 hover:bg-red-deep transition-colors duration-200"
            >
              Inicia Tu Proyecto
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Latest Blogs */}
      <LatestBlogs />
    </>
  );
}
