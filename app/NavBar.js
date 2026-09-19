"use client";

import { useState } from "react";

const links = [
  { href: "#what-we-do", label: "What we do" },
  { href: "#process", label: "Process" },
  { href: "#who-we-help", label: "Who we help" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav wrap">
      <div className="wordmark">
        Anchorstone<span>&nbsp;Partners</span>
      </div>

      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={open ? "nav-links open" : "nav-links"}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
