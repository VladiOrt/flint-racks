import { Link } from "react-router-dom";
import type { BlogPost } from "@/lib/blogData";
import { ArrowUpRight, Calendar } from "lucide-react";

interface BlogCardColumnProps {
  post: BlogPost;
}

export default function BlogCardColumn({ post }: BlogCardColumnProps) {
  const formattedDate = new Date(post.date)
    .toLocaleDateString("es-MX", { year: "numeric", month: "short", day: "numeric" })
    .toUpperCase();

  const tags = post.tags ?? ["INDUSTRIAL", "ALMACENAJE"];

  return (
    <article className="group flex flex-col">
      {/* Cover Image */}
      <Link to={`/blog/${post.slug}`} className="block aspect-[4/3] overflow-hidden bg-iron">
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-iron/80 group-hover:scale-105 transition-transform duration-500" />
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col gap-3 pt-5">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar size={14} />
          <span className="font-body text-xs tracking-wider">{formattedDate}</span>
        </div>

        <h3 className="font-heading text-xl tracking-wide text-foreground leading-tight uppercase group-hover:text-primary transition-colors">
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

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 font-body text-sm font-semibold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors mt-2 w-fit"
        >
          Leer Más
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </article>
  );
}
