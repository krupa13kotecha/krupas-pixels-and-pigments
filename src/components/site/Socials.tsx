import { Github, Linkedin, Mail, Instagram, Newspaper } from "lucide-react";
import { socials } from "@/data/content";

const all = [
  { name: "GitHub", href: socials.github, Icon: Github },
  { name: "LinkedIn", href: socials.linkedin, Icon: Linkedin },
  { name: "Email", href: socials.email, Icon: Mail },
  { name: "Substack", href: socials.substack, Icon: Newspaper },
  { name: "Instagram", href: socials.instagram, Icon: Instagram },
];

export function SocialLinks({ include, className = "", linkClass = "" }: { include?: string[]; className?: string; linkClass?: string }) {
  const items = include ? all.filter((s) => include.includes(s.name)) : all;
  return (
    <ul className={`flex flex-wrap ${className}`}>
      {items.map(({ name, href, Icon }) => (
        <li key={name}>
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className={`social-link inline-flex min-h-11 items-center gap-2 font-medium underline-offset-4 hover:underline ${linkClass}`}
          >
            <Icon aria-hidden className="social-icon h-5 w-5" />
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}
