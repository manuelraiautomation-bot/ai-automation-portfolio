"use client";

import { useEffect, useRef, useState } from "react";

const NODE_POSITIONS = [
  { x: 100, y: 60 },
  { x: 100, y: 220 },
  { x: 100, y: 380 },
  { x: 100, y: 540 },
];

const PATH_D =
  "M100,60 C150,130 50,150 100,220 C150,290 50,310 100,380 C150,450 50,470 100,540";

export default function HowItWorksVisual({ steps }) {
  const [active, setActive] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const stepRefs = useRef([]);
  const progressPathRef = useRef(null);

  useEffect(() => {
    if (progressPathRef.current) {
      setPathLength(progressPathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.stepIndex);
            setActive(idx);
          }
        });
      },
      { root: null, rootMargin: "-35% 0px -45% 0px", threshold: 0 }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [steps.length]);

  const handleNodeClick = (i) => {
    setActive(i);
    stepRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const progress = (active + 1) / steps.length;
  const dashOffset = pathLength ? pathLength * (1 - progress) : 0;

  return (
    <div className="howItWorksGrid" style={{ display: "block" }}>
      <style>{`
        @media (min-width: 900px) {
          .howItWorksGrid {
            display: grid !important;
            grid-template-columns: 1fr 300px;
            gap: 48px;
            align-items: start;
          }
        }
        .flowVisualWrap { display: none; }
        @media (min-width: 900px) {
          .flowVisualWrap {
            display: block;
            position: sticky;
            top: 120px;
          }
        }
        @keyframes flowDash {
          to { stroke-dashoffset: -24; }
        }
        .flowAmbient {
          animation: flowDash 1.2s linear infinite;
        }
        .flowProgress {
          transition: stroke-dashoffset 0.6s ease;
        }
        .flowNode {
          transition: fill 0.4s ease, stroke 0.4s ease, filter 0.4s ease;
          cursor: pointer;
        }
        .flowNode:hover {
          filter: brightness(1.2);
        }
      `}</style>

      <div className="stepsPipeline">
        <div className="stepsPulse" aria-hidden="true" />
        {steps.map((step, i) => (
          <div
            className="stepItem"
            key={step.title}
            data-step-index={i}
            ref={(el) => (stepRefs.current[i] = el)}
          >
            <div className="stepNumber">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="stepTitle">{step.title}</h3>
            <p className="stepDesc">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="flowVisualWrap">
        <svg
          viewBox="0 0 200 600"
          width="100%"
          height="auto"
          style={{ maxHeight: "520px" }}
        >
          <defs>
            <pattern id="dotGrid" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#1e293b" />
            </pattern>
            <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect x="0" y="0" width="200" height="600" fill="url(#dotGrid)" />

          {/* static base connector */}
          <path d={PATH_D} fill="none" stroke="#232c3f" strokeWidth="2" />

          {/* ambient always-moving dashed flow, like a running workflow */}
          <path
            d={PATH_D}
            fill="none"
            stroke="#34d399"
            strokeOpacity="0.35"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="flowAmbient"
          />

          {/* progress fill synced to active step, like execution completing */}
          <path
            ref={progressPathRef}
            d={PATH_D}
            fill="none"
            stroke="#34d399"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={dashOffset}
            className="flowProgress"
          />

          {NODE_POSITIONS.map((pos, i) => {
            const isActive = i <= active;
            return (
              <g
                key={i}
                onClick={() => handleNodeClick(i)}
                className="flowNode"
                filter={isActive ? "url(#nodeGlow)" : undefined}
              >
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="16"
                  fill={isActive ? "#0f2a22" : "#131a2a"}
                  stroke={isActive ? "#34d399" : "#f59e0b"}
                  strokeWidth="2"
                />
                <text
                  x={pos.x}
                  y={pos.y + 4}
                  textAnchor="middle"
                  fontSize="11"
                  fontFamily="monospace"
                  fill={isActive ? "#34d399" : "#f59e0b"}
                >
                  {String(i + 1).padStart(2, "0")}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
