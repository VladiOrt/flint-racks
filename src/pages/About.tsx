import { motion } from "framer-motion";
import { CheckCircle, Target, Lightbulb, Handshake, Gauge, ShieldCheck } from "lucide-react";
import MarqueeBanner from "@/components/layout/MarqueeBanner";
import aboutImg from "@/assets/about-installation.jpg";
import heroImg from "@/assets/hero-warehouse.jpg";

const values = [
  { icon: ShieldCheck, title: "Solidity", description: "Guaranteed reliable structures built to last and perform under demanding conditions." },
  { icon: Lightbulb, title: "Innovation", description: "Design adapted to your specific operational needs and growth plans." },
  { icon: Handshake, title: "Commitment", description: "We accompany our clients through every phase — from design to operation." },
  { icon: Gauge, title: "Efficiency", description: "Maximizing space, time, and productivity in every installation." },
  { icon: Target, title: "Safety", description: "Every rack protects not only products but your complete business operation." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Warehouse" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-iron/90" />
        </div>
        <div className="relative container-brand section-padding">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.span variants={fadeUp} className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
              About Us
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-heading text-6xl md:text-7xl tracking-wider text-iron-foreground mt-4 leading-[0.95]">
              OUR VISION IS
              <br />
              <span className="text-primary">BUILDING</span>
              <br />
              YOUR FUTURE
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-brand section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="font-heading text-5xl tracking-wide text-foreground mt-3 leading-[0.95]">
                BUILT WITH SAFETY, DESIGNED FOR PERFORMANCE
              </h2>
              <p className="font-body text-muted-foreground text-base mt-6 leading-relaxed">
                Flint Racks was born from the conviction that efficiency and safety are the foundation 
                of every well-designed operation. We are a brand focused on designing, manufacturing, 
                and implementing industrial racks and storage solutions, backed by technical knowledge 
                and field experience.
              </p>
              <p className="font-body text-muted-foreground text-base mt-4 leading-relaxed">
                In a world where company operations depend on their capacity for organization, safety, 
                and space optimization, we become a strategic partner. We talk about metal structures, 
                but also about trust, support, and a vision for growth.
              </p>
              <p className="font-body text-muted-foreground text-base mt-4 leading-relaxed">
                Because we understand that every rack holds much more than products: it sustains the 
                logistics, the safety, and the continuity of the business.
              </p>
            </div>
            <div className="relative">
              <img src={aboutImg} alt="Installation" className="w-full aspect-square object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-iron">
        <div className="container-brand section-padding">
          <div className="text-center mb-16">
            <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-iron-foreground mt-3">
              BRAND VALUES
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
              Our Team
            </span>
            <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-foreground mt-3">
              TEAM MEMBERS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Thomas Edwards", role: "COO", initials: "TE" },
              { name: "María González", role: "Safety Director", initials: "MG" },
              { name: "Carlos Mendoza", role: "Design Engineer", initials: "CM" },
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
            READY TO WORK TOGETHER?
          </h2>
          <p className="font-body text-sand-foreground/60 text-base mt-4 max-w-lg mx-auto">
            Let us help you optimize your warehouse operations with solutions engineered for your specific needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-iron text-iron-foreground font-body font-semibold px-10 py-4 text-sm mt-8 hover:bg-primary transition-colors"
          >
            Contact Us
            <CheckCircle size={16} />
          </a>
        </div>
      </section>

      <MarqueeBanner />
    </>
  );
}
