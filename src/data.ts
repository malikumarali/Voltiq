import { BlogPost, ServiceDetail, Niche, Testimonial, FAQItem } from "./types";

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "web-dev",
    name: "Web Design & Development",
    tagline: "Your website is your best salesperson — it needs to work 24/7.",
    painPoint: "90% of business websites are glorified brochures that leak leads. We engineer digital assets built to capture and convert attention.",
    benefits: [
      "Sites engineered to convert, not just look good",
      "Mobile-first, lightning-fast, built for growth",
      "Custom-coded or CMS-based — we match your stack"
    ],
    features: [
      { title: "Conversion Architecture", desc: "Every button placement, headline, and form field is mathematically positioned to optimize lead capture rates." },
      { title: "Lightning-Fast Performance", desc: "Clean, minified code ensuring sub-2-second loading times to dominate search engine performance and prevent visitor dropoffs." },
      { title: "Responsive Fluidity", desc: "Pixel-perfect scaling across ultra-wide monitors, standard laptops, tablets, and mobile screens." }
    ],
    iconName: "Code"
  },
  {
    id: "seo",
    name: "Digital Marketing & SEO",
    tagline: "Rank where your clients are searching. Own the results page.",
    painPoint: "If you are not on page one of Google, you do not exist to your ideal buyers. We put you directly in their path when search intent is at its peak.",
    benefits: [
      "Data-driven keyword strategy across local and national",
      "On-page + technical SEO built into every project",
      "Transparent reporting — you see exactly what's moving"
    ],
    features: [
      { title: "Precision Keyword Targeting", desc: "No vanity metrics. We target commercial-intent and transactional search terms that directly impact sales pipeline." },
      { title: "Technical Domination", desc: "Search engines reward fast, crawlable websites. We audit and rebuild site indexes, schema marks, and internal linking structures." },
      { title: "Ethical Backlink Acquisition", desc: "Relentless digital outreach to secure authoritative mentions and editorial links that establish domain dominance." }
    ],
    iconName: "Search"
  },
  {
    id: "social",
    name: "Social Media Management",
    tagline: "Content with voltage. Communities that actually grow.",
    painPoint: "A dead social feed signals a dead business. We design high-voltage content schedules that build real brand authority and customer relationships.",
    benefits: [
      "Custom content calendars built around your audience",
      "Daily monitoring, community management, engagement",
      "Performance analytics and monthly growth reports"
    ],
    features: [
      { title: "Charged Creative Assets", desc: "Thumb-stopping graphics, custom copy with direct messaging, and interactive video stories designed to spark engagement." },
      { title: "Proactive Community Engagement", desc: "We don't just post and ghost. We engage with potential clients and respond to comments to keep your community active." },
      { title: "Intelligent Sentiment Analytics", desc: "Track conversions, reach velocity, and audience sentiment shifts with simple monthly dashboards." }
    ],
    iconName: "MessageSquare"
  },
  {
    id: "ads",
    name: "Paid Ads (Google & Meta)",
    tagline: "Precision targeting. Zero wasted budget. Maximum ROI.",
    painPoint: "Most agencies burn through ad budgets on broad audiences and weak copy. We build hyper-targeted, high-efficiency client acquisition systems.",
    benefits: [
      "Campaign architecture built for your exact goals",
      "A/B tested creatives, landing pages, and copy",
      "Weekly optimization — no set-it-and-forget-it here"
    ],
    features: [
      { title: "Full Funnel Ad Architecture", desc: "Prospecting, warming, and high-impact retargeting sequences working in absolute alignment." },
      { title: "Aggressive A/B Testing", desc: "We test multiple variations of hook copy, graphics, and landing pages to relentlessly scale winning assets." },
      { title: "ROAS-First Optimization", desc: "We actively shift capital into high-performing placements to squeeze maximum return on every ad dollar spent." }
    ],
    iconName: "Megaphone"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    quote: "Voltiq completely transformed our Google Ads performance. Within 60 days our cost per lead dropped by 40% and bookings doubled. They deliver high-voltage results with zero fluff.",
    clientName: "Ahmed R.",
    role: "Clinic Owner",
    company: "Confidential",
    benefitType: "grow",
    serviceUsed: "Paid Ads (Google & Meta)"
  },
  {
    id: "test-2",
    quote: "The SEO results were unbelievable. We went from page 4 to the top 3 results for our primary transactional keywords in under 3 months. Now, organic leads flow continuously.",
    clientName: "Sarah M.",
    role: "E-Commerce Director",
    company: "Confidential",
    benefitType: "grow",
    serviceUsed: "Digital Marketing & SEO"
  },
  {
    id: "test-3",
    quote: "Professional, fast, and completely transparent. Voltiq feels less like an agency and more like an in-house partner. They managed our entire web redesign and tripled our conversions.",
    clientName: "Usman K.",
    role: "Lead Developer",
    company: "Confidential",
    benefitType: "retain",
    serviceUsed: "Web Design & Development"
  },
  {
    id: "test-4",
    quote: "We've worked with three agencies before. Voltiq is the only one that focuses on real financial metrics instead of vanity clicks. Our revenue has grown 180% since partner launch.",
    clientName: "Elena V.",
    role: "Co-Founder",
    company: "Confidential",
    benefitType: "retain",
    serviceUsed: "Paid Ads & SEO"
  },
  {
    id: "test-5",
    quote: "Our social community grew from zero to over 40k engaged prospects in 6 months. More importantly, those followers are active buyers of our high-ticket culinary packages.",
    clientName: "Hamza S.",
    role: "Managing Partner",
    company: "Confidential",
    benefitType: "grow",
    serviceUsed: "Social Media Management"
  }
];

export const NICHES_DATA: Niche[] = [
  {
    name: "E-Commerce",
    projects: "20+",
    iconName: "ShoppingBag",
    description: "Laser-focused direct response ads, landing pages, and email flows engineered to scale average order value and lifetime customer return."
  },
  {
    name: "Real Estate",
    projects: "15+",
    iconName: "Building2",
    description: "High-intent lead generation campaigns that put local property developments and luxury brokers in front of verified, qualified buyers."
  },
  {
    name: "Healthcare / Clinics",
    projects: "12+",
    iconName: "Stethoscope",
    description: "Compliant local SEO campaigns and Meta ads to capture patient search intent and consistently fill appointment calendars."
  },
  {
    name: "Restaurants & F&B",
    projects: "10+",
    iconName: "Utensils",
    description: "Visual social media sequences, geo-targeted Google promotions, and mobile-first menu platforms to boost weekend reservations."
  },
  {
    name: "Education",
    projects: "8+",
    iconName: "GraduationCap",
    description: "Student recruitment campaigns, program landing page setups, and automated email nurturing sequences for higher enrollment numbers."
  },
  {
    name: "Legal Services",
    projects: "10+",
    iconName: "Scale",
    description: "High-authority search engine domination and hyper-targeted Google Local Service Ads that put attorneys in front of clients in real-time."
  },
  {
    name: "Fashion & Retail",
    projects: "14+",
    iconName: "Shirt",
    description: "Immersive content campaigns, creator integrations, and dynamic remarketing ads that drive brand recall and cart checkouts."
  },
  {
    name: "Home Services",
    projects: "18+",
    iconName: "Wrench",
    description: "Local service search domination, high-converting lead forms, and instant call routing integrations for plumbing, HVAC, and roofing."
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: "blog-1",
    title: "Digital Marketing & AI Solutions: How to Dominate Your Market",
    excerpt: "Google and Meta want you to spend blindly. Learn why setting broad targeting rules is draining your digital pipeline and how to fix it in 20 minutes flat.",
    content: `If you are running paid advertisements, you are likely in a silent war with algorithmic ad networks whose primary goal is to drain your operating cash reserves.

### The Fatal Trap of Broad Matches
When you launch campaigns under the "Broad Match" configuration, you give the search network complete control over who lands on your site. For example, if you sell 'luxury leather goods', Google might show your ad to users searching for 'free vinyl repair patches'.

You are paying for clicks that have zero percentage chance of converting.

### How We Build Precision Paid Funnels At Voltiq:
1. **Aggressive Negative Keyword Silos**: We build custom negative keyword exclusions on day one to keep unqualified traffic far from your wallet.
2. **Exact Match Intent Clustering**: We only bid on transactional search words where buyers are actively holding a credit card.
3. **Dedicated Lander Direct Messaging**: Never direct paid ads to your homepage. Direct them to razor-sharp, single-message landers structured around the exact query they typed.

Stop letting ad networks guess your growth strategy. Dominate with precision targeting.`,
    category: "Paid Ads",
    date: "June 25, 2026",
    readTime: "4 min read",
    author: { name: "Zain Ali", role: "Paid Search Architect" },
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "blog-2",
    title: "The 3 Critical SEO Mistakes Killing Your Organic Search Pipeline",
    excerpt: "Search engines reward speed, structural crawlability, and absolute topical authority. If you are missing these three elements, your competitors own your organic audience.",
    content: `Organic traffic is the single most valuable asset a digital business can own. Unlike paid campaigns, organic leads keep flowing even if your advertising capital goes to zero.

Yet, 92% of business sites get exactly zero visitors from search engines.

### 1. Sluggish Page Speed Roads
If your page takes more than 3 seconds to render on a standard mobile browser, 53% of users bounce. Google actively demotes slow sites. Speed is no longer a technical metric; it is a critical marketing pillar.

### 2. Zero Internal Thematic Linking
Search engine crawlers understand your site through relationships. If your blogs and service pages operate as isolated islands, crawlers cannot index your topical authority. Build logical linking pyramids from your high-ticket offerings down to supporting educational assets.

### 3. Hollow, Word-Count Centered Content
Creating 500-word fluff blogs packed with keywords is dead. Modern search engines measure user search satisfaction. You must write deeply researched, authoritative pages that answer search intent completely.

At Voltiq, we run technical code cleanups and structured outbound SEO strategies to put your brand where it belongs: Page 1.`,
    category: "SEO & Content",
    date: "June 18, 2026",
    readTime: "5 min read",
    author: { name: "Sarah Khan", role: "SEO Director" },
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "blog-3",
    title: "Conversion Architecture: How to Rebuild Your Website Into an Active Leads Generator",
    excerpt: "Beautiful websites that don't sell are expensive digital toys. Discover how we design visual flows that compel visitors to take action.",
    content: `Let's be clear: nobody visits your business website to admire your company philosophy. They visit because they have a painful problem, and they want to see if you can resolve it.

If your layout forces them to dig for contact buttons or read massive walls of corporate jargon, they will click away.

### Simple Pillars of High-Conversion Design:
- **Bold Primary Proposition**: Your hero section must answer three questions in 4 seconds: What do you do? How does it help me? What do I do next?
- **Frictionless Touch Targets**: On mobile screens, call buttons and forms must be massive, easy to press, and require minimal typing fields.
- **Immediate Proof Anchors**: Put reviews, client trust badges, or metric highlights directly above the fold, not buried in the footer.

Your website is either an overhead cost or an active sales asset. We build them to be sales assets.`,
    category: "Web Design",
    date: "May 29, 2026",
    readTime: "6 min read",
    author: { name: "Haris Jamil", role: "Conversion UX Lead" },
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "How complex is it to integrate AI automation into my existing digital marketing setup?",
    answer: "It's highly seamless. We handle 100% of the heavy lifting. We audit your existing stack, design custom API connections, and deploy trained automations within 14–21 days without disrupting your live workflows."
  },
  {
    question: "Will AI automation make my marketing feel less personal?",
    answer: "Exactly the opposite. By automating repetitive operations, we free up your resources to focus on deeper, hyper-targeted human personalization. Furthermore, our AI models are trained on your unique brand voice to draft rich, highly authentic content assets."
  },
  {
    question: "How long does it take to hear back after applying?",
    answer: "We review all technical portfolio proposals within 48 hours. If there's a strong alignment, we'll reach out immediately to schedule an initial 15-minute alignment call."
  },
  {
    question: "What are your work culture and professional community like?",
    answer: "We are a decentralized network of high-performance growth architects. We operate on extreme ownership, radical transparency, and zero corporate fluff. We don't track hours—we track commercial wins and pipeline scale."
  },
  {
    question: "How long before I see results?",
    answer: "Paid ads show traction within 2 weeks. SEO typically shows meaningful movement within 60–90 days. We set clear KPI timelines from day one, tracking conversion rate, cost per acquisition, and search rank."
  },
  {
    question: "Will I actually know what's happening with my campaigns?",
    answer: "100%. You get a live analytics dashboard, weekly slack updates, and a monthly deep-dive strategy call. No black boxes. You see exactly where every single dollar goes and what it returned."
  },
  {
    question: "Do you work with small budgets?",
    answer: "Yes. We build precision campaigns engineered to operate efficiently within your current budget scale, and then we expand the spend dynamically as your outbound sales and revenue grow."
  },
  {
    question: "What makes Voltiq different from other agencies?",
    answer: "We don't guess or sell vanity clicks. Every creative is tested, every landing page layout is built on direct conversion principles, and our team only scales campaigns backed by cash-flow performance metrics."
  },
  {
    question: "Do you tie us down with long-term contracts?",
    answer: "No. We operate on simple month-to-month commitments. We keep your business by delivering relentless growth, not by trapping you in legal contracts."
  }
];
