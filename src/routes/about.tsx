import { createFileRoute } from "@tanstack/react-router";
import { Placeholder } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Krupa Kotecha" },
      { name: "description", content: "About Krupa: a CSE undergrad between code and color, F1 fan, table tennis player and watercolor painter." },
      { property: "og:title", content: "About — Krupa Kotecha" },
      { property: "og:description", content: "Somewhere between code and color: who Krupa is, what she's doing now, and what came before." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const card = "lift rounded-3xl border-[2.5px] border-olive p-6 text-coffee md:p-8";

function About() {
  return (
    <section className="section-y">
      <div className="container-k">
        <Reveal><h1 className="h1 mb-10 md:mb-14">About me</h1></Reveal>
        <div className="grid gap-10 md:grid-cols-[7fr_5fr] md:gap-14">
          <Reveal className="order-2 md:order-1">
            <div className={`${card} bg-cream space-y-4 text-[1.0625rem]`}>
              <p className="font-display text-xl font-bold text-caput md:text-2xl">Hi, I'm Krupa, welcome to my corner of the internet!</p>
              <p>I'm a CSE undergrad who lives somewhere between code and color. Some days that means debugging code until it finally behaves; other nights it's a watercolor painting or a sketch. This place holds both sides: my tech projects, and my paintings across whatever mediums I'm curious about that month.</p>
              <p>Away from the screen, I'm usually found in one of a few places: glued to an F1 race weekend (I even ended up designing rollcage parts for my university's formula racing team), playing table tennis, a sport I've played all my life, out on a run, a habit I've only just picked up and am still negotiating with, or spiraling down a book.</p>
            </div>
          </Reveal>
          <Reveal className="order-1 md:order-2" delay={0.1}>
            <div className="mx-auto max-w-[320px]">
              <div className="tilt-frame" style={{ ["--tilt" as string]: "3deg" }} tabIndex={0}>
                <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border-[2.5px] border-olive bg-moss text-olive shadow-[6px_6px_0_var(--c-olive)]">
                  <Placeholder label="Your photo here" alt="Krupa Kotecha" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { k: "Currently", t: "Still an undergrad, sharpening my AI/ML skills and diving deep into LLMs and RAG pipelines by trying to build projects.", tilt: "-1deg" },
            { k: "Previously", t: "Web Dev Intern at Trinity Unicepts Pvt. Ltd., Rajkot (on-site), where I worked with the team on live website projects.", tilt: "1deg" },
          ].map((c, i) => (
            <Reveal key={c.k} delay={i * 0.08}>
              <div className={`${card} relative h-full bg-moss`} style={{ ["--tilt" as string]: "0deg" }}>
                <span className="mb-3 inline-block rounded-full bg-olive px-4 py-1 text-sm font-bold uppercase tracking-wider text-cream" style={{ transform: `rotate(${c.tilt})` }}>{c.k}</span>
                <p>{c.t}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <div className={`${card} bg-cream text-center`}>
            <p className="font-display mx-auto max-w-2xl text-lg italic md:text-xl">Here I'll be sharing what I'm learning and what I've built along the way. If any of it resonates, I'd love to connect. I love meeting new people.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
