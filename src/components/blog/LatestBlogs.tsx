import { getPublishedPosts } from "@/lib/blogData";
import BlogCardColumn from "./BlogCardColumn";

interface LatestBlogsProps {
  excludeSlug?: string;
  limit?: number;
}

export default function LatestBlogs({ excludeSlug, limit = 3 }: LatestBlogsProps) {
  const posts = getPublishedPosts()
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, limit);

  if (posts.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-brand section-padding">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="font-body text-sm text-primary font-semibold uppercase tracking-wider">
              Últimas Publicaciones
            </span>
            <h2 className="font-heading text-4xl md:text-5xl tracking-wide text-foreground mt-2">
              DEL BLOG
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCardColumn key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
