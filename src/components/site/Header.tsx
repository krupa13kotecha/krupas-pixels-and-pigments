import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Wave } from "./Wave";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/artwork", label: "Artwork" },
  { to: "/about", label: "About" },
] as const;

function NavLinks({ path, onNav, id }: { path: string; onNav?: () => void; id: string }) {
  return (
    <>
      {links.map((l) => {
        const active = path === l.to;
        return (
          <li key={l.to}>
            <Link
              to={l.to}
              onClick={onNav}
              aria-current={active ? "page" : undefined}
              className="relative inline-flex min-h-11 items-center rounded-full px-5 font-semibold"
            >
              {active && (
                <motion.span
                  layoutId={`pill-${id}`}
                  className="header-fill absolute inset-0 rounded-full"
                  style={{ background: "var(--header-fg)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="header-fill relative" style={{ color: active ? "var(--header-bg)" : "var(--header-fg)" }}>
                {l.label}
              </span>
            </Link>
          </li>
        );
      })}
    </>
  );
}

export function Header() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => setOpen(false), [path]);

  // Artwork page: switch header colors based on the zone under it.
  useEffect(() => {
    if (path !== "/artwork") return setDark(false);
    let raf = 0;
    const check = () => {
      raf = 0;
      const y = 80;
      let next = false;
      document.querySelectorAll<HTMLElement>("[data-header-zone]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= y && r.bottom > y) next = el.dataset["headerZone"] === "dark";
      });
      setDark(next);
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(check); };
    check();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, [path]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${dark ? "header-dark" : ""}`}>
      <div className="header-fill" style={{ background: "var(--header-bg)", color: "var(--header-fg)" }}>
        <nav aria-label="Main" className="container-k relative flex h-16 items-center justify-between md:h-[72px]">
          <Link to="/" className="font-display text-2xl font-bold md:text-[1.75rem]" style={{ color: "var(--header-fg)" }}>
            Krupa
          </Link>
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            <NavLinks path={path} id="desk" />
          </ul>
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 px-4 font-semibold md:hidden"
            style={{ borderColor: "var(--header-fg)" }}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X aria-hidden className="h-4 w-4" /> : <Menu aria-hidden className="h-4 w-4" />}
            Menu
          </button>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.ul
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center gap-2 pb-4 md:hidden"
            >
              <NavLinks path={path} id="mob" onNav={() => setOpen(false)} />
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      <Wave color="var(--header-bg)" className="-mt-px" />
    </header>
  );
}
