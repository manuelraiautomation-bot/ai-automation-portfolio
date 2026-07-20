"use client";

export default function HeroVisual() {
  return (
    <div className="heroVisual">
      <style>{`
        @keyframes heroRingSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .heroOrbitRing {
          animation: heroRingSpin 40s linear infinite;
        }
        .heroVisual:hover .heroOrbitRing {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .heroOrbitRing {
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

        {/* dashed orbit ring */}
        <div
          className="heroOrbitRing"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1px dashed rgba(242, 169, 59, 0.35)",
          }}
        />

        {/* portrait */}
        <div className="heroPortraitFrame">
          <img src="/images/manuel.jpg" alt="Manuel Rebutido" className="heroPortrait" />
        </div>

        {/* floating badges */}
        <div className="heroBadge heroBadge--tool">
          <span className="heroBadgeIcon" aria-hidden="true">⚡</span>
          <span className="heroBadgeText">
            <strong>Automation</strong>
            <small>Running 24/7</small>
          </span>
        </div>

        <div className="heroBadge heroBadge--stat">
          <small className="heroStatLabel">Hours saved</small>
          <strong className="heroStatValue">240+</strong>
          <small className="heroStatSub">per client / mo</small>
        </div>

        <div className="heroBadge heroBadge--tag">n8n</div>

        <div className="heroBadge heroBadge--status">
          <span className="statusDot" aria-hidden="true" />
          Open to work
        </div>
      </div>
    </div>
  );
}
