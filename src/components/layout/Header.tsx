"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav } from "@/lib/nav";
import Container from "./Container";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur-sm supports-[backdrop-filter]:bg-bg/80">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight sm:text-xl"
        >
          Danny Pellatt
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-sm sm:flex"
        >
          {primaryNav.map((link) => (
            <NavLink key={link.href} href={link.href} external={link.external} active={pathname === link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center sm:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-border bg-bg sm:hidden"
        >
          <Container className="flex flex-col py-2">
            {primaryNav.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                external={link.external}
                active={pathname === link.href}
                className="border-b border-border py-4 text-base last:border-none"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}

function NavLink({
  href,
  external,
  active,
  className = "",
  onClick,
  children,
}: {
  href: string;
  external?: boolean;
  active?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const sharedClassName = `transition-colors hover:text-accent ${
    active ? "text-fg" : "text-muted"
  } ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClassName}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClassName} onClick={onClick}>
      {children}
    </Link>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2 5H18M2 10H18M2 15H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
