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

export default function CaseStudyGallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="w-full">
      <p className="text-emerald-400 text-xs tracking-widest font-mono mb-2">
        SELECTED WORK
      </p>
      <h2 className="text-slate-300 mb-8">
        Click any project to see the pain point it solved and the result.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((cs) => (
          <button
            key={cs.id}
            onClick={() => setActive(cs)}
            className="text-left bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-colors"
          >
            <div className="relative h-36 w-full overflow-hidden">
              <img
                src={cs.image}
                alt={cs.title}
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-3 left-3 bg-slate-800/90 text-slate-300 text-[10px] tracking-wide font-mono px-2 py-1 rounded">
                {cs.tags.join(" · ")}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold mb-1">{cs.title}</h3>
              <p className="text-slate-400 text-sm mb-3">{cs.summary}</p>
              <span className="text-emerald-400 text-sm font-mono">
                View case study →
              </span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-48 object-cover object-top"
            />
            <div className="p-6">
              <span className="text-slate-400 text-[10px] tracking-wide font-mono">
                {active.tags.join(" · ")}
              </span>
              <h3 className="text-white text-xl font-semibold mt-2 mb-4">
                {active.title}
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-emerald-400 text-xs font-mono tracking-wide mb-1">
                    THE PAIN
                  </p>
                  <p className="text-slate-300 text-sm">{active.pain}</p>
                </div>
                <div>
                  <p className="text-emerald-400 text-xs font-mono tracking-wide mb-1">
                    WHAT I BUILT
                  </p>
                  <p className="text-slate-300 text-sm">{active.build}</p>
                </div>
                <div>
                  <p className="text-emerald-400 text-xs font-mono tracking-wide mb-1">
                    THE BENEFIT
                  </p>
                  <p className="text-slate-300 text-sm">{active.benefit}</p>
                </div>
              </div>

              <button
                onClick={() => setActive(null)}
                className="mt-6 text-slate-400 text-sm hover:text-white"
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
