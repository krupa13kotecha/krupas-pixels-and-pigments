import { SocialLinks } from "./Socials";
import { Wave } from "./Wave";

export function Footer() {
  return (
    <footer data-header-zone="dark" style={{ color: "var(--footer-fg)" }}>
      <Wave color="var(--footer-bg)" flip />
      <div style={{ background: "var(--footer-bg)" }} className="pb-10 pt-10 text-center">
        <div className="container-k flex flex-col items-center gap-6">
          <p className="font-display text-2xl italic">Thanks for stopping by.</p>
          <SocialLinks className="w-full max-w-3xl justify-center gap-x-8 gap-y-2 sm:justify-evenly" linkClass="[color:var(--footer-link)]" />
          <p className="text-sm opacity-90">© 2026 Krupa Kotecha</p>
        </div>
      </div>
    </footer>
  );
}
