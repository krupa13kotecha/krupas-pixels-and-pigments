import { createFileRoute } from "@tanstack/react-router";
import { Github } from "lucide-react";
import { projects } from "@/data/content";
import { Placeholder } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Krupa Kotecha" },
      { name: "description", content: "AI/ML and full-stack projects by Krupa Kotecha: a resume parser platform and handwritten answerscript evaluation." },
      { property: "og:title", content: "Projects — Krupa Kotecha" },
      { property: "og:description", content: "What I built, and what it taught me: ML pipelines, OCR, NLP and full-stack apps." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <section className="section-y">
      <div className="container-k">
        <Reveal>
          <h1 className="h1">Projects</h1>
          <p className="hand mt-2 text-tan">what I built, and what it taught me</p>
        </Reveal>
        <div className="mt-12">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <article className={`grid items-start gap-8 py-12 md:grid-cols-2 md:gap-12 ${i > 0 ? "border-t-2 border-slate" : ""}`}>
                <div className={`lift aspect-video overflow-hidden rounded-3xl border-[2.5px] border-slate bg-slate/30 text-slate ${i % 2 ? "md:order-2" : ""}`}>
                  {p.video ? (
                    <video src={p.video} controls preload="none" className="h-full w-full object-cover" />
                  ) : (
                    <Placeholder src={p.media} alt={`${p.title} demo`} label="Demo coming soon" className="text-cream" />
                  )}
                </div>
                <div className={i % 2 ? "md:order-1" : ""}>
                  <h2 className="h3">{p.title}</h2>
                  <p className="mt-3 font-bold">{p.summary}</p>
                  <p className="mt-3 opacity-95">{p.description}</p>
                  <h3 className="hand mt-5 text-tan">What I learned</h3>
                  <p className="mt-1 opacity-95">{p.learned}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
                    {p.stack.map((s) => <li key={s} className="chip">{s}</li>)}
                  </ul>
                  <a href={p.github} className="sticker mt-7" style={{ ["--tilt" as string]: i % 2 ? "1deg" : "-1deg" }}>
                    <Github aria-hidden className="h-5 w-5" /> View on GitHub
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
