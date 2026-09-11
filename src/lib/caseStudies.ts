export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  outcomes: string[];
  imageAlt: string;
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
    problem: "Antelligence began with a valuable but relatively simple industry database. As customer demand grew, the product needed to become more scalable, more reliable, and easier to use — without losing the data quality that made it useful in the first place. \n The challenge was no longer just maintaining information. It was turning that information into a product that enterprise customers could depend on.",
    insight:
      "Placeholder description of the customer insight or business context that shaped the approach.",
    whatIDid:
      "Placeholder description of the role played and the work done to move the project forward.",
    outcome:
      "Placeholder description of the outcome, impact, and what was learned.",
  },
  {
    slug: "case-study-two",
    title: "Case Study Title Two",
    summary:
      "One-sentence summary of the product problem and the impact of the work.",
    outcomes: [
      "Placeholder outcome metric or result",
      "Placeholder outcome metric or result",
      "Placeholder outcome metric or result",
    ],
    imageAlt: "Placeholder image for case study two",
    problem: "Placeholder description of the problem this project addressed.",
    insight:
      "Placeholder description of the customer insight or business context that shaped the approach.",
    whatIDid:
      "Placeholder description of the role played and the work done to move the project forward.",
    outcome:
      "Placeholder description of the outcome, impact, and what was learned.",
  },
  {
    slug: "case-study-three",
    title: "Case Study Title Three",
    summary:
      "One-sentence summary of the product problem and the impact of the work.",
    outcomes: [
      "Placeholder outcome metric or result",
      "Placeholder outcome metric or result",
      "Placeholder outcome metric or result",
    ],
    imageAlt: "Placeholder image for case study three",
    problem: "Placeholder description of the problem this project addressed.",
    insight:
      "Placeholder description of the customer insight or business context that shaped the approach.",
    whatIDid:
      "Placeholder description of the role played and the work done to move the project forward.",
    outcome:
      "Placeholder description of the outcome, impact, and what was learned.",
  },
];
