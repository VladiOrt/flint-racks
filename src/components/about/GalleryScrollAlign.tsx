import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./GalleryScrollAlign.css";

import imgAutomotive from "@/assets/industry-automotive.jpg";
import imgFood from "@/assets/industry-food.jpg";
import imgLogistics from "@/assets/industry-logistics.jpg";
import imgManufacturing from "@/assets/industry-manufacturing.jpg";
import imgPharma from "@/assets/industry-pharma.jpg";
import imgRetail from "@/assets/industry-retail.jpg";
import imgInstallation from "@/assets/about-installation.jpg";
import imgRacks from "@/assets/services-racks.jpg";

const galleryImages = [
  { src: imgAutomotive, alt: "Industria automotriz" },
  { src: imgFood, alt: "Industria alimentaria" },
  { src: imgLogistics, alt: "Logística" },
  { src: imgManufacturing, alt: "Manufactura" },
  { src: imgPharma, alt: "Farmacéutica" },
  { src: imgRetail, alt: "Retail" },
  { src: imgInstallation, alt: "Instalación" },
  { src: imgRacks, alt: "Racks industriales" },
];

const initialOffsets = [0, 120, 60, 160, 80, 140, 40, 100];

function GalleryCard({
  img,
  offset,
  scrollYProgress,
}: {
  img: { src: string; alt: string };
  offset: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(scrollYProgress, [0, 0.7], [offset, 0]);

  return (
    <motion.div className="galleryCard" style={{ y }}>
      <img src={img.src} alt={img.alt} loading="lazy" />
    </motion.div>
  );
}

export default function GalleryScrollAlign() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="gallerySection" ref={sectionRef}>
      <div className="gallerySticky">
        <div className="galleryContainer">
          <div className="galleryGrid">
            {galleryImages.map((img, i) => (
              <GalleryCard
                key={i}
                img={img}
                offset={initialOffsets[i % initialOffsets.length]}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
