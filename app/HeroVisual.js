"use client";

const TOOLS = [
  { label: "n8n", color: "#ea4b71", angle: -90, icon: "n8n" },
  { label: "Zapier", color: "#ff4a00", angle: 30, icon: "zapier" },
  { label: "Make", color: "#6d00cc", angle: 150, icon: "make" },
];

function ToolIcon({ icon, color }) {
  if (icon === "zapier") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M13 2 L5 14 H11 L10 22 L19 9 H13 L13 2Z" fill={color} />
      </svg>
    );
  }
  if (icon === "make") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M16 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        <circle cx="8" cy="12" r="1.6" fill={color} />
        <circle cx="16" cy="12" r="1.6" fill={color} />
      </svg>
    );
  }
  // n8n — connected node cluster
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="5" cy="6" r="2.2" fill={color} />
      <circle cx="5" cy="18" r="2.2" fill={color} />
      <circle cx="19" cy="12" r="2.6" fill={color} />
      <path d="M7 6h6a3 3 0 0 1 3 3" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M7 18h6a3 3 0 0 0 3-3" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

const ORBIT_DURATION = "26s";

export default function HeroVisual() {
  return (
    <div className="heroVisual">
      <style>{`
        @keyframes heroGlowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes heroToolSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes heroToolCounterSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .heroOrbitRing {
          animation: heroGlowSpin 40s linear infinite;
        }
        .heroToolRing {
          animation: heroToolSpin ${ORBIT_DURATION} linear infinite;
        }
        .heroToolBadge {
          animation: heroToolCounterSpin ${ORBIT_DURATION} linear infinite;
        }
        .heroVisual:hover .heroOrbitRing,
        .heroVisual:hover .heroToolRing,
        .heroVisual:hover .heroToolBadge {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .heroOrbitRing,
          .heroToolRing,
          .heroToolBadge {
            animation: none;
          }
        }
      `}</style>

      <div className="heroOrbitInner">
        {/* rotating gradient glow ring behind the portrait */}
        <div
          className="heroGlow"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "70%",
            height: "70%",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            background: "conic-gradient(from 0deg, #f2a93b, #4fd1c5, #f2a93b)",
            filter: "blur(10px)",
            opacity: 0.45,
          }}
        />

        {/* dashed orbit ring — sized to the outer edge of the badges, not their centers */}
        <div
          className="heroOrbitRing"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "calc(var(--orbit-radius) * 2 + var(--tool-size))",
            height: "calc(var(--orbit-radius) * 2 + var(--tool-size))",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            border: "1px dashed rgba(242, 169, 59, 0.35)",
          }}
        />

        {/* portrait */}
        <div className="heroPortraitPos">
          <div className="heroPortraitFrame">
            <img src="/images/manuel.jpg" alt="Manuel Rebutido" className="heroPortrait" />
          </div>
        </div>

        {/* orbiting tool icons: n8n, Zapier, Make */}
        <div className="heroToolRing" style={{ position: "absolute", inset: 0 }}>
          {TOOLS.map((tool) => (
            <div
              key={tool.label}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 0,
                height: 0,
                transform: `rotate(${tool.angle}deg) translateX(var(--orbit-radius))`,
              }}
            >
              <div style={{ transform: `translate(-50%, -50%) rotate(${-tool.angle}deg)` }}>
                <div
                  className="heroToolBadge"
                  title={tool.label}
                  style={{
                    width: "var(--tool-size)",
                    height: "var(--tool-size)",
                    borderRadius: "50%",
                    background: "var(--surface)",
                    border: `2px solid ${tool.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 12px ${tool.color}40`,
                  }}
                >
                  <ToolIcon icon={tool.icon} color={tool.color} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
