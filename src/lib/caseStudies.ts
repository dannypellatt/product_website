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
    problem: 
      "Antelligence's Enterprise Practice Database started as a free industry report tracking veterinary ownership across the U.S. It was well received, but customers quickly wanted access to the underlying data and were willing to pay for it because there was no reliable source for that information elsewhere. The opportunity was to turn a useful piece of industry research into a product customers could search, analyze, and depend on as part of their day-to-day work.",
    insight:
      "Talking with customers made it clear that the value wasn't simply in having a list of veterinary practices. They wanted to use the data to understand ownership, identify opportunities, segment the market, and make better commercial decisions. That shifted the opportunity from selling access to information into building a product around how customers actually wanted to use it.",
    whatIDid:
      "Placeholder description of the role played and the work done to move the project forward.",
    outcome:
      "The platform grew into a subscription product serving more than 60 enterprise customers and 1,000+ users, with over $1M in annual recurring revenue. Along the way, we increased automation, improved validated data accuracy to over 99%, and removed roughly 100 hours of manual work per month.",
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
