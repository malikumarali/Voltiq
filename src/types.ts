export type View =
  | "home"
  | "about"
  | "services"
  | "service-web"
  | "service-seo"
  | "service-social"
  | "service-ads"
  | "blog"
  | "blog-post"
  | "contact"
  | "careers";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  imageUrl: string;
}

export interface ServiceDetail {
  id: string;
  name: string;
  tagline: string;
  description?: string;
  painPoint: string;
  benefits: string[];
  features: { title: string; desc: string }[];
  iconName: string;
}

export interface Niche {
  name: string;
  projects: string;
  iconName: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  benefitType: "grow" | "retain";
  serviceUsed: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
