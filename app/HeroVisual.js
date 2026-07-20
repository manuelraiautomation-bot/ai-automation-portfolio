"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "Tasks automated", target: 1240, suffix: "+" },
  { label: "Hours saved / week", target: 38, suffix: "" },
  { label: "Uptime", target: 99.9, suffix: "%", decimals: 1 },
];

const BARS = [
  { label: "Lead response time", value: 92 },
  { label: "Manual work reduced", value: 87 },
  { label: "Client satisfaction", value: 96 },
];

const LOG_EVENTS = [
  "✓ New lead scored via Claude API",
  "✓ FB Messenger reply sent automatically",
  "→ Generating video with Vertex AI...",
  "✓ Resume + proposal drafted",
  "✓ Attachment logged to Drive",
  "✓ Xero synced to Asana",
  "✓ Post published to LinkedIn + FB",
];

function useCountUp(target, decimals = 0, duration = 1400) {
  const [value, setValue] = useState(0);
  const startRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(target);
      return;
    }

    let raf;
    const step = (timestamp) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value.toFixed(decimals);
}

function StatTile({ stat }) {
  const display = useCountUp(stat.target, stat.decimals || 0);
  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        background: "var(--bg)",
        border: "1px solid var(--line)",
        borderRadius: "10px",
        padding: "14px 12px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "22px",
          color: "var(--text)",
          lineHeight: 1.1,
        }}
      >
        {display}
        {stat.suffix}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10.5px",
          color: "var(--text-muted)",
          marginTop: "4px",
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

function ProgressBar({ bar, delay }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(bar.value), 200 + delay);
    return () => clearTimeout(t);
  }, [bar.value, delay]);

  return (
    <div style={{ marginBottom: "12px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--text-muted)",
          marginBottom: "6px",
        }}
      >
        <span>{bar.label}</span>
        <span style={{ color: "var(--cyan)" }}>{bar.value}%</span>
      </div>
      <div
        style={{
          height: "6px",
          borderRadius: "4px",
          background: "var(--line)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${width}%`,
            background: "linear-gradient(90deg, var(--cyan), var(--amber))",
            borderRadius: "4px",
            transition: "width 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </div>
    </div>
  );
}

export default function HeroVisual() {
  const [logIndex, setLogIndex] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState([LOG_EVENTS[0]]);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const interval = setInterval(() => {
      setLogIndex((i) => {
        const next = (i + 1) % LOG_EVENTS.length;
        setVisibleLogs((prev) => {
          const updated = [...prev, LOG_EVENTS[next]];
          return updated.slice(-4);
        });
        return next;
      });
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: "440px", margin: "0 auto" }}>
      <style>{`
        @keyframes dashLivePulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.5); }
          50% { opacity: 0.6; box-shadow: 0 0 0 6px rgba(74, 222, 128, 0); }
        }
        .dashLiveDot {
          animation: dashLivePulse 2s ease-in-out infinite;
        }
        @keyframes dashLogFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dashLogLine {
          animation: dashLogFadeIn 0.4s ease;
        }
        @keyframes dashGlowDrift {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.08); }
        }
        .dashGlow {
          animation: dashGlowDrift 6s ease-in-out infinite;
        }
      `}</style>

      <div style={{ position: "relative" }}>
        <div
          className="dashGlow"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "90%",
            height: "90%",
            background:
              "radial-gradient(circle, rgba(79,209,197,0.18), transparent 70%)",
            filter: "blur(20px)",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: "16px",
            boxShadow: "0 24px 60px -20px rgba(0,0,0,0.6)",
            overflow: "hidden",
          }}
        >
          {/* window chrome */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <div style={{ display: "flex", gap: "6px" }}>
              <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
              <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
              <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-mono)",
                fontSize: "10.5px",
                color: "var(--text-muted)",
              }}
            >
              <span
                className="dashLiveDot"
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  display: "inline-block",
                }}
              />
              LIVE
            </div>
          </div>

          <div style={{ padding: "20px" }}>
            {/* stat tiles */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
              {STATS.map((stat) => (
                <StatTile stat={stat} key={stat.label} />
              ))}
            </div>

            {/* progress bars */}
            <div style={{ marginBottom: "20px" }}>
              {BARS.map((bar, i) => (
                <ProgressBar bar={bar} delay={i * 150} key={bar.label} />
              ))}
            </div>

            {/* activity feed */}
            <div
              style={{
                background: "var(--bg)",
                border: "1px solid var(--line)",
                borderRadius: "10px",
                padding: "12px 14px",
                minHeight: "112px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--amber)",
                  marginBottom: "8px",
                }}
              >
                Activity
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                {visibleLogs.map((line, i) => (
                  <div
                    className="dashLogLine"
                    key={`${line}-${i}`}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11.5px",
                      color: line.startsWith("→") ? "var(--cyan)" : "var(--text-muted)",
                    }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
