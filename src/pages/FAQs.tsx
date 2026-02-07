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
    question: "What types of racking systems do you offer?",
    answer: "We offer a comprehensive range including selective pallet racking, drive-in and drive-through racking, push-back systems, cantilever racks, mezzanine solutions, and multi-tier systems. Each solution is engineered to meet your specific operational requirements.",
  },
  {
    question: "How long does a typical installation take?",
    answer: "Installation timelines vary based on project scope. A standard warehouse installation typically takes 2-4 weeks. We offer phased deployment plans to minimize disruption to your operations, allowing you to continue working while we install.",
  },
  {
    question: "Do you provide rack inspection services?",
    answer: "Yes. We provide comprehensive inspection programs including annual certified inspections, damage assessment reports, component replacement, and safety compliance audits. Regular inspections are critical to maintaining a safe warehouse environment.",
  },
  {
    question: "Can you work with my existing warehouse layout?",
    answer: "Absolutely. Our engineering team conducts thorough site assessments, considering floor conditions, ceiling clearances, column placements, and existing workflow patterns. We design solutions that optimize your current space.",
  },
  {
    question: "What is the lead time for a new racking project?",
    answer: "From initial consultation to installation, a typical project takes 6-10 weeks depending on complexity and scope. This includes design, engineering, fabrication, and installation. Rush timelines are available for urgent projects.",
  },
  {
    question: "Do your racking systems meet seismic requirements?",
    answer: "Yes. All our systems are engineered to meet or exceed local seismic requirements. We use certified structural calculations and materials, and every installation includes proper anchoring and bracing for seismic zones.",
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including logistics and distribution, food and beverage, pharmaceutical, automotive, retail, e-commerce, manufacturing, and cold storage operations.",
  },
  {
    question: "Do you offer financing or leasing options?",
    answer: "We work with our clients to find the best financial arrangement for their needs. Contact us to discuss available options including direct purchase, leasing, and phased implementation plans.",
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
              FAQs
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-heading text-6xl md:text-7xl tracking-wider text-iron-foreground mt-4 leading-[0.95]">
              FREQUENTLY
              <br />
              ASKED
              <br />
              <span className="text-primary">QUESTIONS</span>
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
              STILL HAVE QUESTIONS?
            </h3>
            <p className="font-body text-muted-foreground text-base mt-3">
              Our team is ready to help you find the right solution.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-iron text-iron-foreground font-body font-semibold px-10 py-4 text-sm mt-6 hover:bg-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <MarqueeBanner />
    </>
  );
}
