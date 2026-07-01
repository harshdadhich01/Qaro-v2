export type Service = {
  slug: string;
  name: string;
  short: string;
  eyebrow: string;
  headline: string;
  description: string;
  deliverables: string[];
  outcome: string;
};

export type Industry = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  challenges: string[];
  system: string[];
};

export const services: Service[] = [
  {
    slug: "growth-strategy",
    name: "Growth Strategy",
    short: "Find the highest-leverage moves before spending another rupee.",
    eyebrow: "Direction before execution",
    headline: "A Plan Built for Your Business. Not Borrowed From Someone Else's.",
    description: "QARO audits your market, funnel and operations to build a prioritised growth roadmap with clear owners, numbers and next actions.",
    deliverables: ["Growth and funnel audit", "Competitor and demand map", "90-day priority roadmap", "Measurement framework"],
    outcome: "A focused plan your team can actually execute."
  },
  {
    slug: "branding",
    name: "Branding",
    short: "A distinctive identity that earns attention and trust.",
    eyebrow: "Make the right impression",
    headline: "Your Brand Is What People Say About You When You're Not in the Room.",
    description: "We turn strategy into a coherent identity, voice and visual system that works from the first social post to the final sales conversation.",
    deliverables: ["Positioning and messaging", "Visual identity system", "Brand voice", "Practical usage guidelines"],
    outcome: "A brand customers recognise, remember and recommend."
  },
  {
    slug: "website",
    name: "Website Design & Development",
    short: "Fast, accessible websites engineered to rank and convert.",
    eyebrow: "Your hardest-working sales asset",
    headline: "A Website That Works While You Sleep.",
    description: "QARO designs and builds mobile-first websites that explain your value quickly, load fast and turn qualified visitors into real enquiries.",
    deliverables: ["Conversion-led UX", "Responsive development", "Technical SEO", "Analytics and lead tracking"],
    outcome: "A site that compounds trust, traffic and leads."
  },
  {
    slug: "ui-ux",
    name: "UI / UX Design",
    short: "Useful product experiences with less friction and drop-off.",
    eyebrow: "Clarity in every interaction",
    headline: "Good Design Isn't How It Looks. It's How It Performs.",
    description: "We research, structure and design apps, dashboards and digital products around the decisions real people need to make.",
    deliverables: ["User flows and architecture", "Wireframes and prototypes", "High-fidelity UI", "Design systems"],
    outcome: "Products that feel obvious in the best possible way."
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    short: "Campaigns tied to pipeline, revenue and learning.",
    eyebrow: "Spend with evidence",
    headline: "Ads That Pay For Themselves - And Then Some.",
    description: "We connect sharp creative, precise targeting and conversion tracking across Google and Meta to improve qualified acquisition.",
    deliverables: ["Campaign strategy", "Creative and landing pages", "Google and Meta Ads", "Weekly optimisation"],
    outcome: "Lower acquisition waste and a healthier return on spend."
  },
  {
    slug: "seo",
    name: "SEO",
    short: "Build durable visibility for searches that create business.",
    eyebrow: "Compound organic demand",
    headline: "Rank on Google for the Searches That Matter.",
    description: "Technical SEO, local SEO for Kota, content architecture and authority building - integrated into one measurable search programme.",
    deliverables: ["Technical and content audit", "Local SEO and Google Maps", "Keyword-led content plan", "Reporting and iteration"],
    outcome: "More qualified discovery without paying for every click."
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    short: "Connect repetitive work into reliable, intelligent workflows.",
    eyebrow: "Operate with leverage",
    headline: "Stop Doing Manually What a Machine Can Do Better.",
    description: "QARO automates lead qualification, WhatsApp follow-up, internal handoffs and reporting while keeping people in control.",
    deliverables: ["Workflow opportunity audit", "AI assistants and chatbots", "WhatsApp and CRM automation", "Monitoring and handover"],
    outcome: "Faster response times and more time for valuable work."
  },
  {
    slug: "analytics",
    name: "Analytics & Optimisation",
    short: "A clean view of what works, what leaks and what to do next.",
    eyebrow: "Turn activity into evidence",
    headline: "If You Can't Measure It, You Can't Grow It.",
    description: "We make your customer journey measurable with dependable tracking, decision-ready dashboards and recurring growth reviews.",
    deliverables: ["GA4 and event tracking", "Attribution setup", "Live performance dashboards", "Conversion experiments"],
    outcome: "Decisions based on signal, not opinion."
  }
];

export const industries: Industry[] = [
  {
    slug: "hotels",
    name: "Hotels & Hospitality",
    headline: "More Direct Bookings. Less OTA Commission.",
    description: "QARO helps hotels and guesthouses in Kota increase direct bookings with stronger websites, local discovery, targeted campaigns and guest automation.",
    challenges: ["OTAs own the customer relationship", "The website looks dated or converts poorly", "Google Maps visibility is inconsistent"],
    system: ["Direct-booking website", "Local SEO and Maps", "Performance campaigns", "WhatsApp guest journeys"]
  },
  {
    slug: "healthcare",
    name: "Hospitals & Clinics",
    headline: "More Patients. More Trust. More Appointments.",
    description: "We help healthcare teams in Kota build patient trust, rank for local intent and make appointments easier to discover and book.",
    challenges: ["Patients cannot find the right service", "The digital presence does not communicate trust", "Front desks lose time to repetitive queries"],
    system: ["Trust-led website", "Local healthcare SEO", "Appointment funnels", "Patient communication automation"]
  },
  {
    slug: "education",
    name: "Educational Institutions",
    headline: "Fill Your Batches. Without Depending on Walk-Ins.",
    description: "QARO gives coaching institutes, schools and colleges a measurable admission engine across search, content, campaigns and lead follow-up.",
    challenges: ["Lead quality falls during peak season", "Enquiries go cold before counsellors respond", "Campaign performance is hard to attribute"],
    system: ["Admission landing journeys", "Search and social acquisition", "Lead qualification", "Counsellor dashboards"]
  },
  {
    slug: "restaurants",
    name: "Restaurants & F&B",
    headline: "More Tables Filled. More Customers Coming Back.",
    description: "We help restaurants in Kota improve local discovery, turn attention into reservations and bring guests back through simple retention systems.",
    challenges: ["Discovery depends on aggregator apps", "Great content does not become bookings", "Repeat visits are not systematically encouraged"],
    system: ["Maps and local discovery", "Campaign-ready content", "Reservation automation", "Retention and loyalty flows"]
  },
  {
    slug: "startups",
    name: "Startups & Enterprises",
    headline: "Build Fast. Grow Smart. Don't Waste the Runway.",
    description: "QARO helps early-stage teams turn an idea into a credible brand, useful product and measurable acquisition system without unnecessary overhead.",
    challenges: ["The value proposition is still fuzzy", "Product and marketing move in different directions", "Every experiment feels expensive"],
    system: ["Positioning sprint", "Product and website design", "Lean acquisition tests", "Scalable automation"]
  }
];

export const caseStudies = [
  { slug: "kota-guesthouse-direct-bookings", industry: "Hotels & Hospitality", metric: "+68%", period: "in 60 days", headline: "How a Kota Guesthouse Increased Direct Bookings by 68% in 60 Days", challenge: "High OTA dependency and a website that generated almost no direct demand.", work: "QARO rebuilt the booking journey, repaired local search visibility and launched intent-led campaigns.", result: "Direct bookings increased 68% while OTA dependency fell 30%." },
  { slug: "kota-clinic-patient-inquiries", industry: "Healthcare", metric: "3.8x", period: "qualified enquiries", headline: "From 8 to 31 Monthly Patient Enquiries for a Kota Clinic", challenge: "Strong clinical reputation but limited discoverability outside referrals.", work: "We clarified service pages, improved Maps visibility and built an appointment-focused search campaign.", result: "Qualified monthly enquiries grew from 8 to 31 in one quarter." },
  { slug: "kota-coaching-batches-filled-early", industry: "Education", metric: "3 weeks", period: "ahead of plan", headline: "How a Kota Coaching Institute Filled Batches Three Weeks Early", challenge: "Rising lead costs and inconsistent counsellor follow-up during admission season.", work: "QARO redesigned the enquiry funnel, campaign structure and automated lead routing.", result: "Target batches filled three weeks early with a 27% lower cost per qualified lead." }
];

export const insights = [
  { slug: "google-ads-vs-meta-ads-kota-business", category: "Performance", title: "Google Ads vs Meta Ads: Which One Should a Kota Business Run First?", summary: "Choose Google when demand already exists. Choose Meta when you need to create attention - then measure both against qualified revenue.", date: "2026-06-01" },
  { slug: "local-seo-checklist-kota", category: "Search", title: "A Practical Local SEO Checklist for Kota Businesses", summary: "A focused system for improving Maps visibility, service relevance, reviews and local landing pages.", date: "2026-06-12" },
  { slug: "what-to-automate-first", category: "Automation", title: "What Should a Growing Business Automate First?", summary: "Start where repetition, delay and lost context overlap: lead response, qualification and handoffs.", date: "2026-06-24" }
];

export const stats = [
  { value: "50+", label: "businesses supported" },
  { value: "120+", label: "growth projects delivered" },
  { value: "4.6x", label: "average campaign ROI" },
  { value: "08", label: "connected capabilities" }
];

export function getService(slug: string) { return services.find((item) => item.slug === slug); }
export function getIndustry(slug: string) { return industries.find((item) => item.slug === slug); }
