import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/hosting", label: "Hosting" },
  { to: "/impact", label: "Impact" },
  { to: "/about", label: "About" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/70 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-3 items-center px-6">
        <div className="flex items-center gap-8">
          <button aria-label="Menu" onClick={() => setOpen((v) => !v)} className="md:hidden">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="transition-colors hover:text-foreground" activeProps={{ className: "text-primary" }}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <Link to="/" className="justify-self-center text-lg font-semibold tracking-[0.35em]">
          DRAV<span className="text-primary">TECH</span>
        </Link>
        <Link to="/contact" className="justify-self-end rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
          Hire us
        </Link>
      </div>
      {open && (
        <nav className="fade-up flex flex-col gap-1 bg-background px-6 pb-6 md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-3 text-2xl font-semibold">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
