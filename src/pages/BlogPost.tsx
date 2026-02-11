import { useParams, Link } from "react-router-dom";
import { getPostBySlug } from "@/lib/blogData";
import LatestBlogs from "@/components/blog/LatestBlogs";
import { ArrowLeft, Calendar, User } from "lucide-react";
import MarqueeBanner from "@/components/layout/MarqueeBanner";
import { motion } from "framer-motion";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post || post.status !== "published") {
    return (
      <section className="py-40 bg-background">
        <div className="container-brand section-padding text-center">
          <h1 className="font-heading text-5xl text-foreground">ARTÍCULO NO ENCONTRADO</h1>
          <p className="font-body text-muted-foreground mt-4">
            Este artículo no existe o aún no ha sido publicado.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-iron text-iron-foreground font-body font-semibold px-8 py-4 text-sm mt-8 hover:bg-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al Blog
          </Link>
        </div>
      </section>
    );
  }

  const isHtml = post.content.includes("<") && post.content.includes(">");

  // Parse markdown-like content (legacy support)
  const renderMarkdown = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listCounter = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${listCounter++}`} className="my-4 space-y-2 pl-6">
            {currentList.map((item, i) => (
              <li key={i} className="font-body text-base text-foreground/80 leading-relaxed list-disc">
                {item}
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, i) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={i} className="font-heading text-3xl tracking-wide text-foreground mt-10 mb-4">
            {trimmed.replace("## ", "").toUpperCase()}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={i} className="font-heading text-2xl tracking-wide text-foreground mt-8 mb-3">
            {trimmed.replace("### ", "").toUpperCase()}
          </h3>
        );
      } else if (trimmed.startsWith("- **")) {
        const match = trimmed.match(/^- \*\*(.+?)\*\*\s*[—–-]\s*(.+)$/);
        if (match) {
          currentList.push(`${match[1]}: ${match[2]}`);
        } else {
          const boldMatch = trimmed.match(/^- \*\*(.+?)\*\*(.*)$/);
          if (boldMatch) {
            currentList.push(`${boldMatch[1]}${boldMatch[2]}`);
          } else {
            currentList.push(trimmed.replace("- ", ""));
          }
        }
      } else if (trimmed.startsWith("- ")) {
        currentList.push(trimmed.replace("- ", ""));
      } else if (/^\d+\.\s/.test(trimmed)) {
        flushList();
        currentList.push(trimmed.replace(/^\d+\.\s/, ""));
      } else if (trimmed === "") {
        flushList();
      } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
        flushList();
        elements.push(
          <p key={i} className="font-body text-base font-semibold text-foreground my-3">
            {trimmed.replace(/\*\*/g, "")}
          </p>
        );
      } else {
        flushList();
        const parts = trimmed.split(/(\*\*.+?\*\*)/g);
        elements.push(
          <p key={i} className="font-body text-base text-foreground/80 leading-relaxed my-3">
            {parts.map((part, pi) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={pi} className="font-semibold text-foreground">
                  {part.replace(/\*\*/g, "")}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <>
      {/* Article Header with Cover Image */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden">
        {post.coverImage ? (
          <motion.img
            src={post.coverImage}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 8, ease: "easeOut" }}
          />
        ) : (
          <div className="absolute inset-0 bg-iron" />
        )}
        <div className="absolute inset-0 bg-foreground/70" />

        <div className="relative z-10 container-brand section-padding pb-16 lg:pb-20 w-full">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-body text-sm text-white/60 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Volver al Blog
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wider text-white leading-[0.95] max-w-4xl">
            {post.title.toUpperCase()}
          </h1>
          <div className="flex flex-wrap items-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <User size={16} className="text-primary" />
              <span className="font-body text-sm text-white/80">
                {post.author}
              </span>
              <span className="text-white/40">•</span>
              <span className="font-body text-sm text-white/60">
                {post.authorRole}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-primary" />
              <span className="font-body text-sm text-white/60">
                {new Date(post.date).toLocaleDateString("es-MX", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-brand section-padding">
          <article className="max-w-3xl">
            {isHtml ? (
              <div
                className="prose prose-lg max-w-none font-body text-foreground/80 [&_h1]:font-heading [&_h1]:text-4xl [&_h1]:tracking-wide [&_h1]:text-foreground [&_h1]:mt-10 [&_h1]:mb-4 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:tracking-wide [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:tracking-wide [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3 [&_h4]:font-heading [&_h4]:text-xl [&_h4]:text-foreground [&_h4]:mt-6 [&_h4]:mb-3 [&_h5]:font-heading [&_h5]:text-lg [&_h5]:text-foreground [&_h5]:mt-5 [&_h5]:mb-2 [&_h6]:font-heading [&_h6]:text-base [&_h6]:text-foreground [&_h6]:mt-4 [&_h6]:mb-2 [&_img]:max-w-full [&_img]:h-auto [&_img]:my-6 [&_iframe]:w-full [&_strong]:font-semibold [&_strong]:text-foreground [&_em]:italic [&_ul]:my-4 [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:my-4 [&_ol]:pl-6 [&_ol]:space-y-2 [&_li]:leading-relaxed [&_p]:leading-relaxed [&_p]:my-3"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              renderMarkdown(post.content)
            )}
          </article>
        </div>
      </section>

      {/* Latest Blogs */}
      <LatestBlogs excludeSlug={post.slug} />

      <MarqueeBanner />
    </>
  );
}
