export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  outcomes: string[];
  imageAlt: string;
  photoSrc?: string;
  photoWidth?: number;
  photoHeight?: number;
  problem: string;
  insight: string;
  whatIDid: string;
  outcome: string;
};

// Placeholder case studies. Copy, images and real outcomes to be supplied later.
export const caseStudies: CaseStudy[] = [
  {
    slug: "case-study-one",
    title: "Scaling into a $1m+ SaaS Product",
    summary:
      "Led transformation of a free veterinary industry resource into a scalable SaaS generating more than $1M in ARR.",
    outcomes: [
      "$1m+ ARR",
      "60+ Enterprise Customers",
      "1000+ Users",
      "500k+ Datapoints",
    ],
    imageAlt: "Placeholder image for case study one",
    photoSrc: "/images/vet_practice_database.jpg",
    photoWidth: 1441,
    photoHeight: 879,
    problem: 
      "Antelligence’s Enterprise Practice Database began as a free report tracking U.S. veterinary ownership. It was well received, and customers quickly began asking for the underlying data — information that simply wasn’t available in a reliable form elsewhere. That created an opportunity to turn the research into a searchable product customers would pay for and use in their day-to-day work.",
    insight:
      "Talking with customers made it clear that the value wasn't simply in having a list of veterinary practices. They wanted to use the data to understand ownership, identify opportunities, segment the market, and make better commercial decisions. That shifted the opportunity from selling access to information into building a product around how customers actually wanted to use it.",
    whatIDid:
      "Placeholder description of the role played and the work done to move the project forward.",
    outcome:
      "The platform grew into a subscription product serving more than 60 enterprise customers and 1,000+ users, with over $1M in annual recurring revenue. Along the way, we increased automation, improved validated data accuracy to over 99%, and removed roughly 100 hours of manual work per month.",
  },
  {
    slug: "case-study-two",
    title: "Launching a new product",
    summary:
      "Led the creation and launch of a new product covering independent veterinary practices across the United States.",
    outcomes: [
      "~18,000 verified independent practices",
      "3× increase in U.S. practice coverage",
      "New $20K/year subscription product, or sold bundled with Enterprise product",
    ],
    imageAlt: "Placeholder image for case study two",
    photoSrc: "/images/enterprise_vs_independent.jpg",
    photoWidth: 1437,
    photoHeight: 880,
    problem: 
      "Antelligence had strong visibility into corporately owned veterinary practices, but a large part of the U.S. market was still missing: independent practices. Customers wanted a more complete view of the industry, but there was no reliable source we could simply buy or import. Building the product meant first figuring out what counted as an independent veterinary practice — and then finding and verifying thousands of them.",
    insight:
      "Before building anything, I helped establish the rules that would make the database useful and consistent. We defined which practices belonged in the product, how ownership should be verified, what information customers actually needed, and how uncertain or conflicting records should be handled. That meant drawing clear boundaries around things like mobile practices, shelters, vaccine clinics, specialty hospitals, closed locations, and practices with unclear ownership.",
    whatIDid:
      "Placeholder description of the role played and the work done to move the project forward.",
    outcome:
      "The platform grew into a subscription product serving more than 60 enterprise customers and 1,000+ users, with over $1M in annual recurring revenue.",
  },
  {
    slug: "case-study-three",
    title: "Turning demand into features",
    summary:
      "Translated customer problem into a new product capability that became key reason for purchase or renewal",
    outcomes: [
      "New customer-driven product capability",
      "Complex data translated into usable insights",
      "60% of interviewed customers cited it as a purchase or renewal driver",
    ],
    imageAlt: "Placeholder image for case study three",
    photoSrc: "/images/staffing_insights_fixed.jpg",
    photoWidth: 1442,
    photoHeight: 880,
    problem: 
      "Customers wanted a better way to understand the size of veterinary practices, but the available data was messy. Veterinarians often worked across multiple locations, staffing information was inconsistent, and simply counting names could make a small practice look much larger than it really was.",
    insight:
      "The underlying need wasn't just 'show me how many vets work here.' Customers wanted a practical way to compare practices, identify larger opportunities, and understand the market at a glance. That meant the feature had to simplify a messy data problem into something commercially useful.",
    whatIDid:
      "Placeholder description of the role played and the work done to move the project forward.",
    outcome:
      "The feature gave customers a new way to segment practices by estimated staffing and size, helping them identify and prioritize opportunities more effectively. In follow-up interviews, 60% of customers we spoke with said the capability was a key reason to purchase or renew.",
  },
];
