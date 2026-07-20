"use client";

import { useState, useEffect } from "react";

export default function CaseStudyGallery({ cases }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const active = activeIndex !== null ? cases[activeIndex] : null;

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setActiveIndex(null);
    }
    if (active) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="grid3">
        {cases.map((c, i) => (
          <button className="caseCard" key={c.title} onClick={() => setActiveIndex(i)}>
            <div className="caseThumb" style={{ background: c.gradient }}>
              <span className="caseThumbLabel">{c.stack}</span>
            </div>
            <div className="caseCardBody">
              <h3 className="serviceTitle">{c.title}</h3>
              <p className="serviceDesc">{c.summary}</p>
              <span className="caseCardLink">View case study →</span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div className="modalOverlay" onClick={() => setActiveIndex(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modalClose" onClick={() => setActiveIndex(null)} aria-label="Close">
              ×
            </button>
            <div className="modalThumb" style={{ background: active.gradient }}>
              <span className="caseThumbLabel">{active.stack}</span>
            </div>
            <div className="modalBody">
              <p className="eyebrow">{active.stack}</p>
              <h2 className="h2" style={{ marginBottom: "24px" }}>
                {active.title}
              </h2>

              <div className="modalSection">
                <p className="modalSectionLabel">The pain</p>
                <p className="modalSectionText">{active.pain}</p>
              </div>
              <div className="modalSection">
                <p className="modalSectionLabel">What I built</p>
                <p className="modalSectionText">{active.build}</p>
              </div>
              <div className="modalSection">
                <p className="modalSectionLabel">The benefit</p>
                <p className="modalSectionText">{active.benefit}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
