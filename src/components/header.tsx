"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["/", "Home"],
  ["/about", "Our Story"],
  ["/services", "Our Services"],
  ["/contact", "Contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header-custom">
      <div className="header-inner">
        <div className="site-brand-group">
          <Link href="/" className="brand-link">
            <span className="brand-ss-logo" aria-hidden="true">SS</span>
            <span className="brand-text">The Singh Sisters</span>
          </Link>
        </div>

        <nav className="desktop-nav-custom" aria-label="Main navigation">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`nav-item ${pathname === href ? "active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav-custom" aria-label="Mobile navigation">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`mobile-nav-item ${pathname === href ? "active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
