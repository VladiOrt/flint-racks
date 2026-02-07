import { useParams, Link } from "react-router-dom";
import { getPostBySlug } from "@/lib/blogData";
import LatestBlogs from "@/components/blog/LatestBlogs";
import { ArrowLeft, Calendar, User } from "lucide-react";
import MarqueeBanner from "@/components/layout/MarqueeBanner";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post || post.status !== "published") {
    return (
      <section className="py-40 bg-background">
        <div className="container-brand section-padding text-center">
          <h1 className="font-heading text-5xl text-foreground">ARTICLE NOT FOUND</h1>
          <p className="font-body text-muted-foreground mt-4">
            This article doesn't exist or hasn't been published yet.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-iron text-iron-foreground font-body font-semibold px-8 py-4 text-sm mt-8 hover:bg-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  // Parse markdown-like content
  const renderContent = (content: string) => {
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
        // Handle inline bold
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
      {/* Article Header */}
      <section className="bg-iron pt-32 pb-16">
        <div className="container-brand section-padding">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-body text-sm text-iron-foreground/60 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wider text-iron-foreground leading-[0.95] max-w-4xl">
            {post.title.toUpperCase()}
          </h1>
          <div className="flex flex-wrap items-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <User size={16} className="text-primary" />
              <span className="font-body text-sm text-iron-foreground/80">
                {post.author}
              </span>
              <span className="text-iron-foreground/40">•</span>
              <span className="font-body text-sm text-iron-foreground/60">
                {post.authorRole}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-primary" />
              <span className="font-body text-sm text-iron-foreground/60">
                {new Date(post.date).toLocaleDateString("en-US", {
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
            {renderContent(post.content)}
          </article>
        </div>
      </section>

      {/* Latest Blogs */}
      <LatestBlogs excludeSlug={post.slug} />

      <MarqueeBanner />
    </>
  );
}
