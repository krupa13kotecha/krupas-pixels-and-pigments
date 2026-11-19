import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Artwork } from "@/data/content";
import { Placeholder } from "./Placeholder";

export function Lightbox({ items, index, onClose, onIndex }: { items: Artwork[]; index: number | null; onClose: () => void; onIndex: (i: number) => void }) {
  const touch = useRef<number | null>(null);
  const open = index !== null;
  const prev = () => index !== null && onIndex((index - 1 + items.length) % items.length);
  const next = () => index !== null && onIndex((index + 1) % items.length);

  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  });

  const art = index !== null ? items[index] : null;
  const btn = "inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-cream bg-caput text-cream";
  return (
    <AnimatePresence>
      {art && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={art.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "color-mix(in oklab, var(--c-caput) 70%, black 30% / 0.9)" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touch.current === null) return;
            const dx = e.changedTouches[0].clientX - touch.current;
            if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
            touch.current = null;
          }}
        >
          <motion.figure
            key={index}
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-2xl overflow-hidden rounded-3xl bg-cream text-caput"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/3] bg-tan text-caput">
              <Placeholder src={art.image} alt={art.title} />
            </div>
            <figcaption className="p-5 md:p-6">
              <h3 className="font-display text-2xl font-bold">{art.title}</h3>
              <p className="mt-2 text-coffee">{art.description}</p>
            </figcaption>
          </motion.figure>
          <button aria-label="Close" className={`${btn} absolute right-4 top-4`} onClick={onClose}><X aria-hidden /></button>
          <button aria-label="Previous artwork" className={`${btn} absolute left-2 top-1/2 -translate-y-1/2 md:left-6`} onClick={(e) => { e.stopPropagation(); prev(); }}><ChevronLeft aria-hidden /></button>
          <button aria-label="Next artwork" className={`${btn} absolute right-2 top-1/2 -translate-y-1/2 md:right-6`} onClick={(e) => { e.stopPropagation(); next(); }}><ChevronRight aria-hidden /></button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
