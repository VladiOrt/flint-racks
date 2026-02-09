import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import industryLogistics from "@/assets/industry-logistics.jpg";
import industryManufacturing from "@/assets/industry-manufacturing.jpg";
import industryRetail from "@/assets/industry-retail.jpg";
import industryPharma from "@/assets/industry-pharma.jpg";
import industryFood from "@/assets/industry-food.jpg";
import industryAutomotive from "@/assets/industry-automotive.jpg";

const industries = [
  { name: "Logística y Distribución", image: industryLogistics },
  { name: "Manufactura", image: industryManufacturing },
  { name: "Retail y Comercio", image: industryRetail },
  { name: "Farmacéutica", image: industryPharma },
  { name: "Alimentos y Bebidas", image: industryFood },
  { name: "Automotriz", image: industryAutomotive },
];

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container-brand section-padding">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wide text-foreground text-center mb-16 leading-[0.95]"
        >
          INDUSTRIAS QUE
          <br />
          <span className="text-primary">CONFÍAN EN NOSOTROS</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Industries list */}
          <div className="w-full lg:w-1/2">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onMouseEnter={() => setActiveIndex(i)}
                className="group cursor-pointer"
              >
                <div className="flex items-center gap-4 py-5 lg:py-6">
                  {/* Arrow icon — visible only when active */}
                  <div className="w-7 overflow-hidden hidden lg:block">
                    <ArrowUpRight
                      size={24}
                      className={`transition-all duration-300 ${
                        activeIndex === i
                          ? "translate-x-0 opacity-100 text-foreground"
                          : "-translate-x-full opacity-0 text-muted-foreground"
                      }`}
                    />
                  </div>
                  <span
                    className={`font-heading text-2xl md:text-3xl lg:text-4xl tracking-wide uppercase transition-colors duration-300 ${
                      activeIndex === i ? "text-foreground" : "text-muted-foreground/50"
                    }`}
                  >
                    {industry.name}
                  </span>
                </div>
                {/* Progress line */}
                <div className="h-px bg-border relative">
                  <div
                    className="absolute inset-y-0 left-0 bg-primary transition-all duration-500 ease-out"
                    style={{ width: activeIndex === i ? "100%" : "0%" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image area */}
          <div className="w-full lg:w-1/2 relative aspect-[4/5] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={industries[activeIndex].image}
                alt={industries[activeIndex].name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
