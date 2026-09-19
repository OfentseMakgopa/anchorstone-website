export default function HeroFigure() {
  return (
    <svg
      className="hero-figure"
      viewBox="0 0 420 340"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="420" height="340" fill="none" />
      <g>
        <rect
          x="150"
          y="60"
          width="120"
          height="220"
          fill="#FBFAF6"
          stroke="#21252A"
          strokeWidth="1.5"
          transform="rotate(-4 210 170)"
        />
        <g transform="rotate(-4 210 170)" stroke="#DDD6C5" strokeWidth="1">
          <line x1="150" y1="100" x2="270" y2="100" />
          <line x1="150" y1="140" x2="270" y2="140" />
          <line x1="150" y1="180" x2="270" y2="180" />
          <line x1="150" y1="220" x2="270" y2="220" />
          <line x1="150" y1="260" x2="270" y2="260" />
        </g>
      </g>
      <line
        x1="80"
        y1="300"
        x2="235"
        y2="120"
        stroke="#8F5B3F"
        strokeWidth="10"
        strokeLinecap="square"
      />
      <rect x="66" y="292" width="34" height="16" fill="#8F5B3F" />
      <rect
        x="222"
        y="108"
        width="30"
        height="18"
        fill="#8F5B3F"
        transform="rotate(-40 237 117)"
      />
      <line x1="20" y1="308" x2="400" y2="308" stroke="#21252A" strokeWidth="1.5" />
      <line x1="285" y1="308" x2="285" y2="150" stroke="#33495B" strokeWidth="4" />
      <line x1="285" y1="150" x2="330" y2="150" stroke="#33495B" strokeWidth="4" />
    </svg>
  );
}
