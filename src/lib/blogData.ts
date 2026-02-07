export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  status: 'draft' | 'published';
}

const STORAGE_KEY = 'flint_racks_blog_posts';

const defaultPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'maximizing-warehouse-efficiency-with-selective-pallet-racking',
    title: 'Maximizing Warehouse Efficiency with Selective Pallet Racking',
    excerpt: 'Discover how selective pallet racking systems can transform your warehouse operations, improving accessibility and storage density simultaneously.',
    content: `Selective pallet racking is the most common and versatile storage system used in warehouses today. Its design allows direct access to every pallet position, making it ideal for operations that require high selectivity and fast inventory turnover.

## Why Choose Selective Racking?

The primary advantage of selective racking is accessibility. Unlike drive-in or push-back systems, every pallet location is immediately accessible from the aisle. This means:

- **Faster picking times** — operators can reach any SKU without moving other pallets
- **FIFO inventory management** — first in, first out rotation is naturally maintained
- **Flexible configuration** — beam levels can be adjusted to accommodate varying pallet heights

## Design Considerations

When planning a selective racking installation, several factors must be evaluated:

1. **Load capacity** — each beam pair must support the weight of the pallets stored
2. **Seismic requirements** — in earthquake-prone regions, additional bracing and anchoring may be needed
3. **Aisle width** — determines the type of forklift that can be used
4. **Building height** — maximizing vertical space reduces the warehouse footprint needed

## The Flint Racks Approach

At Flint Racks, we engineer every selective racking system to meet the specific demands of your operation. Our team conducts thorough site assessments, considering floor conditions, ceiling clearances, and workflow patterns before designing your solution.

Every installation is backed by our commitment to safety and structural integrity — because your rack doesn't just hold products, it supports your entire business.`,
    author: 'Thomas Edwards',
    authorRole: 'COO',
    date: '2025-12-15',
    status: 'published',
  },
  {
    id: '2',
    slug: 'safety-first-rack-inspection-best-practices',
    title: 'Safety First: Rack Inspection Best Practices',
    excerpt: 'Regular rack inspections are critical to maintaining a safe warehouse environment. Learn the key checkpoints every facility manager should know.',
    content: `Warehouse safety starts with the structural integrity of your racking systems. A damaged or improperly maintained rack can pose serious risks to personnel, inventory, and operations.

## The Importance of Regular Inspections

According to industry standards, racking systems should undergo formal inspections at least once per year by a qualified engineer. However, daily visual checks by warehouse staff are equally important for catching issues early.

## Key Inspection Points

### Uprights and Frames
- Check for visible dents, bends, or deformations
- Verify anchor bolts are tight and undamaged
- Look for rust or corrosion at the base

### Beams and Connectors
- Ensure beam clips and safety pins are in place
- Check for beam deflection under load
- Verify beam-to-upright connections are secure

### Load Conditions
- Confirm pallets are properly positioned on beams
- Check that loads don't exceed rated capacity
- Verify weight is evenly distributed

## When to Act

Any damage that affects the structural capacity of a rack component requires immediate action:

1. **Remove loads** from the damaged section
2. **Barricade the area** to prevent access
3. **Contact a qualified engineer** for assessment
4. **Document the damage** with photos and measurements

## Prevention is Key

The best approach to rack safety is prevention. Proper forklift training, adequate aisle widths, and column protectors can significantly reduce the risk of impact damage.

At Flint Racks, we design systems with safety margins built in, and we offer inspection services to keep your installation performing at its best.`,
    author: 'María González',
    authorRole: 'Safety Director',
    date: '2025-11-28',
    status: 'published',
  },
  {
    id: '3',
    slug: 'drive-in-vs-push-back-racking-which-is-right',
    title: 'Drive-In vs. Push-Back Racking: Which Is Right for Your Operation?',
    excerpt: 'Comparing two high-density storage solutions to help you make the best decision for your warehouse layout and inventory management needs.',
    content: `When warehouse space is at a premium, high-density storage systems become essential. Two of the most popular options are drive-in racking and push-back racking. Both maximize storage density, but they work in fundamentally different ways.

## Drive-In Racking

Drive-in racking allows forklifts to enter the rack structure to place or retrieve pallets. This creates a deep-lane storage configuration that eliminates aisles between racks.

**Best for:**
- Large quantities of the same SKU
- LIFO (last in, first out) inventory management
- Cold storage environments where space is expensive

**Considerations:**
- Slower access times compared to selective racking
- Higher risk of rack damage from forklift contact
- Limited to one access point per lane

## Push-Back Racking

Push-back racking uses a series of nested carts on inclined rails. When a new pallet is loaded, it pushes the existing pallets back. When a pallet is removed, the remaining pallets roll forward.

**Best for:**
- Multiple SKUs with moderate depth storage (2-6 pallets deep)
- LIFO inventory management
- Operations requiring faster access than drive-in

**Considerations:**
- Higher initial cost per pallet position
- Limited to approximately 6 pallets deep
- Requires precise pallet sizing

## Making the Decision

The right choice depends on your specific operation. At Flint Racks, we analyze your inventory profile, throughput requirements, and available space to recommend the optimal solution — or sometimes a combination of both systems.

Contact us for a free consultation and warehouse assessment.`,
    author: 'Carlos Mendoza',
    authorRole: 'Design Engineer',
    date: '2025-10-10',
    status: 'published',
  },
  {
    id: '4',
    slug: 'upcoming-warehouse-automation-trends-2026',
    title: 'Upcoming Warehouse Automation Trends for 2026',
    excerpt: 'A preview of the automation technologies that will reshape warehouse operations in the coming year.',
    content: `The warehouse industry is on the cusp of a major transformation. As labor costs rise and e-commerce demands grow, automation is no longer a luxury — it's a necessity.

## Key Trends to Watch

### Autonomous Mobile Robots (AMRs)
AMRs are becoming increasingly affordable and capable. These robots can navigate warehouse floors independently, transporting goods between picking stations and storage locations.

### Automated Storage and Retrieval Systems (AS/RS)
Mini-load and unit-load AS/RS systems continue to evolve, offering faster throughput and higher density storage than ever before.

### Integration with Racking Systems
Modern racking is being designed with automation in mind. Rack structures must accommodate robotic access patterns, sensor mounting points, and precise dimensional tolerances.

## What This Means for Your Racking

If you're planning a new warehouse or renovating an existing one, it's crucial to consider future automation compatibility in your racking design. This includes:

- Consistent beam heights and spacing
- Higher dimensional accuracy in installation
- Provisions for guide rails and sensors
- Structural capacity for automated equipment loads

At Flint Racks, we design with the future in mind. Our engineering team can help you plan a racking system that's ready for automation when you are.`,
    author: 'Thomas Edwards',
    authorRole: 'COO',
    date: '2025-09-05',
    status: 'draft',
  },
];

function getStoredPosts(): BlogPost[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // fallback to defaults
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPosts));
  return defaultPosts;
}

function savePosts(posts: BlogPost[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function getAllPosts(): BlogPost[] {
  return getStoredPosts();
}

export function getPublishedPosts(): BlogPost[] {
  return getStoredPosts().filter(p => p.status === 'published');
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getStoredPosts().find(p => p.slug === slug);
}

export function createPost(post: Omit<BlogPost, 'id'>): BlogPost {
  const posts = getStoredPosts();
  const newPost: BlogPost = { ...post, id: Date.now().toString() };
  posts.unshift(newPost);
  savePosts(posts);
  return newPost;
}

export function updatePost(id: string, updates: Partial<BlogPost>): BlogPost | undefined {
  const posts = getStoredPosts();
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) return undefined;
  posts[index] = { ...posts[index], ...updates };
  savePosts(posts);
  return posts[index];
}

export function deletePost(id: string): boolean {
  const posts = getStoredPosts();
  const filtered = posts.filter(p => p.id !== id);
  if (filtered.length === posts.length) return false;
  savePosts(filtered);
  return true;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export { slugify };
