import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import LatestBlogs from "@/components/blog/LatestBlogs";
import HeroSection from "@/components/home/HeroSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import ServicesSection from "@/components/home/ServicesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import aboutImg from "@/assets/about-installation.jpg";

const stats = [
  { value: "18+", label: "Años de Experiencia" },
  { value: "1,200+", label: "Proyectos Completados" },
  { value: "98%", label: "Satisfacción del Cliente" },
  { value: "50+", label: "Miembros del Equipo" },
];


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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src={aboutImg} alt="Instalación de racks industriales" className="w-full aspect-[4/5] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <BenefitsSection />

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

      {/* Services */}
      <ServicesSection />

      {/* Industries */}
      <IndustriesSection />

      {/* Latest Blogs */}
      <LatestBlogs />
    </>
  );
}
