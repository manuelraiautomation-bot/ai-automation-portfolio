export default function HowItWorksVisual({ steps }) {
  return (
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
  );
}
