import CaseStudyGallery from "./CaseStudyGallery";
import HowItWorksVisual from "./HowItWorksVisual";

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
    stack: "Telegram · n8n · Google Sheets",
    summary: "Daily client check-ins, coach alerting, and automated weekly digests.",
    gradient: "linear-gradient(135deg, #2b3a55, #1a2333)",
    pain: "A fitness coach was manually messaging every client each day for check-ins, then digging through chat threads to spot who was falling behind. It ate hours every week and problems weren't caught until it was too late.",
    build: "A Telegram bot that sends daily check-in prompts automatically, logs every response straight to Google Sheets, and flags the coach in real time when a client misses check-ins or reports a concerning trend — plus an automated weekly digest summarizing every client's progress.",
    benefit: "The coach got hours back every week and started catching at-risk clients days earlier instead of finding out during a scheduled call.",
  },
  {
    title: "AI agent pipeline",
    stack: "n8n · Gemini",
    summary: "A Gemini-powered AI agent handling multi-step reasoning tasks automatically.",
    gradient: "linear-gradient(135deg, #3a2b55, #1a2333)",
    pain: "A recurring multi-step research and decision task was being done manually — gathering information, reasoning through it, and producing a structured output — which was slow and inconsistent depending on who did it.",
    build: "An n8n pipeline that orchestrates a Gemini-powered agent through each step of the task: gathering inputs, reasoning through them, and producing a consistent structured output without a human in the loop.",
    benefit: "The task now runs on autopilot with consistent quality every time, freeing up the hours that used to go into doing it by hand.",
  },
  {
    title: "Cold email lead scoring",
    stack: "Claude API",
    summary: "Scores inbound cold email replies and classifies lead intent in real time.",
    gradient: "linear-gradient(135deg, #553a2b, #1a2333)",
    pain: "A sales team was getting a steady stream of cold email replies but had no fast way to tell a hot lead from a polite brush-off, so good leads sat in the inbox alongside noise.",
    build: "A Claude API–based system that reads each incoming reply, scores it for buying intent, and classifies it (interested, not now, not interested) automatically as it lands.",
    benefit: "Sales reps now see prioritized, pre-scored leads instead of a flat inbox — faster follow-up on the replies that actually matter.",
  },
  {
    title: "Budget-based lead routing",
    stack: "Airtable",
    summary: "Routes new leads to the right owner using branching logic based on budget tier.",
    gradient: "linear-gradient(135deg, #2b5540, #1a2333)",
    pain: "New leads were coming in with wildly different budgets, but they were all landing in one shared queue — meaning a high-budget lead could sit untouched while someone worked through smaller ones first.",
    build: "An Airtable workflow that reads each lead's budget on intake and automatically routes it to the right owner using branching logic based on budget tier, with no manual sorting required.",
    benefit: "High-value leads reach the right person immediately instead of waiting in a shared queue, shortening response time on the deals that matter most.",
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
            <p className="lead" style={{ marginBottom: 0 }}>Click any project to see the pain point it solved and the result.</p>
            <CaseStudyGallery cases={CASE_STUDIES} />
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
            <HowItWorksVisual steps={STEPS} />
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
