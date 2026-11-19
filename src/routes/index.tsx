import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { Paintbrush, Palette, Laptop, HardHat, CircleDot } from "lucide-react";
import { Placeholder } from "@/components/site/Placeholder";
import { SocialLinks } from "@/components/site/Socials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krupa Kotecha — Code & Color" },
      { name: "description", content: "Krupa Kotecha's corner of the internet: AI/ML and web projects alongside watercolor paintings." },
      { property: "og:title", content: "Krupa Kotecha — Code & Color" },
      { property: "og:description", content: "CSE undergrad, AI/ML and web dev, artist. Projects and paintings in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const doodles = [
  { Icon: Paintbrush, label: "paintbrush", pos: "left-[4%] top-[6%]", r: "-12deg", delay: "0s" },
  { Icon: Palette, label: "palette", pos: "right-[5%] top-[8%]", r: "10deg", delay: "1.2s" },
  { Icon: Laptop, label: "laptop", pos: "left-[3%] bottom-[10%] hidden md:flex", r: "6deg", delay: "2s" },
  { Icon: HardHat, label: "F1 helmet", pos: "right-[4%] bottom-[14%]", r: "-8deg", delay: "0.6s" },
  { Icon: CircleDot, label: "table tennis paddle", pos: "left-[46%] bottom-[4%] hidden lg:flex", r: "14deg", delay: "3s" },
];

function Home() {
  const reduce = useReducedMotion();
  const item = (i: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.08 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  });
  return (
    <>
      <section className="relative flex min-h-[calc(100svh-90px)] items-center overflow-hidden py-12">
        {doodles.map(({ Icon, label, pos, r, delay }) => (
          <span
            key={label}
            aria-hidden
            className={`doodle pointer-events-auto absolute z-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-caput/60 bg-cream/70 text-caput md:h-14 md:w-14 ${pos}`}
            style={{ ["--r" as string]: r, animationDelay: delay }}
          >
            <Icon className="h-6 w-6" />
          </span>
        ))}
        <div className="container-k relative z-10 grid items-center gap-10 md:grid-cols-[5fr_7fr] md:gap-14">
          <motion.div {...item(4)} className="mx-auto w-full max-w-[240px] sm:max-w-[300px] md:max-w-[340px]">
            <div className="tilt-frame relative" style={{ ["--tilt" as string]: "-3deg" }} tabIndex={0}>
              <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border-[2.5px] border-dashed border-cadet" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-[2.5px] border-cadet bg-moss text-coffee">
                <Placeholder label="Your photo here" alt="Portrait of Krupa Kotecha" />
              </div>
            </div>
          </motion.div>
          <div className="text-center md:text-left">
            <motion.p {...item(0)} className="hand text-coffee">welcome to my corner of the internet</motion.p>
            <motion.h1 {...item(1)} className="h1 mt-2">Hi, I'm Krupa Kotecha</motion.h1>
            <motion.p {...item(2)} className="mt-4 text-lg font-medium text-coffee md:text-xl">CSE undergrad, AI/ML and web dev, artist</motion.p>
            <motion.p {...item(2)} className="font-display mt-3 text-lg italic text-coffee md:text-xl">
              I build projects, question everything, and this is where it all lives.
            </motion.p>
            <motion.div {...item(3)}>
              <SocialLinks include={["GitHub", "LinkedIn", "Email", "Substack"]} className="mt-6 justify-center gap-x-6 gap-y-1 text-coffee md:justify-start" />
            </motion.div>
            <motion.div {...item(3)} className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
              <Link to="/projects" className="sticker w-full sm:w-auto" style={{ ["--tilt" as string]: "-1deg" }}>Projects</Link>
              <Link to="/artwork" className="sticker w-full sm:w-auto" style={{ ["--tilt" as string]: "1deg" }}>Artwork</Link>
              <Link to="/about" className="sticker w-full sm:w-auto" style={{ ["--tilt" as string]: "-1deg" }}>About me</Link>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="overflow-hidden border-y-2 border-dashed border-caput/50 py-3 text-caput" aria-label="Currently learning: LLMs and RAG pipelines">
        <div aria-hidden className="marquee-track flex w-max gap-12 whitespace-nowrap">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="hand">currently learning: LLMs and RAG pipelines ✦</span>
          ))}
        </div>
      </div>
      <div className="h-10" />
    </>
  );
}
