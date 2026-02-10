import { useState, memo } from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const GEO_URL =
  "https://gist.githubusercontent.com/edgarrmondragon/79582e5e7581d1f18a82d6ed9afe81ff/raw/mx_tj.json";

interface TooltipState {
  name: string;
  x: number;
  y: number;
}

const MexicoMapSection = () => {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container-brand section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase text-foreground leading-tight">
            Mapa de <span className="text-primary">Cobertura</span>
          </h2>
          <div className="w-20 h-1 bg-primary mt-6 mx-auto mb-6" />
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Explora nuestra presencia en cada estado de la República Mexicana. Posiciona el cursor sobre cualquier estado para más información.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
          style={{ perspective: "1000px" }}
        >
          <div
            className="relative"
            style={{
              transform: "rotateX(15deg) rotateZ(-2deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Shadow/reflection effect for 3D look */}
            <div
              className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.3), transparent)",
                transform: "translateZ(-20px) translateY(20px)",
              }}
            />

            <div
              className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 md:p-8"
              onMouseLeave={() => setTooltip(null)}
            >
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 1200,
                  center: [-102.5, 23.5],
                }}
                width={800}
                height={520}
                style={{ width: "100%", height: "auto" }}
              >
                <ZoomableGroup>
                  <Geographies geography={GEO_URL}>
                    {({ geographies }) =>
                      geographies
                        .filter((geo) => geo.properties.state_name)
                        .map((geo) => (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onMouseEnter={(e) => {
                              const rect = (
                                e.currentTarget.closest("svg") as SVGSVGElement
                              )?.getBoundingClientRect();
                              if (rect) {
                                setTooltip({
                                  name: geo.properties.state_name,
                                  x: e.clientX - rect.left,
                                  y: e.clientY - rect.top,
                                });
                              }
                            }}
                            onMouseMove={(e) => {
                              const rect = (
                                e.currentTarget.closest("svg") as SVGSVGElement
                              )?.getBoundingClientRect();
                              if (rect) {
                                setTooltip({
                                  name: geo.properties.state_name,
                                  x: e.clientX - rect.left,
                                  y: e.clientY - rect.top,
                                });
                              }
                            }}
                            onMouseLeave={() => setTooltip(null)}
                            style={{
                              default: {
                                fill: "hsl(var(--primary) / 0.65)",
                                stroke: "hsl(var(--background))",
                                strokeWidth: 0.5,
                                outline: "none",
                                transition: "all 0.2s ease",
                              },
                              hover: {
                                fill: "hsl(var(--primary))",
                                stroke: "hsl(var(--background))",
                                strokeWidth: 0.8,
                                outline: "none",
                                cursor: "pointer",
                                filter: "drop-shadow(0 4px 8px hsl(var(--primary) / 0.4))",
                              },
                              pressed: {
                                fill: "hsl(var(--primary))",
                                outline: "none",
                              },
                            }}
                          />
                        ))
                    }
                  </Geographies>
                </ZoomableGroup>
              </ComposableMap>

              {/* Tooltip Card */}
              {tooltip && (
                <div
                  className="absolute pointer-events-none z-50 transition-all duration-150"
                  style={{
                    left: tooltip.x,
                    top: tooltip.y - 10,
                    transform: "translate(-50%, -100%)",
                  }}
                >
                  <div className="bg-foreground text-background px-5 py-3 rounded-lg shadow-xl min-w-[180px] text-center">
                    <p className="font-heading text-lg uppercase tracking-wide">
                      {tooltip.name}
                    </p>
                    <p className="font-body text-sm text-background/70 mt-0.5">
                      Cubierto por Flint Racks
                    </p>
                  </div>
                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-3 h-3 bg-foreground rotate-45 -mt-1.5" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(MexicoMapSection);
