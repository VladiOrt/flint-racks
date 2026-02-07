import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Warehouse, Layers, Truck, Wrench, BarChart3, Ruler } from "lucide-react";
import MarqueeBanner from "@/components/layout/MarqueeBanner";
import servicesImg from "@/assets/services-racks.jpg";
import heroImg from "@/assets/hero-warehouse.jpg";

const services = [
  {
    icon: Warehouse,
    title: "Selective Pallet Racking",
    description: "The most versatile storage system, offering direct access to every pallet position. Ideal for operations requiring high selectivity and fast inventory turnover.",
    features: ["Direct access to all pallets", "FIFO inventory management", "Adjustable beam heights", "Compatible with all forklift types"],
  },
  {
    icon: Layers,
    title: "Drive-In & Drive-Through Racking",
    description: "High-density storage that eliminates aisles between racks. Perfect for large quantities of the same SKU and cold storage environments.",
    features: ["Maximum storage density", "Ideal for cold storage", "LIFO/FIFO options", "Reduced footprint"],
  },
  {
    icon: Truck,
    title: "Push-Back Racking Systems",
    description: "Dynamic storage using nested carts on inclined rails. Combines high density with better selectivity than drive-in systems.",
    features: ["2-6 pallets deep per lane", "Gravity-fed retrieval", "Multiple SKU storage", "Faster access times"],
  },
  {
    icon: Ruler,
    title: "Cantilever Racking",
    description: "Designed for long, bulky, or irregularly shaped items. Arms extend from vertical columns to create unobstructed storage bays.",
    features: ["No front column obstruction", "Adjustable arm heights", "Indoor and outdoor options", "Heavy-duty load capacity"],
  },
  {
    icon: BarChart3,
    title: "Mezzanine & Multi-Tier Systems",
    description: "Elevate your storage capacity by adding intermediate floor levels within your existing warehouse structure.",
    features: ["Double or triple floor space", "Integrated with racking", "Customizable layouts", "Code-compliant engineering"],
  },
  {
    icon: Wrench,
    title: "Rack Inspection & Maintenance",
    description: "Comprehensive inspection programs and maintenance services to ensure the ongoing safety and performance of your racking systems.",
    features: ["Annual certified inspections", "Damage assessment reports", "Component replacement", "Safety compliance audits"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicesImg} alt="Industrial racking" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-iron/90" />
        </div>
        <div className="relative container-brand section-padding">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.span variants={fadeUp} className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
              Our Services
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-heading text-6xl md:text-7xl tracking-wider text-iron-foreground mt-4 leading-[0.95]">
              SOLUTIONS
              <br />
              <span className="text-primary">ENGINEERED</span>
              <br />
              FOR YOUR NEEDS
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-brand section-padding">
          <div className="text-center mb-16">
            <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-foreground mt-3">
              RACKING SYSTEMS
            </h2>
            <p className="font-body text-muted-foreground text-base mt-4 max-w-xl mx-auto">
              From selective to high-density, we engineer and install the right solution for your operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group border border-border hover:border-primary/30 bg-card p-8 transition-all duration-300"
              >
                <service.icon size={40} className="text-primary mb-6" strokeWidth={1.5} />
                <h3 className="font-heading text-xl tracking-wide text-foreground mb-3">
                  {service.title.toUpperCase()}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs font-body text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-iron">
        <div className="container-brand section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
                Our Process
              </span>
              <h2 className="font-heading text-5xl tracking-wide text-iron-foreground mt-3 leading-[0.95]">
                FROM CONCEPT TO OPERATION
              </h2>
              <div className="flex flex-col gap-8 mt-10">
                {[
                  { step: "01", title: "Consultation & Assessment", desc: "We analyze your space, operations, and requirements." },
                  { step: "02", title: "Design & Engineering", desc: "Custom solutions designed to your exact specifications." },
                  { step: "03", title: "Fabrication", desc: "In-house manufacturing with certified materials." },
                  { step: "04", title: "Installation", desc: "Professional deployment with minimal disruption." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <span className="font-heading text-4xl text-primary/30">{item.step}</span>
                    <div>
                      <h3 className="font-heading text-xl tracking-wide text-iron-foreground">
                        {item.title.toUpperCase()}
                      </h3>
                      <p className="font-body text-sm text-iron-foreground/60 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={heroImg} alt="Warehouse project" className="w-full aspect-[3/4] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <MarqueeBanner />

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-sand">
        <div className="container-brand section-padding text-center">
          <h2 className="font-heading text-5xl md:text-6xl tracking-wide text-sand-foreground">
            START YOUR PROJECT TODAY
          </h2>
          <p className="font-body text-sand-foreground/60 text-base mt-4 max-w-lg mx-auto">
            Contact us for a free consultation and warehouse assessment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-iron text-iron-foreground font-body font-semibold px-10 py-4 text-sm mt-8 hover:bg-primary transition-colors"
          >
            Get a Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
