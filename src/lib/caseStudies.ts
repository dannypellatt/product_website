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
  whatIDid: {
    summary: string;
    bullets: string[];
  };
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
    whatIDid: {
      summary:
        "I helped lead the product from an early spreadsheet into a more mature SaaS database platform.",
      bullets: [
        "Defining and prioritizing features using customer feedback",
        "Shaping the roadmap and introducing prioritization frameworks",
        "Redesigning the underlying data architecture",
        "Moving key workflows away from spreadsheet-based systems",
        "Improving search, data quality, and release processes",
        "Working directly with customers during demos and onboarding",
        "Turning recurring customer requests into product capabilities",
        "Keeping meticulous documentation ready for eventual sale",
      ],
    },
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
    whatIDid: {
      summary:
        "I led the product from initial concept through launch, working across product definition, data, research, and technical implementation. My work included:",
      bullets: [
        "Defining the scope and inclusion criteria",
        "Designing the research and verification workflow",
        "Establishing quality and status standards",
        "Identifying and evaluating potential data sources",
        "Designing the structure of the underlying dataset",
        "Building automated checks to reduce manual research",
        "Creating processes for deduplication and verification",
        "Planning ongoing updates using key goal schedules",
      ],
    },
    outcome:
      "We launched a new subscription product covering roughly 15,000 verified independent veterinary practices, tripling Antelligence’s coverage of the U.S. veterinary market. The product opened up a previously uncovered segment for customers and created a new $20K/year subscription offering.",
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
    whatIDid: {
      summary:
        "I helped define the product approach and translate the customer need into something the engineering and data teams could work with. My role included:",
      bullets: [
        "Gathering feedback from customers and prospects",
        "Clarifying the underlying use case",
        "Defining how staffing estimates should behave",
        "Creating the logic behind multi-location veterinarians",
        "Deciding how the output should be presented to users",
        "Introducing simple practice-size categories for filtering",
        "Validating the feature through follow-up customer conversations",
        "Demonstrating use cases to current and potential customers",
      ],
    },
    outcome:
      "The feature gave customers a new way to segment practices by estimated staffing and size, helping them identify and prioritize opportunities more effectively. In follow-up interviews, 60% of customers we spoke with said the capability was a key reason to purchase or renew.",
  },
  {
    slug: "case-study-four",
    title: "Owning the customer relationship",
    summary:
      "Acted as the primary technical and product point of contact for enterprise customers, from onboarding through ongoing support and product feedback.",
    outcomes: [
      "New customer-driven product capability",
      "Complex data translated into usable insights",
      "60% of interviewed customers cited it as a purchase or renewal driver",
    ],
    imageAlt: "Placeholder image for case study three",
    photoSrc: "/images/onboarding.jpg",
    photoWidth: 1441,
    photoHeight: 879,
    problem: 
      "As the platform grew, customers needed more than access to the product. They needed help understanding the data, using the platform effectively, resolving issues quickly, and getting confidence that their feedback would actually influence the roadmap.",
    insight:
      "Because I worked directly with customers, I saw patterns that weren’t always obvious from support tickets alone. The same questions, frustrations, and requests would often surface across demos, onboarding calls, renewals, and day-to-day usage. That gave me a direct view into where the product was confusing, where customers were finding the most value, and which requests were worth turning into permanent capabilities.",
    whatIDid: {
      summary:
        "I became the main technical and product contact for customers across onboarding, support, and ongoing product conversations. My role included:",
      bullets: [
        "Led demos and onboarding for new enterprise customers",
        "Ran troubleshooting and support conversations with users",
        "Investigated data discrepancies using SQL and internal tools",
        "Translated customer issues into bug tickets or roadmap items",
        "Identified recurring requests and turned them into features",
        "Worked with engineering to prioritize urgent issues",
        "Explained technical concepts to non-technical users",
        "Supported customers through renewals and expansion",
      ],
    },
    outcome:
      "The feature gave customers a new way to segment practices by estimated staffing and size, helping them identify and prioritize opportunities more effectively. In follow-up interviews, 60% of customers we spoke with said the capability was a key reason to purchase or renew.",
  },
];
