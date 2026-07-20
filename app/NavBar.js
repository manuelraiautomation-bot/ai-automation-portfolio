"use client";

import { useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#how-it-works" },
  { label: "Contact", href: "#book" },
];

export default function NavBar({ name }) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="nav">
      <a className="navBrand" href="#top" onClick={close}>
        <span className="navDot" aria-hidden="true" />
        {name}
      </a>

      <div className="navLinks">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <button
        type="button"
        className="navMenuBtn"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={`navMenuIcon${open ? " isOpen" : ""}`} />
      </button>

      {open && (
        <div className="navMobileMenu">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
