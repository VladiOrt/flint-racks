import { Link } from "react-router-dom";
import type { BlogPost } from "@/lib/blogData";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-card border border-border hover:border-primary/30 transition-all duration-300">
      {/* Image placeholder with brand pattern */}
      <div className="aspect-[16/10] bg-iron relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-iron/80" />
        <div className="absolute bottom-4 left-4">
          <span className="font-body text-xs text-iron-foreground/60 bg-iron/80 px-3 py-1">
            {new Date(post.date).toLocaleDateString("es-MX", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-body text-xs text-primary font-semibold uppercase tracking-wider">
            {post.author}
          </span>
          <span className="text-muted-foreground text-xs">•</span>
          <span className="font-body text-xs text-muted-foreground">
            {post.authorRole}
          </span>
        </div>

        <h3 className="font-heading text-2xl tracking-wide text-foreground mb-3 group-hover:text-primary transition-colors">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 font-body text-sm font-semibold text-foreground group-hover:text-primary transition-colors"
        >
          Leer Más
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
