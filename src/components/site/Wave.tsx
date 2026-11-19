/** Hand-drawn wavy edge. `color` is any CSS color; `flip` puts the wave on top of a section. */
export function Wave({ color, flip, drift = true, className = "" }: { color: string; flip?: boolean; drift?: boolean; className?: string }) {
  const d =
    "M0 10 C 60 22, 110 0, 170 9 S 280 20, 340 8 S 450 -2, 520 10 S 640 22, 700 9 S 800 0, 860 11 S 960 20, 1000 10 V 0 H 0 Z";
  return (
    <div aria-hidden className={`pointer-events-none w-full overflow-hidden leading-none ${className}`} style={{ height: 18, transform: flip ? "scaleY(-1)" : undefined }}>
      <svg className={drift ? "wave-drift" : ""} viewBox="0 0 2000 24" preserveAspectRatio="none" style={{ width: "200%", height: "100%", display: "block" }}>
        <path d={d} className="header-fill" style={{ fill: color }} />
        <path d={d} transform="translate(1000 0)" className="header-fill" style={{ fill: color }} />
      </svg>
    </div>
  );
}
