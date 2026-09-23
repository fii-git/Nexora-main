import {
  ServiceItem,
  FeatureItem,
  PricingPlan,
  ProjectItem,
  TestimonialItem,
  BlogPost,
} from "./types";

export const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICE", href: "#services" },
  { label: "PAGES", href: "#why-us" },
  { label: "PRICING", href: "#pricing" },
  { label: "PROJECTS", href: "#projects" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
];

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Web Developer",
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    iconName: "Laptop",
    highlighted: false,
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    iconName: "Instagram",
    highlighted: true,
  },
  {
    id: "content-writer",
    title: "Content Writer",
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    iconName: "PenLine",
    highlighted: false,
  },
  {
    id: "seo-management",
    title: "SEO Management",
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    iconName: "Search",
    highlighted: false,
  },
];

export const whyChooseUsFeatures: FeatureItem[] = [
  {
    title: "Experienced",
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    iconName: "Globe",
  },
  {
    title: "Affordable Price For",
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    iconName: "Wallet",
  },
  {
    title: "Professional Team",
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    iconName: "Users",
  },
  {
    title: "Guaranteed",
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    iconName: "ShieldCheck",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Ideal for individuals who need quick access to basic features.",
    price: 0,
    period: "Month",
    highlighted: false,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: false },
      { text: "Unlimited Sharing", included: false },
      { text: "Upload graphics & video in up to 4k", included: false },
      { text: "Unlimited Projects", included: false },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    id: "elite",
    name: "Elite",
    tagline:
      "Ideal for individuals who need advanced features and team growth.",
    price: 25,
    period: "Month",
    highlighted: false,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    id: "advanced",
    name: "Advanced",
    tagline:
      "Ideal for businesses who need personalized support and enterprise scale.",
    price: 100,
    period: "Month",
    highlighted: false,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: true },
      { text: "Create teams to collaborate on designs", included: true },
    ],
  },
];

export const projectItems: ProjectItem[] = [
  {
    id: "p1",
    title: "Web Design",
    category: "Digital Product",
    description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    // Code editor / IDE screen matching image
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "p2",
    title: "Mobile App Banking",
    category: "Mobile UX/UI",
    description: "Next-gen fintech banking mobile application UI design.",
    // Hand holding smartphone with app UI
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "p3",
    title: "Creative Agency Brand",
    category: "Brand Identity",
    description:
      "Designer crafting innovative brand systems and digital interactions.",
    // Designer at work with laptop and desk
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "p4",
    title: "Team Strategy Session",
    category: "Strategy & Growth",
    description: "Collaborative workshop driving enterprise strategy forward.",
    // Team meeting around conference table
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t1",
    name: "Jenny Wilson",
    role: "Product Lead",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "t2",
    name: "Adam",
    role: "Marketing Director",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "t3",
    name: "Ethan",
    role: "Startup Founder",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "t4",
    name: "Noah",
    role: "Creative Director",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "t5",
    name: "Liam",
    role: "Tech Lead",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const blogPostsData: BlogPost[] = [
  {
    id: "b1",
    title: "E-commerce Sales Surge to Record High Amid Digital Tra...",
    excerpt:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididun...",
    content:
      "The global digital marketplace is experiencing rapid transformation. Consumers demand seamless multi-channel checkout experiences, instant delivery tracking, and bespoke personalization driven by AI algorithms. Learn how leading brands optimize their funnel.",
    date: "Sep 18, 2026",
    category: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0a67e557224c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "b2",
    title: "Tech Giants Battle for Dominance in the Digital Adv...",
    excerpt:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididun...",
    content:
      "Advertising ecosystems continue shifting towards privacy-first attribution and conversational marketing. Discover the latest strategies implemented by market leaders to capture user mindshare without compromising customer trust.",
    date: "Sep 15, 2026",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "b3",
    title: "Digital Payments Revolutionize the Business Landscape",
    excerpt:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididun...",
    content:
      "Cross-border digital settlement networks and instant payment gateways are empowering businesses of all sizes to trade frictionlessly across continents. Explore the security protocols and architecture shaping tomorrow.",
    date: "Sep 12, 2026",
    category: "Fintech",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
  },
];
