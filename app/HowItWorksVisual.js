"use client";

const TOOLS = [
  { label: "n8n", color: "#ea4b71", angle: 0, icon: "n8n" },
  { label: "Zapier", color: "#ff4a00", angle: 120, icon: "zapier" },
  { label: "Make", color: "#6d00cc", angle: 240, icon: "make" },
];

function ToolIcon({ icon, color }) {
  if (icon === "zapier") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M13 2 L5 14 H11 L10 22 L19 9 H13 L13 2Z"
          fill={color}
        />
      </svg>
    );
  }
  if (icon === "make") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
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
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="5" cy="6" r="2.2" fill={color} />
      <circle cx="5" cy="18" r="2.2" fill={color} />
      <circle cx="19" cy="12" r="2.6" fill={color} />
      <path d="M7 6h6a3 3 0 0 1 3 3" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M7 18h6a3 3 0 0 0 3-3" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

const RADIUS = 120;
const ORBIT_DURATION = "22s";

export default function HowItWorksVisual({ steps }) {
  return (
    <div className="howItWorksGrid" style={{ display: "block" }}>
      <style>{`
        @media (min-width: 900px) {
          .howItWorksGrid {
            display: grid !important;
            grid-template-columns: 1fr 320px;
            gap: 48px;
            align-items: center;
          }
        }
        .orbitWrap {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 32px;
        }
        @media (min-width: 900px) {
          .orbitWrap {
            margin-top: 0;
            position: sticky;
            top: 120px;
          }
        }
        .orbitContainer {
          transform: scale(0.75);
        }
        @media (min-width: 900px) {
          .orbitContainer {
            transform: scale(1);
          }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counterSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes ringSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .orbitRing {
          animation: orbitSpin ${ORBIT_DURATION} linear infinite;
        }
        .orbitBadge {
          animation: counterSpin ${ORBIT_DURATION} linear infinite;
        }
        .glowRing {
          animation: ringSpin 10s linear infinite;
        }
        .orbitContainer:hover .orbitRing {
          animation-play-state: paused;
        }
        .orbitContainer:hover .orbitBadge {
          animation-play-state: paused;
        }
      `}</style>

      <div className="stepsPipeline">
        <div className="stepsPulse" aria-hidden="true" />
        {steps.map((step, i) => (
          <div className="stepItem" key={step.title}>
            <div className="stepNumber">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="stepTitle">{step.title}</h3>
            <p className="stepDesc">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="orbitWrap">
        <div
          className="orbitContainer"
          style={{
            position: "relative",
            width: "300px",
            height: "300px",
          }}
        >
          {/* rotating gradient glow ring behind photo */}
          <div
            className="glowRing"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              background:
                "conic-gradient(from 0deg, #34d399, #f59e0b, #34d399)",
              filter: "blur(6px)",
              opacity: 0.6,
            }}
          />

          {/* photo */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "168px",
              height: "168px",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              overflow: "hidden",
              border: "3px solid #0b0f19",
              zIndex: 2,
            }}
          >
            <img
              src="/images/manuel.jpg"
              alt="Manuel Rebutido"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* orbiting tool badges */}
          <div
            className="orbitRing"
            style={{
              position: "absolute",
              inset: 0,
            }}
          >
            {TOOLS.map((tool) => (
              <div
                key={tool.label}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 0,
                  height: 0,
                  transform: `rotate(${tool.angle}deg) translateX(${RADIUS}px)`,
                }}
              >
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${-tool.angle}deg)`,
                  }}
                >
                  <div
                    className="orbitBadge"
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "#131a2a",
                      border: `2px solid ${tool.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 12px ${tool.color}40`,
                    }}
                    title={tool.label}
                  >
                    <ToolIcon icon={tool.icon} color={tool.color} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
