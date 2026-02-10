import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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

/* ── Desktop card with scrub ── */
function GalleryCard({
  img,
  index,
  offset,
  scrollYProgress,
  onOpen,
}: {
  img: { src: string; alt: string };
  index: number;
  offset: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  onOpen: (i: number) => void;
}) {
  const y = useTransform(scrollYProgress, [0, 0.7], [offset, 0]);

  return (
    <motion.div className="galleryCard" style={{ y }} onClick={() => onOpen(index)}>
      <img src={img.src} alt={img.alt} loading="lazy" />
    </motion.div>
  );
}

/* ── Lightbox ── */
function Lightbox({
  images,
  index,
  onClose,
}: {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(index);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      className="lightboxOverlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <div className="lightboxContent" onClick={(e) => e.stopPropagation()}>
        <button className="lightboxClose" onClick={onClose} aria-label="Cerrar">✕</button>
        <button className="lightboxNav lightboxPrev" onClick={prev} aria-label="Anterior">‹</button>
        <button className="lightboxNav lightboxNext" onClick={next} aria-label="Siguiente">›</button>
        <img src={images[current].src} alt={images[current].alt} />
      </div>
    </motion.div>
  );
}

/* ── Mobile carousel ── */
function MobileCarousel({ images, onOpen }: { images: { src: string; alt: string }[]; onOpen: (i: number) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval>>();

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[i] as HTMLElement;
    if (slide) {
      track.scrollTo({ left: slide.offsetLeft - track.offsetLeft - 16, behavior: "smooth" });
    }
  }, []);

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % images.length;
        scrollToIndex(next);
        return next;
      });
    }, 5000);
    return () => clearInterval(autoplayRef.current);
  }, [images.length, scrollToIndex]);

  // Track scroll position for dots
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const scrollLeft = track.scrollLeft;
      const slideWidth = (track.children[0] as HTMLElement)?.offsetWidth || 1;
      const idx = Math.round(scrollLeft / (slideWidth + 16));
      setActiveIndex(Math.min(idx, images.length - 1));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [images.length]);

  const goTo = (i: number) => {
    clearInterval(autoplayRef.current);
    setActiveIndex(i);
    scrollToIndex(i);
    // Restart autoplay
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % images.length;
        scrollToIndex(next);
        return next;
      });
    }, 5000);
  };

  return (
    <div className="carouselWrapper">
      <div className="carouselTrack" ref={trackRef}>
        {images.map((img, i) => (
          <div key={i} className="carouselSlide" onClick={() => onOpen(i)}>
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
      <div className="carouselDots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carouselDot${i === activeIndex ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Main component ── */
export default function GalleryScrollAlign() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  return (
    <>
      <div className="gallerySection" ref={sectionRef}>
        <div className="galleryContainer">
          {/* Desktop/Tablet grid */}
          <div className="galleryGrid">
            {galleryImages.map((img, i) => (
              <GalleryCard
                key={i}
                img={img}
                index={i}
                offset={initialOffsets[i % initialOffsets.length]}
                scrollYProgress={scrollYProgress}
                onOpen={setLightboxIndex}
              />
            ))}
          </div>

          {/* Mobile carousel */}
          <MobileCarousel images={galleryImages} onOpen={setLightboxIndex} />
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={galleryImages}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
