/**
 * All page content, transcribed from the HAS Traders company profile deck.
 * Edit here — the pages read from these exports and add no copy of their own.
 */

export const ABOUT = {
  intro:
    "Established in 2024, HAS Traders supports public and private-sector clients with integrated supply, events, marketing, technology and business services.",
  approach:
    "We combine a customer-first approach with disciplined project delivery, helping clients move from requirement to execution through one accountable partner.",
  focus: "Our focus: quality, responsiveness and long-term value.",
  vision:
    "To be a leading multi-service solutions provider, recognized for excellence, innovation and reliability.",
  mission:
    "To deliver tailored supply, event, marketing and consultancy solutions through professionalism, integrity and strong client partnerships.",
} as const;

/** Fleet size quoted by MYSTIC, our transport partner. Stated once, used twice. */
export const FLEET_SIZE = "1,000+";

export const VALUES = [
  { name: "Integrity", detail: "Honest, transparent and ethical delivery" },
  {
    name: "Excellence",
    detail: "High standards in every product and service",
  },
  {
    name: "Customer focus",
    detail: "Client success remains our measure of success",
  },
  { name: "Innovation", detail: "Practical, forward-looking solutions" },
  { name: "Reliability", detail: "On time, on budget and accountable" },
] as const;

export const CERTIFICATES = [
  {
    src: "/img/cert-incorporation.webp",
    title: "Certificate of Incorporation",
    issuer: "Securities and Exchange Commission of Pakistan",
    detail:
      "HAS Traders (SMC-Private) Limited, incorporated under the Companies Act 2017. Corporate Unique Identification No. 0250240.",
  },
  {
    src: "/img/cert-iso-9001.webp",
    title: "ISO 9001:2015 — Quality Management Systems",
    issuer: "G-CERTI, accredited by IAS / IAF",
    detail:
      "Held by DESI HATTI, our catering and events partner, covering food processing, packaging and food catering services.",
  },
] as const;

/** Client organisations shown on the profile's partner wall. */
export const CLIENTS = [
  "World Health Organization",
  "World Food Programme",
  "UNICEF",
  "British Council",
  "HIVE Pakistan",
  "Aab-e-Pak Authority",
  "Ravi Urban Development Authority",
  "Collaborative Heavy Industries",
  "Pakistan Army Aviation",
  "Telecom Operators' Association",
  "Easypaisa",
  "Zong 5G",
  "Jazz 5G",
  "Sapphire Textile Mills",
  "Nestlé",
  "Engro Pakistan (FrieslandCampina)",
  "Treet Corporation",
  "GE & Gas Appliances",
  "Nishat Hyundai",
  "Osaka Batteries",
  "Barrick",
  "HUBCO",
  "SECMC",
] as const;

/** The sector ledger — who we serve, what we deliver, what came of it. */
export const SECTORS = [
  {
    sector: "International organizations",
    clients: ["WHO", "WFP", "UNICEF", "British Council"],
    delivered: [
      "Medical and humanitarian logistics",
      "Staff transportation services",
      "Design and printing of manuals, booklets, giveaways and event backdrops",
    ],
    outcome: [
      "Secure, timely delivery to designated operational areas",
      "Delivery of learning materials and event collateral in accordance with branding requirements",
    ],
  },
  {
    sector: "Public infrastructure",
    clients: ["Aab-e-Pak Authority", "RUDA", "Collaborative Heavy Industries"],
    delivered: [
      "Fleet management and site logistics",
      "Government of Punjab vehicles vinyl branding",
    ],
    outcome: [
      "Movements coordinated with project and site schedules",
      "Durable vehicle branding successfully deployed for a public-sector fleet",
    ],
  },
  {
    sector: "Industry, energy, automotive & aviation",
    clients: [
      "GE & Gas Appliances",
      "Barrick",
      "HUBCO",
      "Nishat Hyundai",
      "Pakistan Army Aviation",
    ],
    delivered: [
      "International aviation lubricants procurement",
      "Industrial equipment transportation",
      "Design and printing of leaflets, vehicle manuals and promotional booklets",
    ],
    outcome: [
      "Safe, continuous logistics support to field sites and operational bases",
      "Production of customer-facing materials aligned with corporate brand standards",
    ],
  },
  {
    sector: "Fast-moving consumer goods",
    clients: ["Engro Pakistan", "Nestlé", "Treet Corporation"],
    delivered: [
      "Product logistics and supply-chain coordination",
      "Design and printing of shop danglers, brochures, flyers and stickers",
    ],
    outcome: [
      "Supply chain management as per international standards",
      "End-to-end production of retail visibility and point-of-sale materials",
    ],
  },
  {
    sector: "Technology & telecommunication",
    clients: ["Easypaisa", "Zong", "Jazz 5G", "Sapphire"],
    delivered: [
      "Fintech Mini App development",
      "Event management, activations and nationwide workforce training",
      "Sourcing and production of customized corporate giveaways",
    ],
    outcome: [
      "Scalable digital support and consistent multi-city program delivery",
      "Branded merchandise supporting corporate engagement and promotional activities",
    ],
  },
  {
    sector: "Relief & community engagement",
    clients: ["HIVE Pakistan"],
    delivered: [
      "Flood-relief logistics, meal boxes and ration distribution",
      "Community events",
    ],
    outcome: [
      "Relief and inclusion programmes delivered across Punjab, KPK and four major cities of Pakistan",
    ],
  },
] as const;

export const SERVICES = [
  {
    slug: "supply",
    name: "Supply & general order",
    summary:
      "Procurement and movement of goods for institutional, industrial and development-sector programmes.",
    partner: null,
    capabilities: [
      "Medical and humanitarian logistics to designated operational areas",
      "Industrial equipment transportation and site logistics",
      "International aviation lubricants procurement",
      "Product logistics and supply-chain coordination for consumer brands",
      "Fleet management for public-sector projects",
    ],
  },
  {
    slug: "transport",
    name: "Transportation & mobility",
    summary:
      "Built around safety. Nationwide accessibility, verified fleet safety and streamlined corporate transport management.",
    partner: "MYSTIC",
    capabilities: [
      "24/7 corporate access: nationwide reservations, central billing and credit facilities, with operational presence in Islamabad, Lahore, Karachi and Multan",
      "HSE-compliant fleet: 1,000+ comprehensively insured, GPS-tracked vehicles equipped with first-aid kits and fire extinguishers",
      "Professional chauffeurs: uniformed, medically screened and trained in defensive driving, with English-speaking support available",
      "Flexible mobility: self-drive and chauffeur-driven solutions for employees, event participants and project teams",
    ],
  },
  {
    slug: "catering-events",
    name: "Catering, events & community engagement",
    summary:
      "Catering, event management and community engagement delivered across Pakistan.",
    partner: "DESI HATTI",
    capabilities: [
      "ISO-certified catering for trainings, conferences, employee events, vendor engagements and multi-location programmes",
      "Event management for corporate, institutional and community initiatives, including logistics, venue coordination, on-site operations, branding and participant management",
      "Nationwide execution across multiple districts with consistent quality, safety and dependable service delivery",
    ],
  },
  {
    slug: "design-print",
    name: "Creative design, print management & branding",
    summary:
      "In-house creative design, print management, digital printing and branding production for public, private and development-sector clients.",
    partner: "INKSTER",
    capabilities: [
      "Creative design and artwork development for corporate communications, training materials, branding campaigns and promotional collateral",
      "End-to-end print management including offset, digital and large-format printing, with quality assurance and production oversight",
      "Design and production of publications including manuals, brochures, catalogues, certificates, flyers and stickers",
      "Corporate branding solutions including vehicle and fleet branding, dealership branding, shop branding, vinyl graphics, backdrops and signage",
      "Corporate giveaways and promotional merchandise, including customized packaging and branded marketing materials",
      "Nationwide production, installation and delivery of printed and branded materials",
    ],
  },
  {
    slug: "technology",
    name: "Technology & business services",
    summary:
      "Digital products and programme support for telecom, fintech and development-sector clients.",
    partner: null,
    capabilities: [
      "Fintech Mini App development",
      "Nationwide workforce training programmes",
      "Event activations and multi-city programme delivery",
      "Business consultancy across supply, marketing and operations",
    ],
  },
] as const;

export const PROJECTS = [
  {
    title: "Telecom Operators Association launch",
    client: "Telecom Operators' Association",
    image: "/img/projects/telecom-operators-association-launch.webp",
  },
  {
    title: "Sports event",
    client: "Zong",
    image: "/img/projects/sports-event-zong.webp",
  },
  {
    title: "Employee town hall",
    client: "Jazz",
    image: "/img/projects/employee-town-hall-jazz.webp",
  },
  {
    title: "Flood relief",
    client: "Zong",
    image: "/img/projects/flood-relief-zong.webp",
  },
  {
    title: "Community training",
    client: "HIVE",
    image: "/img/projects/community-training-hive.webp",
  },
  {
    title: "Chinese employee training",
    client: "Zong",
    image: "/img/projects/chinese-employee-training-zong.webp",
  },
  {
    title: "Roadshow",
    client: "Osaka Batteries",
    image: "/img/projects/roadshow-osaka-batteries.webp",
  },
  {
    title: "Leadership training",
    client: "Zong",
    image: "/img/projects/leadership-training-zong.webp",
  },
  {
    title: "Youth training",
    client: "HIVE",
    image: "/img/projects/youth-training-hive.webp",
  },
] as const;

export const FOOTPRINT = [
  {
    region: "Punjab",
    cities: [
      "Attock",
      "Rawalpindi",
      "Wah Cantonment",
      "Taxila",
      "Sialkot",
      "Mianwali",
      "Gujranwala",
      "Narowal",
      "Sargodha",
      "Sheikhupura",
      "Chiniot",
      "Faisalabad",
      "Lahore",
      "Khanpur",
      "Kasur",
      "Kot Addu",
      "Lodhran",
      "Muzaffargarh",
      "Multan",
      "Bahawalpur",
      "Rajanpur",
    ],
  },
  {
    region: "Khyber Pakhtunkhwa",
    cities: [
      "Mingora",
      "Mardan",
      "Charsadda",
      "Peshawar",
      "Akora Khattak",
      "Bahrain",
      "Kohat",
      "Kabal",
    ],
  },
  {
    region: "Sindh",
    cities: ["Larkana", "Sukkur", "Hyderabad", "Karachi"],
  },
  { region: "Balochistan", cities: ["Quetta"] },
  {
    region: "Azad Kashmir",
    cities: ["Rawalakot", "Muzaffarabad", "Kotli", "Mirpur"],
  },
  { region: "Gilgit Baltistan", cities: ["Gilgit", "Skardu"] },
] as const;

export const LEADERSHIP = {
  headline: "Leadership built for multidisciplinary delivery",
  people: [
    {
      name: "Shakeel Ahsan",
      role: "CEO",
      image: "/img/leadership/shakeel-ahsan.webp",
    },
    {
      name: "Khaavar Tehseen",
      role: "P.D Logistics",
      image: "/img/leadership/khaavar-tehseen.webp",
    },
    {
      name: "Sarosh Raja",
      role: "P.D Events & Technology",
      image: "/img/leadership/sarosh-raja.webp",
    },
    {
      name: "Verdah Sheikh",
      role: "P.D Marketing",
      image: "/img/leadership/verdah-sheikh.webp",
    },
  ],
  narrative: [
    "Led by CEO Sheikh Shakeel Ahsan, HAS Traders brings extensive leadership experience across telecommunications, delivery start-ups, FinTech and real estate.",
    "Supported by a multidisciplinary team with practical expertise in general order supplies, event management, marketing, technology and business consultancy, the company combines strategic insight with operational excellence to deliver tailored, high-quality solutions efficiently, professionally and with measurable results.",
  ],
} as const;
