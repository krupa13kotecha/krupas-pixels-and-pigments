import { ImageIcon } from "lucide-react";

export function Placeholder({ label = "Image coming soon", src, alt, className = "", style }: { label?: string; src?: string | undefined; alt: string; className?: string; style?: React.CSSProperties }) {
  if (src) return <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} style={style} />;
  return (
    <div role="img" aria-label={alt} className={`flex h-full w-full flex-col items-center justify-center gap-2 text-center ${className}`} style={style}>
      <ImageIcon aria-hidden className="h-8 w-8 opacity-70" />
      <span className="hand opacity-90">{label}</span>
    </div>
  );
}
