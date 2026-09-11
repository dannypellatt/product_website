export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const LINKEDIN_URL = "https://www.linkedin.com/in/dannypellatt";

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "LinkedIn", href: LINKEDIN_URL, external: true },
];
