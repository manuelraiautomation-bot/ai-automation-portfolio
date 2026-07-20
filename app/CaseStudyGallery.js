"use client";

import { useState } from "react";

const caseStudies = [
  {
    id: "ai-agent-facebook",
    title: "AI agent for Facebook",
    tags: ["N8N", "WEBHOOK", "GEMINI"],
    summary:
      "A Gemini-powered AI agent that reads incoming Facebook messages and replies automatically with memory context.",
    image: "/case-studies/ai-agent-facebook.png",
    pain: "Every incoming Facebook message or comment needed a manual reply. Responses were slow, inconsistent, and depended on someone being available to check the page.",
    build:
      "An n8n workflow triggered by a Facebook webhook. The AI Agent (Gemini) pulls a reference document for context, keeps short-term memory of the conversation, and posts the reply straight back through the Graph API.",
    benefit:
      "Messages get an instant, on-brand reply with no one watching the inbox. The page stays responsive around the clock without manual monitoring.",
  },
  {
    id: "content-repurposing",
    title: "AI content repurposing pipeline",
    tags: ["ZAPIER", "AI BY ZAPIER", "LINKEDIN"],
    summary:
      "One uploaded video automatically becomes a transcript, two blog posts, and posts on LinkedIn and Facebook.",
    image: "/case-studies/content-repurposing.png",
    pain: "A single video would get used once and then sit unused. Turning it into blog posts and social updates for multiple platforms was a manual, repetitive job every time.",
    build:
      "A Zapier pipeline triggered by a new file in Google Drive. It filters for video files, generates a transcription, drafts two blog posts from it, then loops through the results and splits into two paths that each post an update to LinkedIn and a Facebook Page.",
    benefit:
      "One video upload now produces multi-platform content automatically — no manual repurposing, and nothing posted twice by hand.",
  },
  {
    id: "fb-messenger-assistant",
    title: "AI Facebook Messenger knowledge assistant",
    tags: ["N8N", "GEMINI", "GROQ FALLBACK"],
    summary:
      "A support agent that answers Messenger questions from a live knowledge base, with a backup model if the primary fails.",
    image: "/case-studies/fb-messenger-assistant.png",
    pain: "The same support questions kept coming in through Messenger. Answering them by hand took time and answers weren't always consistent with what the business actually offered.",
    build:
      "An n8n workflow that verifies the Facebook webhook challenge, acknowledges each incoming message, then loads a knowledge base document and routes the question to an AI Customer Support Agent. It runs on Gemini 2.5 with a Groq Llama model as a fallback, plus conversation memory, before sending the reply back to Messenger.",
    benefit:
      "Customers get accurate, consistent answers immediately, and the fallback model means the assistant stays up even if the primary AI call fails.",
  },
  {
    id: "job-scraper-resume",
    title: "AI job scraper + resume optimizer",
    tags: ["N8N", "SLACK", "OPENROUTER"],
    summary:
      "A Slack-triggered workflow that searches job listings and drafts a tailored resume and proposal for each one.",
    image: "/case-studies/job-scraper-resume.png",
    pain: "Searching job boards, checking listings were valid, and writing a tailored resume and proposal for each one manually was slow and limited how many applications could realistically go out per day.",
    build:
      "An n8n workflow triggered from Slack. It validates the search query, scrapes job listings, splits and loops through each result, then pulls resume content and generates a tailored resume and proposal through an AI model with structured output. The finished draft, plus a summary, gets posted to Slack and drafted in Gmail.",
    benefit:
      "A ready-to-send resume and proposal comes out the other end for every relevant listing, so applications go out faster and in higher volume without sacrificing quality.",
  },
  {
    id: "email-attachment-sorting",
    title: "Email attachment sorting, log & summary",
    tags: ["MAKE", "GMAIL", "GEMINI"],
    summary:
      "Incoming email attachments get described by AI, filed in Drive, logged in a sheet, and summarized back by email.",
    image: "/case-studies/email-attachment-sorting.png",
    pain: "Attachments sent by email piled up in the inbox with no organized record of what had come in, what it was, or where it ended up.",
    build:
      "A Make.com scenario that watches a Gmail inbox for new messages, pulls out the attachments, and has Gemini upload and describe each file. The file goes to Google Drive, gets logged as a new row in a Sheet, and a summary email goes out confirming what was processed.",
    benefit:
      "Every attachment is automatically filed, described, and logged with zero manual sorting — and there's now a running record of everything that came in.",
  },
  {
    id: "xero-asana",
    title: "Xero → Asana bookkeeping automation",
    tags: ["MAKE", "XERO", "ASANA"],
    summary:
      "Completed Asana tasks trigger a Xero API call, then route financial data into Sheets and Asana in parallel.",
    image: "/case-studies/xero-asana.png",
    pain: "Bookkeeping data and task tracking lived in two separate tools. Keeping Xero and Asana in sync meant re-entering the same information by hand after tasks were completed.",
    build:
      "A Make.com scenario that watches for completed Asana tasks and makes an API call to Xero. A router splits the result into two paths — one iterates through the data into a Google Sheet, the other updates Asana and clears the source range once it's logged.",
    benefit:
      "Financial and task data now stay in sync automatically after a task is marked done, removing a recurring manual data-entry step.",
  },
  {
    id: "asmr-video-generation",
    title: "YouTube Shorts & Facebook Reels video generator",
    tags: ["N8N", "VERTEX AI VEO", "SCHEDULED"],
    summary:
      "A scheduled pipeline that generates a video with Vertex AI Veo and publishes it to Facebook and YouTube automatically.",
    image: "/case-studies/asmr-video-generation.png",
    pain: "Producing short-form ASMR video content on a regular schedule for two platforms took manual work at every step, from coming up with prompts to generating and uploading each video.",
    build:
      "An n8n pipeline on a schedule trigger. Gemini generates a structured video prompt, then the workflow authenticates with a JWT, exchanges it for an access token, and calls Vertex AI Veo to generate the video. It polls until generation is done, converts the result to a file, and publishes it to the Facebook Graph API and YouTube.",
    benefit:
      "New video content gets generated and published on autopilot on a fixed schedule, with no manual prompt writing, uploading, or cross-posting required.",
  },
];

const colors = {
  bg: "#0b0f19",
  card: "#131a2a",
  border: "#232c3f",
  borderHover: "#3a4762",
  text: "#e2e8f0",
  textDim: "#94a3b8",
  accent: "#34d399",
  badgeBg: "#1e293b",
};

export default function CaseStudyGallery() {
  const [active, setActive] = useState(null);

  return (
    <section style={{ width: "100%" }}>
      <p
        style={{
          color: colors.accent,
          fontSize: "12px",
          letterSpacing: "2px",
          fontFamily: "monospace",
          marginBottom: "8px",
        }}
      >
        SELECTED WORK
      </p>
      <p style={{ color: colors.textDim, marginBottom: "32px" }}>
        Click any project to see the pain point it solved and the result.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        {caseStudies.map((cs) => (
          <button
            key={cs.id}
            onClick={() => setActive(cs)}
            style={{
              textAlign: "left",
              background: colors.card,
              border: `1px solid ${colors.border}`,
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = colors.borderHover)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = colors.border)
            }
          >
            <div style={{ position: "relative", height: "144px", width: "100%", overflow: "hidden" }}>
              <img
                src={cs.image}
                alt={cs.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "12px",
                  background: "rgba(30,41,59,0.9)",
                  color: colors.textDim,
                  fontSize: "10px",
                  letterSpacing: "0.5px",
                  fontFamily: "monospace",
                  padding: "4px 8px",
                  borderRadius: "4px",
                }}
              >
                {cs.tags.join(" · ")}
              </span>
            </div>
            <div style={{ padding: "16px" }}>
              <h3 style={{ color: "#fff", fontWeight: 600, marginBottom: "6px", fontSize: "16px" }}>
                {cs.title}
              </h3>
              <p style={{ color: colors.textDim, fontSize: "14px", marginBottom: "12px", lineHeight: 1.4 }}>
                {cs.summary}
              </p>
              <span style={{ color: colors.accent, fontSize: "14px", fontFamily: "monospace" }}>
                View case study →
              </span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            zIndex: 50,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: colors.card,
              border: `1px solid ${colors.border}`,
              borderRadius: "12px",
              maxWidth: "640px",
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
            }}
          >
            <img
              src={active.image}
              alt={active.title}
              style={{ width: "100%", height: "192px", objectFit: "cover", objectPosition: "top" }}
            />
            <div style={{ padding: "24px" }}>
              <span style={{ color: colors.textDim, fontSize: "10px", letterSpacing: "0.5px", fontFamily: "monospace" }}>
                {active.tags.join(" · ")}
              </span>
              <h3 style={{ color: "#fff", fontSize: "20px", fontWeight: 600, marginTop: "8px", marginBottom: "16px" }}>
                {active.title}
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <p style={{ color: colors.accent, fontSize: "12px", fontFamily: "monospace", letterSpacing: "0.5px", marginBottom: "4px" }}>
                    THE PAIN
                  </p>
                  <p style={{ color: colors.text, fontSize: "14px", lineHeight: 1.5 }}>{active.pain}</p>
                </div>
                <div>
                  <p style={{ color: colors.accent, fontSize: "12px", fontFamily: "monospace", letterSpacing: "0.5px", marginBottom: "4px" }}>
                    WHAT I BUILT
                  </p>
                  <p style={{ color: colors.text, fontSize: "14px", lineHeight: 1.5 }}>{active.build}</p>
                </div>
                <div>
                  <p style={{ color: colors.accent, fontSize: "12px", fontFamily: "monospace", letterSpacing: "0.5px", marginBottom: "4px" }}>
                    THE BENEFIT
                  </p>
                  <p style={{ color: colors.text, fontSize: "14px", lineHeight: 1.5 }}>{active.benefit}</p>
                </div>
              </div>

              <button
                onClick={() => setActive(null)}
                style={{
                  marginTop: "24px",
                  background: "none",
                  border: "none",
                  color: colors.textDim,
                  fontSize: "14px",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                ← Back to gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
