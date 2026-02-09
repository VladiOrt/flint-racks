import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-warehouse.jpg";
import heroVideo from "@/assets/hero-video.mp4";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Curtain opens between 0% and 40% of scroll
  const leftCurtain = useTransform(scrollYProgress, [0, 0.35], ["0%", "-100%"]);
  const rightCurtain = useTransform(scrollYProgress, [0, 0.35], ["0%", "100%"]);

  // Overlay fades in after curtains open
  const overlayOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 0.75]);

  // Content fades in after curtains
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.5], [60, 0]);

  // Lines fade in
  const linesOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 0.08]);

  // Parallax: video moves up slowly as you scroll past
  const videoY = useTransform(scrollYProgress, [0.4, 1], ["0%", "-20%"]);

  // Title text that shows on image (like "Grading" in reference)
  const gradingOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "250vh" }} // Extra height for scroll-driven animation
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-iron">
        {/* Background video with parallax */}
        <motion.div className="absolute inset-0" style={{ y: videoY }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[120%] object-cover"
            poster={heroImg}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </motion.div>

        {/* Curtain overlay — two image halves that open on scroll */}
        <div className="absolute inset-0 flex pointer-events-none z-[1]">
          {/* Left curtain */}
          <motion.div
            style={{ x: leftCurtain }}
            className="w-1/2 h-full overflow-hidden flex-shrink-0"
          >
            <img
              src={heroImg}
              alt=""
              className="w-screen h-full object-cover"
            />
          </motion.div>
          {/* Right curtain */}
          <motion.div
            style={{ x: rightCurtain }}
            className="w-1/2 h-full overflow-hidden flex-shrink-0 flex justify-end"
          >
            <img
              src={heroImg}
              alt=""
              className="w-screen h-full object-cover object-right"
            />
          </motion.div>
        </div>

        {/* "Grading" title on the curtain image */}
        <motion.div
          style={{ opacity: gradingOpacity }}
          className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none"
        >
          <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-iron-foreground/10 tracking-widest uppercase select-none">
            FLINT RACKS
          </h2>
        </motion.div>

        {/* Dark overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-iron z-[2]"
        />

        {/* Decorative lines */}
        <motion.div
          style={{ opacity: linesOpacity }}
          className="absolute inset-0 pointer-events-none z-[3]"
        >
          <div className="h-full w-full flex justify-between px-[20%]">
            <div className="w-px h-full bg-iron-foreground" />
            <div className="w-px h-full bg-iron-foreground" />
            <div className="w-px h-full bg-iron-foreground" />
            <div className="w-px h-full bg-iron-foreground" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative container-brand section-padding w-full h-full flex items-end pb-16 lg:pb-20 z-[4]"
        >
          <div className="flex flex-col lg:flex-row items-end lg:items-end justify-between gap-12 lg:gap-16 w-full">
            {/* Left: Headline + trust */}
            <div className="flex-1 flex flex-col gap-8">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] tracking-wider text-iron-foreground leading-[0.9]">
                MÁS QUE
                <br />
                RACKS:
                <br />
                <span className="text-primary">ESTRUCTURA</span>
                <br />
                QUE ELEVA
                <br />
                TU NEGOCIO.
              </h1>

              {/* Trust badge */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="font-body text-xs text-iron-foreground/60 uppercase tracking-wider">
                    La confianza de +500 empresas
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Description + CTA */}
            <div className="lg:max-w-sm flex flex-col gap-6">
              <img
                src={heroImg}
                alt="Detalle de rack industrial"
                className="w-40 h-28 object-cover hidden lg:block"
              />
              <p className="font-body text-iron-foreground/70 text-base leading-relaxed">
                Diseñamos, fabricamos e instalamos soluciones de racks industriales respaldadas por
                experiencia técnica y de campo. Cada proyecto nace de un análisis riguroso.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 text-sm hover:bg-red-deep transition-colors duration-300 w-fit"
              >
                Cotizar Proyecto
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
