const PROFILE = {
  initials: "MR",
  name: "Manuel Rebutido",
  eyebrow: "Tech VA & AI Automation Specialist",
};

const HERO = {
  headline: (
    <>
      Automation systems built by a <span className="accent">strategic partner</span>, not just a VA.
    </>
  ),
  sub: "I'm Manuel — a Tech VA and AI Automation Specialist based in Quezon City, Philippines, with 7 years of experience turning repetitive work into systems that run themselves. I speak business outcomes, not just tools: time saved, leads captured, replies handled.",
  primaryCta: { label: "Message me on WhatsApp", href: "https://wa.me/639624027815" },
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
};

const ABOUT = {
  paragraphs: [
    "I've spent the last 7 years working as a Tech VA and AI Automation Specialist, helping founders and small teams get repetitive, time-consuming work off their plate — from lead follow-up to daily reporting.",
    "Before automation, I managed Amazon seller accounts — which means I understand operations from the business-owner's side, not just the tooling side. That background shapes how I scope every system I build: around ROI and time saved, not just what's technically possible.",
    "I work across n8n, Zapier, Make.com, GoHighLevel, and the Telegram Bot API, layering in AI (Claude, Gemini) where it actually adds value — not because it's trendy.",
  ],
};

const SERVICES = [
  {
    tag: "Automation",
    title: "AI workflow automation",
    desc: "End-to-end workflows built in n8n, Zapier, Make.com, or GoHighLevel — connecting the tools you already use so nothing needs manual handling.",
  },
  {
    tag: "Bots & Agents",
    title: "Telegram bots & AI agents",
    desc: "Custom Telegram bot integrations and AI agent pipelines (Claude, Gemini) for check-ins, alerts, replies, and first-line support.",
  },
  {
    tag: "CRM & Data",
    title: "Lead routing & CRM systems",
    desc: "Airtable and Google Sheets–based systems that qualify, score, and route leads automatically based on the logic your business runs on.",
  },
];

const CASE_STUDIES = [
  {
    title: "Fitness coaching check-in automation",
    desc: "Telegram + n8n + Google Sheets system for daily client check-ins, coach alerting, and automated weekly digests.",
  },
  {
    title: "AI agent pipeline",
    desc: "n8n workflow orchestrating a Gemini-powered AI agent to handle multi-step reasoning tasks automatically.",
  },
  {
    title: "Cold email lead scoring",
    desc: "Claude API–based system that scores inbound cold email replies and classifies lead intent in real time.",
  },
  {
    title: "Budget-based lead routing",
    desc: "Airtable workflow that routes new leads to the right owner using branching logic based on budget tier.",
  },
];

const STEPS = [
  {
    title: "Strategy call",
    desc: "We talk through where your time is going and identify the highest-impact automation opportunities.",
  },
  {
    title: "System design",
    desc: "I map out exactly what the automation will do, what tools it connects, and what success looks like.",
  },
  {
    title: "Build & test",
    desc: "The system gets built and run against real scenarios before it touches your live workflow.",
  },
  {
    title: "Launch & support",
    desc: "It goes live, and I stay on to monitor, tune, and extend it as your business changes.",
  },
];

const FOOTER_LINKS = [
  { label: "Email", href: "mailto:manuelr.aiautomation@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/639624027815" },
];

export default function Home() {
  return (
    <main className="page">
      <div className="container">
        <nav className="nav">
          <a className="navBrand" href="#top">
            <span className="navDot" aria-hidden="true" />
            {PROFILE.name}
          </a>
          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#how-it-works">Process</a>
            <a href="#book">Contact</a>
          </div>
        </nav>
      </div>

      {/* Hero */}
      <section className="section hero" id="top">
        <div className="container">
          <p className="eyebrow" style={{ textAlign: "center" }}>
            {PROFILE.eyebrow} · Quezon City, PH
          </p>
          <h1 className="heroHeadline">{HERO.headline}</h1>
          <p className="heroSub">{HERO.sub}</p>
          <div className="heroActions">
            <a className="btnPrimary" href={HERO.primaryCta.href} target="_blank" rel="noopener noreferrer">
              {HERO.primaryCta.label}
            </a>
            <a className="btnSecondary" href={HERO.secondaryCta.href}>
              {HERO.secondaryCta.label}
            </a>
          </div>
          <div className="heroStatus">
            <span className="statusDot" aria-hidden="true" />
            Currently taking on new automation projects
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="container">
          <div className="sectionInner wide aboutGrid">
            <div className="avatar">{PROFILE.initials}</div>
            <div className="aboutBody">
              <p className="eyebrow">About</p>
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="container">
          <div className="sectionInner wide">
            <p className="eyebrow">Services</p>
            <h2 className="h2">What I automate</h2>
            <p className="lead">
              Built with n8n, Zapier, Make.com, GoHighLevel, and the Telegram Bot API — with Claude and Gemini layered
              in wherever AI actually earns its place.
            </p>
            <div className="grid3">
              {SERVICES.map((s) => (
                <div className="serviceCard" key={s.title}>
                  <p className="serviceTag">{s.tag}</p>
                  <h3 className="serviceTitle">{s.title}</h3>
                  <p className="serviceDesc">{s.desc}</p>
                </div>
              ))}
            </div>

            <p className="eyebrow" style={{ marginTop: "56px" }}>
              Selected work
            </p>
            <div className="grid3">
              {CASE_STUDIES.map((c) => (
                <div className="serviceCard" key={c.title}>
                  <h3 className="serviceTitle">{c.title}</h3>
                  <p className="serviceDesc">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div className="sectionInner">
            <p className="eyebrow">Process</p>
            <h2 className="h2">How it works</h2>
            <p className="lead">A straightforward path from first call to a live system — no long onboarding, no guesswork.</p>
            <div className="stepsPipeline">
              <div className="stepsPulse" aria-hidden="true" />
              {STEPS.map((step, i) => (
                <div className="stepItem" key={step.title}>
                  <div className="stepNumber">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="stepTitle">{step.title}</h3>
                  <p className="stepDesc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section ctaSection" id="book">
        <div className="container">
          <div className="sectionInner wide ctaBand">
            <p className="eyebrow" style={{ textAlign: "center" }}>
              Let's get your time back
            </p>
            <h2 className="h2">Let's talk about your workflow</h2>
            <p className="lead">
              Message me directly on WhatsApp or email — tell me what's eating your time, and I'll tell you honestly
              whether automation is a fit.
            </p>
            <div className="heroActions" style={{ marginTop: "28px" }}>
              <a className="btnPrimary" href="https://wa.me/639624027815" target="_blank" rel="noopener noreferrer">
                WhatsApp: 0962 402 7815
              </a>
              <a className="btnSecondary" href="mailto:manuelr.aiautomation@gmail.com">
                manuelr.aiautomation@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
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
