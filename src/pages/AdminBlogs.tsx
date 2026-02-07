import { useState, useEffect, FormEvent } from "react";
import { getAllPosts, createPost, updatePost, deletePost, slugify, type BlogPost } from "@/lib/blogData";
import { Plus, Edit, Trash2, Eye, EyeOff, LogOut, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import logoRed from "@/assets/logo-red.svg";

const ADMIN_USER = "admin";
const ADMIN_PASS = "flintracks2024";

export default function AdminBlogs() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [creating, setCreating] = useState(false);

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    authorRole: "",
    date: new Date().toISOString().split("T")[0],
    status: "draft" as "draft" | "published",
  });

  useEffect(() => {
    if (authenticated) {
      setPosts(getAllPosts());
    }
  }, [authenticated]);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setAuthenticated(true);
    } else {
      toast.error("Invalid credentials");
    }
  };

  const resetForm = () => {
    setForm({
      title: "",
      excerpt: "",
      content: "",
      author: "",
      authorRole: "",
      date: new Date().toISOString().split("T")[0],
      status: "draft",
    });
    setEditing(null);
    setCreating(false);
  };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.content || !form.author) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (editing) {
      updatePost(editing.id, {
        ...form,
        slug: slugify(form.title),
      });
      toast.success("Post updated successfully");
    } else {
      createPost({
        ...form,
        slug: slugify(form.title),
      });
      toast.success("Post created successfully");
    }

    setPosts(getAllPosts());
    resetForm();
  };

  const handleEdit = (post: BlogPost) => {
    setEditing(post);
    setCreating(true);
    setForm({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      authorRole: post.authorRole,
      date: post.date,
      status: post.status,
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      deletePost(id);
      setPosts(getAllPosts());
      toast.success("Post deleted");
    }
  };

  const toggleStatus = (post: BlogPost) => {
    const newStatus = post.status === "published" ? "draft" : "published";
    updatePost(post.id, { status: newStatus });
    setPosts(getAllPosts());
    toast.success(`Post ${newStatus === "published" ? "published" : "set to draft"}`);
  };

  // Login Screen
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-iron flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <div className="text-center mb-10">
            <img src={logoRed} alt="Flint Racks" className="h-8 w-auto mx-auto" />
            <p className="font-body text-iron-foreground/60 text-sm mt-4">Blog Admin Panel</p>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div>
              <label className="font-body text-xs text-iron-foreground/60 uppercase tracking-wider mb-2 block">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-iron-foreground/5 border border-iron-foreground/20 px-4 py-3 font-body text-sm text-iron-foreground focus:border-primary focus:outline-none"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="font-body text-xs text-iron-foreground/60 uppercase tracking-wider mb-2 block">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-iron-foreground/5 border border-iron-foreground/20 px-4 py-3 font-body text-sm text-iron-foreground focus:border-primary focus:outline-none"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground font-body font-semibold px-8 py-4 text-sm hover:bg-red-deep transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Editor Form
  if (creating) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container-brand section-padding">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={resetForm}
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Posts
            </button>
          </div>

          <h1 className="font-heading text-4xl tracking-wide text-foreground mb-8">
            {editing ? "EDIT POST" : "CREATE NEW POST"}
          </h1>

          <form onSubmit={handleSave} className="max-w-4xl flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Status
                </label>
                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value as "draft" | "published" })}
                  className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Author Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Author Role
                </label>
                <input
                  type="text"
                  value={form.authorRole}
                  onChange={(e) => setForm({ ...form, authorRole: e.target.value })}
                  className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Publication Date
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                Excerpt
              </label>
              <textarea
                rows={2}
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none resize-none"
                placeholder="Brief summary of the article..."
              />
            </div>

            <div>
              <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                Content * (supports ## headings, ### subheadings, **bold**, - lists)
              </label>
              <textarea
                required
                rows={20}
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none resize-y font-mono"
                placeholder="Write your article content here..."
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-primary text-primary-foreground font-body font-semibold px-8 py-4 text-sm hover:bg-red-deep transition-colors"
              >
                {editing ? "Update Post" : "Create Post"}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="border border-border text-foreground font-body font-semibold px-8 py-4 text-sm hover:border-foreground transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Posts List
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container-brand section-padding">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-4xl tracking-wide text-foreground">
              BLOG ADMIN
            </h1>
            <p className="font-body text-sm text-muted-foreground mt-1">
              Manage your blog posts
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View Site
            </Link>
            <button
              onClick={() => setCreating(true)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-6 py-3 text-sm hover:bg-red-deep transition-colors"
            >
              <Plus size={16} />
              New Post
            </button>
            <button
              onClick={() => setAuthenticated(false)}
              className="inline-flex items-center gap-2 border border-border text-foreground font-body text-sm px-4 py-3 hover:border-foreground transition-colors"
              title="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>

        {/* Posts Table */}
        <div className="border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left font-body text-xs uppercase tracking-wider text-muted-foreground px-6 py-4">
                    Title
                  </th>
                  <th className="text-left font-body text-xs uppercase tracking-wider text-muted-foreground px-6 py-4">
                    Author
                  </th>
                  <th className="text-left font-body text-xs uppercase tracking-wider text-muted-foreground px-6 py-4">
                    Date
                  </th>
                  <th className="text-left font-body text-xs uppercase tracking-wider text-muted-foreground px-6 py-4">
                    Status
                  </th>
                  <th className="text-right font-body text-xs uppercase tracking-wider text-muted-foreground px-6 py-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-body text-sm font-medium text-foreground">
                        {post.title}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-body text-sm text-muted-foreground">
                        {post.author}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-body text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleStatus(post)}
                        className={`inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wider px-3 py-1 ${
                          post.status === "published"
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {post.status === "published" ? <Eye size={12} /> : <EyeOff size={12} />}
                        {post.status}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(post)}
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          title="Edit"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
