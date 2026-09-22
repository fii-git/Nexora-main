export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlighted?: boolean;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  period: string;
  highlighted?: boolean;
  features: {
    text: string;
    included: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role?: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
}
