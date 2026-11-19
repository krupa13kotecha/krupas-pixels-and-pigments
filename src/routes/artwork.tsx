import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Instagram } from "lucide-react";
import { artworks, mediumSections, EMAIL, INSTAGRAM } from "@/data/content";
import { Placeholder } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";
import { Lightbox } from "@/components/site/Lightbox";
import { Wave } from "@/components/site/Wave";

export const Route = createFileRoute("/artwork")({
  head: () => ({
    meta: [
      { title: "Studio Archives — Krupa Kotecha Artwork" },
      { name: "description", content: "Watercolor, canvas, resin and pottery by Krupa Kotecha (@whimsyy__waterart). Commissions welcome." },
      { property: "og:title", content: "Studio Archives — Krupa Kotecha" },
      { property: "og:description", content: "Watercolor is where I truly belong. Browse paintings and ask for a commission." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArtworkPage,
});

function ArtworkPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <section className="section-y" data-header-zone="light">
        <div className="container-k grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal className="order-2 md:order-1">
            <h1 className="h1">Studio archives</h1>
            <div className="mt-6 space-y-4 text-[1.0625rem]">
              <p className="font-display text-xl italic text-tan">Hello, and welcome to my studio archives.</p>
              <p>I'm Krupa, an amateur artist from India. This page is a collection of the work I've made across every medium I've tried so far, though watercolor is where I feel like I truly belong.</p>
              <p>Thank you for stopping by. If you have a special memory, a story, or a gift idea you'd like turned into a painting, I'd be delighted to create something unique and work on it together with you. You can reach me at <a className="font-semibold text-tan underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
              <p>If you enjoy my work and would like to support it, you can follow along and find me on Instagram at <a className="font-semibold text-tan underline" href={INSTAGRAM} target="_blank" rel="noreferrer">@whimsyy__waterart</a>.</p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={`mailto:${EMAIL}`} className="sticker" style={{ ["--tilt" as string]: "-1deg" }}><Mail aria-hidden className="h-5 w-5" />Ask for a commission</a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="sticker" style={{ ["--tilt" as string]: "1deg" }}><Instagram aria-hidden className="h-5 w-5" />Follow on Instagram</a>
            </div>
          </Reveal>
          <Reveal className="order-1 md:order-2" delay={0.1}>
            <div className="tilt-frame mx-auto max-w-[440px]" style={{ ["--tilt" as string]: "2deg" }} tabIndex={0}>
              <div className="rounded-[1.25rem] bg-tan p-3 shadow-[6px_6px_0_var(--c-cream)]">
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-cream text-caput">
                  <Placeholder label="Featured painting" alt="Featured painting by Krupa" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {mediumSections.map((sec) => {
        const items = artworks.map((a, i) => ({ a, i })).filter(({ a }) => a.medium === sec.id);
        return (
          <section key={sec.id} data-header-zone={sec.band ? "dark" : "light"} aria-labelledby={`h-${sec.id}`} className={sec.band ? "band-tan" : ""}>
            <Wave color={sec.band ? "var(--c-tan)" : "var(--c-caput)"} flip className={sec.band ? "bg-caput" : "bg-tan"} />
            <div className="container-k section-y">
              <Reveal>
                <h2 id={`h-${sec.id}`} className="h2">{sec.title}</h2>
                {sec.note && <p className="hand mt-1">{sec.note}</p>}
              </Reveal>
              <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {items.map(({ a, i }, k) => (
                  <li key={i}>
                    <Reveal delay={(k % 4) * 0.08}>
                      <button
                        type="button"
                        onClick={() => setOpen(i)}
                        className="lift tilted block w-full overflow-hidden rounded-2xl bg-cream text-left text-caput"
                        style={{ ["--tilt" as string]: k % 2 ? "1.5deg" : "-1.5deg" }}
                      >
                        <div className="aspect-square bg-moss text-coffee">
                          <Placeholder src={a.image} alt={a.title} />
                        </div>
                        <div className="p-4">
                          <h3 className="font-display text-lg font-bold">{a.title}</h3>
                          <p className="mt-1 text-sm text-coffee">{a.description}</p>
                        </div>
                      </button>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
      <Lightbox items={artworks} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </>
  );
}
