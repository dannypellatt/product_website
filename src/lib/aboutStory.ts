export type StorySlide = {
  index: number;
  title: string;
  body: string;
  photoSrc?: string;
  isFinal?: boolean;
};

// Slide titles are final; body copy is placeholder pending real content.
export const storySlides: StorySlide[] = [
  {
    index: 1,
    title: "An unconventional route into product.",
    body: "I started my career in music, performing, writing, and running my own business, before moving into software. Over time, I found myself increasingly drawn to the work around the code: understanding customer problems, deciding what to build, working with engineers, and turning ideas into useful products. That path eventually led me to where I am now: an experienced product manager, sitting comfortably in the space between customers, technology, and the decisions that turn one into the other.",
    photoSrc: "/images/MeAcoustic.jpeg",
  },
  {
    index: 2,
    title: "From rocks to rock 'n' roll",
    body: "Growing up in the south of England, I was the first in my family to attend college. While studying, I discovered a love for software through analyzing geophysical data. Although I graduated in 2014 with a BS in Geology, my path took an unexpected turn shortly after when I was signed as a singer-songwriter, allowing me to play music around the world.",
    photoSrc: "/images/gradphoto.jpeg",
  },
  {
    index: 3,
    title: "The accidental developer",
    body: "After a few years writing and performing, I returned to England and started my own music business, which led me to learn just enough HTML, CSS, and JavaScript to build my own website. This hands-on experience sparked a new passion for web development, and I began helping friends and family with their web projects.",
    photoSrc: "/images/MeComputer.jpg",
  },
  {
    index: 4,
    title: "Stars, stripes, and software",
    body: "In 2021, I got my green card and made the permanent move to the US, ready for a new career. I realized that the creativity, perseverance, and continuous learning that fueled my love of music were the same qualities needed in software development. This insight motivated me to dive deeper into coding, eventually attending a coding bootcamp and earning a full-stack software engineering certification.",
    photoSrc: "/images/MeMurica.jpeg",
  },
  {
    index: 5,
    title: "From syntax to strategy",
    body: "While engineering, I realized I most loved documenting the systems, and getting to know why the system worked as a whole. This gradually became more about deciding what should be built, why it mattered, and how to get it there. I moved closer to customers, strategy, and cross-functional leadership, while still leaning on my technical background to work effectively with engineers. Product became the place where the different parts of my career finally came together.",
    photoSrc: "/images/MeMeeting.jpeg",
  },
  {
    index: 6,
    title: "Okay, cool I guess. Now show me the receipts.",
    body: "Well… That’s the story so far! I'm currently living life in Carlsbad, CA, with my dog Banjo.\n\nIf you want to see how that experience translates into product work, take a look at a few of the projects I’ve led:",
    photoSrc: "/images/MeAndBanjo.jpeg",
    isFinal: true,
  },
];ft6
