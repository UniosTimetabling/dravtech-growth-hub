export const services = [
  { k: "01", name: "Web", title: "Websites that convert", body: "Marketing sites, web apps and landing pages engineered for speed and SEO.", points: ["Custom design", "Fast & SEO-ready", "Content you can edit"] },
  { k: "02", name: "Ecommerce", title: "Stores built to sell", body: "Custom shops with secure checkout, inventory and payments from day one.", points: ["M-Pesa & card payments", "Inventory & orders", "Mobile-first checkout"] },
  { k: "03", name: "Systems", title: "Systems that scale", body: "Dashboards and management platforms shaped around how your team works.", points: ["Role-based access", "Reports & analytics", "Web, mobile, desktop"] },
  { k: "04", name: "Automation", title: "Processes that run themselves", body: "We turn manual, paper-heavy work into accurate, automated systems your whole team can trust.", points: ["Workflow automation", "Fewer errors, more accuracy", "Clear, open processes"] },
  { k: "05", name: "Review & Modernize", title: "Systems, realigned", body: "We review what you already run — ERPs, school management systems, legacy tools — fix them, upgrade them and align them to how you really work.", points: ["ERP & school system fixes", "Upgrades & modernization", "Process clarity"] },
  { k: "06", name: "AI & Agents", title: "AI that works inside your business", body: "We integrate AI and agents into your company — automations that lift productivity, in your team's own language and local dialects.", points: ["AI agents & assistants", "Workflow automations", "Local dialects & voice"] },
  { k: "07", name: "Data Analytics", title: "Decisions from your own data", body: "We guide you through your data so every decision is backed by evidence, not guesswork.", points: ["Dashboards & reports", "Data cleaning & modelling", "Guided decision-making"] },
  { k: "08", name: "Growth Analytics", title: "Never lose a customer — or a shilling", body: "Every site and system we build tracks productivity with funnel analytics, integrated with Google Search, Meta Ads and more.", points: ["Funnel analytics", "Google & Meta Ads integration", "Conversion tracking"] },
  { k: "09", name: "Research", title: "Research that guides", body: "Data, market and technical research behind every product decision.", points: ["Market studies", "Data analysis", "Technical feasibility"] },
];

export const pillars = [
  { k: "01", title: "Convert", body: "We turn a business into a productive system — every process mapped, measured and owned." },
  { k: "02", title: "Automate", body: "Repetitive work moves to software, so people focus on decisions, not paperwork." },
  { k: "03", title: "Review", body: "We audit what a company already built and offer the best solution on top of it." },
  { k: "04", title: "Scale", body: "Built to global standards, from Nairobi, for Africa and the world." },
];

export type Product = { slug: string; name: string; tag: string; line: string; body: string; points: string[] };

export const products: Product[] = [
  { slug: "timetabling", name: "University Timetabling", tag: "Education", line: "Clash-free timetables for universities and colleges, automated.", body: "The whole timetabling process for higher-education institutions — rooms, lecturers, units and students — generated in minutes instead of weeks, on web, mobile and desktop.", points: ["Automatic clash detection", "Rooms, lecturers & cohorts", "Published to every student"] },
  { slug: "rental-hub", name: "Rental Hub", tag: "Property · SaaS", line: "Property management that turns data into insight — and homes you can trust.", body: "Owners and managers run their properties in one place. The public browses homes from verified owners we have visited in the field. Privacy is built in, quality is tracked and delivery is held to what was promised. Property managers grow with us through sponsors, mentorship and partnerships.", points: ["Field-verified owners", "Privacy & security by design", "Insights from your own data", "Sponsorship & mentorship for managers"] },
  { slug: "automotives", name: "DravTech Automotives", tag: "Mobility · SaaS", line: "Rent, book and travel — cars, matatus and saccos in one place.", body: "One platform exposing local and remote places: rent a car, book a seat, plan your daily commute. We connect matatus, saccos and car-rental partners so people get what they need, with security at the root. With our partner EcoFlow we connect drivers to the nearest mechanic — and we provide the expertise and mentoring to help that idea grow.", points: ["Car rental & seat booking", "Multiple saccos connected", "Partner car-rental fleets", "EcoFlow: nearest mechanic"] },
  { slug: "dravpay", name: "Drav Pay", tag: "Payments · SaaS", line: "One payment layer in every system, and a sacco-to-sacco switch.", body: "Drav Pay is integrated across all our systems. We connect with partner tech companies through their APIs and run a switch that links sacco to sacco — a gateway that makes payments seamless, keeps security at the head, lowers costs and sets a standard for the industry.", points: ["Built into every DravTech system", "Sacco-to-sacco switch", "Lower cost per transaction", "Security first"] },
  { slug: "model-forge", name: "Model Forge", tag: "AI Models", line: "Describe the AI model you need. Get it tested and running.", body: "Tell us the task; Model Forge returns a working, tested AI system you can run.", points: ["Plain-language brief", "Tested before delivery", "Deployed and running"] },
  { slug: "pos", name: "DravTech POS", tag: "Point of Sale", line: "One POS, shaped for every industry.", body: "A single point-of-sale platform with editions for hotels and restaurants, chemists and hospitals, schools, accounting and retail — each tuned to how that business actually sells, bills and reports.", points: ["Hotels & restaurants", "Chemists & hospitals", "Schools & accounting", "Drav Pay built in"] },
];

export const partners = [
  "KEPSA", "Government of Kenya", "Hope and Home KE Nairobi", "Trinity Cycle Mart South C", "Bana Girl",
  "Grassroot Development Organisation Kenya (GRADO)", "Chuka University", "Ray Vision Technologies Nairobi",
  "Lowlands Hotel Chuka", "Finesse Publishing Limited", "Pitch & Safe",
];

export const impact = [
  { k: "01", tag: "Youth · NYOTA", title: "Mastercraftsmen in IT", body: "Through NYOTA, organised by the Government of Kenya in partnership with KEPSA, we mentor and skill young people as IT mastercraftsmen.", with: "GoK × KEPSA" },
  { k: "02", tag: "Skilling", title: "IT skills & software packages", body: "Hands-on training across different IT skills and packages, so young people leave job-ready.", with: "Open programmes" },
  { k: "03", tag: "Mentorship", title: "Staff mentorship", body: "Structured mentorship for staff and teams, built together with Finesse Publishing.", with: "Finesse" },
  { k: "04", tag: "Climate", title: "Planting trees", body: "With the Grassroot Development Organisation Kenya, an NGO restoring land one tree at a time.", with: "GRADO" },
  { k: "05", tag: "Startups", title: "Mentoring EcoFlow", body: "We mentor EcoFlow as they build infrastructure for automotives — connecting drivers to the nearest mechanic.", with: "EcoFlow" },
  { k: "06", tag: "SMEs · Jiinue", title: "Bringing businesses online", body: "Our journey began when our team member worked on the Jiinue programme — Mastercard with KEPSA and Stahimili. We learned how SMEs really run, and built DravTech Ledger to help them manage their finances. Now we tool and mentor SMEs, and seek partners like KEPSA to scale it — with local dialects and voices built in.", with: "Mastercard × KEPSA × Stahimili" },
];

export const team = [
  { name: "Peter Kariuki Mwangi", role: "QA & Chair of Council", edu: "BSc Electrical Engineering", note: "Effortless support — and the questions that really matter.", award: "Team of the Year · 1st" },
  { name: "Friendlick Mbugua", role: "CEO · Marketing", edu: "BSc Economics & Statistics", note: "Creating the best brand and being its ambassador.", award: "Team of the Year · 1st" },
  { name: "Samuel Kibunja", role: "Full Stack Engineer", edu: "BSc Computer Science", note: "Timely delivery, always innovating.", award: "Team of the Year · 1st" },
  { name: "Vivian Naliaka", role: "Backend Systems & Data Analytics", edu: "BSc Computer Science", note: "The engine room behind our platforms.", award: "Second Degree · Tech" },
  { name: "David Muigai", role: "Full Stack & Android Developer", edu: "BSc Electrical Engineering", note: "Full support for every customer.", award: "Second Degree · Tech" },
  { name: "Godwin Mutembei", role: "Marketing", edu: "Bachelor of Journalism & Mass Media", note: "Telling our story with clarity.", award: "Second Degree · Marketing" },
  { name: "Edwin Mwangi", role: "Media & Marketing", edu: "Media & Marketing", note: "Every frame, every campaign.", award: "Second Degree · Marketing" },
];

export const hosting = [
  { name: "Shared", price: "$5", per: "/mo", line: "For your first site.", points: ["Free SSL", "Daily backups", "Email accounts"] },
  { name: "Business", price: "$15", per: "/mo", line: "For growing traffic.", points: ["More power & storage", "Staging site", "Priority support"], featured: true },
  { name: "Scale", price: "Custom", per: "", line: "Grows as you grow.", points: ["Auto-scaling", "Never goes down in a spike", "We notify you after"] },
];

export const process = [
  { k: "01", title: "Listen", body: "We learn your business, your customers and what success looks like." },
  { k: "02", title: "Design", body: "Screens and flows you can click through before a line of code." },
  { k: "03", title: "Build", body: "Weekly releases you can test, with no surprises at the end." },
  { k: "04", title: "Grow", body: "Launch, measure and keep improving with ongoing support." },
];

export const EMAIL = "hello@dravtech.online";
