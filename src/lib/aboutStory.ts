export type StorySlide = {
  index: number;
  title: string;
  body: string;
  isFinal?: boolean;
};

// Slide titles are final; body copy is placeholder pending real content.
export const storySlides: StorySlide[] = [
  {
    index: 1,
    title: "An unconventional route into product.",
    body: "Placeholder copy for this chapter of the story.",
  },
  {
    index: 2,
    title: "From rocks to rock 'n' roll",
    body: "Placeholder copy for this chapter of the story.",
  },
  {
    index: 3,
    title: "The accidental developer",
    body: "Placeholder copy for this chapter of the story.",
  },
  {
    index: 4,
    title: "Stars, Stripes, and Software",
    body: "Placeholder copy for this chapter of the story.",
  },
  {
    index: 5,
    title: "From Syntax to Strategy",
    body: "Placeholder copy for this chapter of the story.",
  },
  {
    index: 6,
    title: "Anyway, here's the work.",
    body: "Placeholder closing copy that leads into the portfolio.",
    isFinal: true,
  },
];
