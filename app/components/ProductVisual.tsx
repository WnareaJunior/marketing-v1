/**
 * ProductVisual — a crafted SVG "live operations" panel.
 * Serves as the hero's imagery: a believable product surface rather
 * than a colored placeholder block. Pure SVG + CSS, no runtime cost.
 */
export default function ProductVisual() {
  // Area-chart geometry (shared by stroke + fill).
  const line =
    "M0 132 C 34 128, 52 96, 84 100 S 138 150, 172 122 S 226 60, 262 74 S 316 118, 352 92 S 404 34, 440 46";
  const area = `${line} L 440 190 L 0 190 Z`;

  return (
    <svg
      viewBox="0 0 480 360"
      role="img"
      aria-label="Lumen dashboard showing a live service-health timeline, latency trend, and per-signal breakdown"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lm-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </linearGradient>
        <filter id="lm-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="24" floodColor="oklch(0.55 0.06 236)" floodOpacity="0.16" />
        </filter>
      </defs>

      {/* panel */}
      <g filter="url(#lm-shadow)">
        <rect x="8" y="8" width="464" height="344" rx="18" fill="var(--color-bg)" stroke="var(--color-line)" />
      </g>

      {/* header */}
      <g>
        <circle cx="34" cy="36" r="4" fill="var(--color-line)" />
        <circle cx="48" cy="36" r="4" fill="var(--color-line)" />
        <circle cx="62" cy="36" r="4" fill="var(--color-line)" />
        <rect x="360" y="26" width="88" height="20" rx="10" fill="var(--color-surface)" />
        <circle cx="374" cy="36" r="3.5" fill="var(--color-primary)" className="animate-pulse" />
        <text x="384" y="40" fontSize="10" fontWeight="600" fill="var(--color-muted)" fontFamily="var(--font-sans)">
          live · 12ms
        </text>
      </g>
      <line x1="20" y1="58" x2="460" y2="58" stroke="var(--color-line)" />

      {/* section title */}
      <text x="28" y="86" fontSize="13" fontWeight="700" fill="var(--color-ink)" fontFamily="var(--font-display)">
        Service health
      </text>
      <text x="28" y="102" fontSize="10" fill="var(--color-muted)" fontFamily="var(--font-sans)">
        p95 latency · last 60 min
      </text>

      {/* chart */}
      <g transform="translate(28 96)">
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1="0" y1={40 + i * 40} x2="440" y2={40 + i * 40} stroke="var(--color-line)" strokeOpacity="0.7" />
        ))}
        <path d={area} fill="url(#lm-area)" />
        <path
          d={line}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* amber spark on the peak */}
        <circle cx="262" cy="74" r="8" fill="var(--color-accent)" fillOpacity="0.18" />
        <circle cx="262" cy="74" r="3.5" fill="var(--color-accent)" />
        <line x1="262" y1="82" x2="262" y2="190" stroke="var(--color-accent)" strokeOpacity="0.4" strokeDasharray="3 4" />
      </g>

      {/* breakdown rows */}
      <g transform="translate(28 300)" fontFamily="var(--font-sans)">
        {[
          { label: "api-gateway", w: 210, tone: "var(--color-primary)" },
          { label: "checkout", w: 150, tone: "var(--color-primary)" },
          { label: "search", w: 96, tone: "var(--color-accent)" },
        ].map((row, i) => (
          <g key={row.label} transform={`translate(0 ${i * 18})`}>
            <text x="0" y="8" fontSize="9.5" fill="var(--color-muted)">
              {row.label}
            </text>
            <rect x="120" y="1" width="300" height="7" rx="3.5" fill="var(--color-surface-2)" />
            <rect x="120" y="1" width={row.w} height="7" rx="3.5" fill={row.tone} />
          </g>
        ))}
      </g>
    </svg>
  );
}
