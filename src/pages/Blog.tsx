import { getPublishedPosts } from "@/lib/blogData";
import BlogCard from "@/components/blog/BlogCard";
import { motion } from "framer-motion";
import MarqueeBanner from "@/components/layout/MarqueeBanner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Blog() {
  const posts = getPublishedPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-iron py-32 lg:py-40">
        <div className="container-brand section-padding">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.span variants={fadeUp} className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
              Blog
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-heading text-6xl md:text-7xl tracking-wider text-iron-foreground mt-4 leading-[0.95]">
              CONOCIMIENTO Y
              <br />
              <span className="text-primary">EXPERIENCIA</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-body text-iron-foreground/60 text-lg mt-6 max-w-md">
              Conocimiento de la industria, mejores prácticas e información técnica de nuestro equipo de expertos.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-brand section-padding">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-body text-muted-foreground text-lg">
                Aún no hay artículos publicados. Vuelve pronto.
              </p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {posts.length > 0 && (
                <div className="mb-16">
                  <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
                    Último Artículo
                  </span>
                  <div className="mt-4">
                    <BlogCard post={posts[0]} />
                  </div>
                </div>
              )}

              {/* Rest of posts */}
              {posts.length > 1 && (
                <div>
                  <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
                    Todos los Artículos
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                    {posts.slice(1).map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <MarqueeBanner />
    </>
  );
}
