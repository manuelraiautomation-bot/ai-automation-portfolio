// Edit the values below — name, bio, and the links array — to make this yours.

const PROFILE = {
  initials: "AR",
  eyebrow: "AI Automation Engineer",
  name: "Alex Rivera",
  bio: "I design and build automation systems that take repetitive work off your team's plate — so the humans can do the parts that actually need a human.",
};

const LINKS = [
  { tag: "Start here", title: "Book a free automation audit", href: "https://cal.com/your-link" },
  { tag: "Work", title: "See case studies & results", href: "https://your-site.com/work" },
  { tag: "Services", title: "What I automate & how it's priced", href: "https://your-site.com/services" },
  { tag: "Writing", title: "Notes on building AI workflows", href: "https://your-site.com/blog" },
];

const FOOTER_LINKS = [
  { label: "Email", href: "mailto:you@example.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
  { label: "X", href: "https://x.com/yourname" },
  { label: "GitHub", href: "https://github.com/yourname" },
];

export default function Home() {
  return (
    <main className="page">
      <div className="card">
        <header className="header">
          <div className="avatar">{PROFILE.initials}</div>
          <p className="eyebrow">{PROFILE.eyebrow}</p>
          <h1 className="name">{PROFILE.name}</h1>
          <p className="bio">{PROFILE.bio}</p>
        </header>

        <nav className="pipeline" aria-label="Links">
          <div className="pulse" aria-hidden="true" />
          {LINKS.map((link) => (
            <div className="node" key={link.href}>
              <a
                className="link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="linkTag">{link.tag}</span>
                <span className="linkTitle">{link.title}</span>
              </a>
            </div>
          ))}
        </nav>

        <div className="status">
          <span className="statusDot" aria-hidden="true" />
          Currently taking on new automation projects
        </div>

        <footer className="footer">
          {FOOTER_LINKS.map((link) => (
            <a className="footerLink" href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </footer>
      </div>
    </main>
  );
}
