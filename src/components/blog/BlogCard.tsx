import { Link } from "react-router-dom";
import type { BlogPost } from "@/lib/blogData";
import { ArrowUpRight, Calendar } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).toUpperCase();

  const tags = post.tags ?? ["INDUSTRIAL", "ALMACENAJE"];

  return (
    <article className="group">
      {/* ===== DESKTOP: horizontal row ===== */}
      <div className="hidden md:grid md:grid-cols-[280px_1fr_auto] lg:grid-cols-[320px_1fr_auto] gap-8 items-center py-10">
        {/* Image */}
        <Link to={`/blog/${post.slug}`} className="block aspect-[4/3] overflow-hidden bg-iron">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-iron/80 group-hover:scale-105 transition-transform duration-500" />
        </Link>

        {/* Content */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar size={14} />
            <span className="font-body text-xs tracking-wider">{formattedDate}</span>
          </div>

          <h3 className="font-heading text-xl lg:text-2xl tracking-wide text-foreground leading-tight uppercase group-hover:text-primary transition-colors">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>

          <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-xs uppercase tracking-wider border border-border px-3 py-1.5 text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Read More */}
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 font-body text-sm font-semibold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors whitespace-nowrap self-center"
        >
          Leer Más
          <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* ===== MOBILE: vertical stacked ===== */}
      <div className="md:hidden py-8">
        {/* Full-width image */}
        <Link to={`/blog/${post.slug}`} className="block aspect-[16/10] overflow-hidden bg-iron mb-6">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-iron/80" />
        </Link>

        {/* Content centered */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar size={14} />
            <span className="font-body text-xs tracking-wider">{formattedDate}</span>
          </div>

          <h3 className="font-heading text-xl tracking-wide text-foreground leading-tight uppercase">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>

          <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-xs uppercase tracking-wider border border-border px-3 py-1.5 text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
