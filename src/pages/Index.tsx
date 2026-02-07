import { Link } from "react-router-dom";
import { ArrowRight, Shield, Cog, TrendingUp, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import MarqueeBanner from "@/components/layout/MarqueeBanner";
import LatestBlogs from "@/components/blog/LatestBlogs";
import heroImg from "@/assets/hero-warehouse.jpg";
import aboutImg from "@/assets/about-installation.jpg";
import servicesImg from "@/assets/services-racks.jpg";

const stats = [
  { value: "18+", label: "Years of Experience" },
  { value: "1,200+", label: "Projects Completed" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "50+", label: "Team Members" },
];

const services = [
  {
    icon: Shield,
    title: "Design & Engineering",
    description: "Custom racking solutions engineered to your exact specifications, seismic requirements, and operational workflow.",
  },
  {
    icon: Cog,
    title: "Fabrication",
    description: "In-house manufacturing with certified materials and rigorous quality control at every stage.",
  },
  {
    icon: TrendingUp,
    title: "Installation",
    description: "Professional installation with minimal disruption to your operations. Phased deployment plans available.",
  },
  {
    icon: Users,
    title: "Maintenance & Inspection",
    description: "Regular inspection programs and maintenance services to keep your systems safe and performing.",
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Industrial warehouse with pallet racking" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-iron/95 via-iron/70 to-iron/30" />
        </div>
        <div className="relative container-brand section-padding py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="max-w-2xl"
          >
            <motion.span variants={fadeUp} className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
              Industrial Racking Solutions
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-heading text-6xl md:text-7xl lg:text-8xl tracking-wider text-iron-foreground mt-4 leading-[0.95]">
              MORE THAN RACKS:
              <br />
              <span className="text-primary">STRUCTURE</span>
              <br />
              THAT ELEVATES
              <br />
              YOUR BUSINESS.
            </motion.h1>
            <motion.p variants={fadeUp} className="font-body text-iron-foreground/70 text-lg mt-6 max-w-md leading-relaxed">
              We design, fabricate, and install industrial racking solutions backed by technical expertise and field experience.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 text-sm hover:bg-red-deep transition-colors duration-200"
              >
                Get a Quote
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-iron-foreground/30 text-iron-foreground font-body font-semibold px-8 py-4 text-sm hover:border-primary hover:text-primary transition-colors duration-200"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="bg-sand py-8 overflow-hidden">
        <div className="container-brand section-padding">
          <p className="font-body text-xs text-sand-foreground/50 uppercase tracking-widest text-center mb-6">
            Trusted by industry leaders
          </p>
        </div>
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {[...clients, ...clients, ...clients].map((client, i) => (
            <span key={i} className="font-heading text-xl tracking-wider text-sand-foreground/30">
              {client}
            </span>
          ))}
        </div>
      </section>

      {/* About Preview */}
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
                About Flint Racks
              </span>
              <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-foreground mt-3 leading-[0.95]">
                RELIABLE AND COST-EFFECTIVE SOLUTIONS TAILORED TO YOUR NEEDS
              </h2>
              <p className="font-body text-muted-foreground text-base mt-6 leading-relaxed">
                Flint Racks was born from the conviction that efficiency and safety are the foundation 
                of every well-designed operation. We are a brand focused on designing, manufacturing, 
                and implementing industrial racks and storage solutions, backed by technical knowledge 
                and field experience.
              </p>
              <div className="flex flex-col gap-3 mt-8">
                {["Certified structural engineering", "Custom solutions for every industry", "End-to-end project management", "Safety-first installation practices"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-primary flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-iron text-iron-foreground font-body font-semibold px-8 py-4 text-sm mt-10 hover:bg-primary transition-colors duration-200"
              >
                Learn More
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
              <img src={aboutImg} alt="Industrial racking installation" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-primary p-8">
                <span className="font-heading text-5xl text-primary-foreground">18+</span>
                <p className="font-body text-sm text-primary-foreground/80 mt-1">Years of<br/>Experience</p>
              </div>
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
              What We Do
            </span>
            <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-foreground mt-3">
              OUR SERVICES
            </h2>
            <p className="font-body text-muted-foreground text-base mt-4 max-w-xl mx-auto leading-relaxed">
              From design to installation, we provide comprehensive racking solutions that maximize 
              your warehouse efficiency and safety.
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
                  Learn More
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
          <img src={servicesImg} alt="Industrial racking details" className="w-full h-full object-cover" />
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
              READY TO BUILD
              <br />
              <span className="text-primary">STRONGER?</span>
            </h2>
            <p className="font-body text-iron-foreground/60 text-base mt-6 max-w-lg mx-auto leading-relaxed">
              Every rack we design holds more than products — it supports your logistics, 
              your safety, and the continuity of your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-10 py-5 text-sm mt-10 hover:bg-red-deep transition-colors duration-200"
            >
              Start Your Project
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
