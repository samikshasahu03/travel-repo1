import { useState } from "react";
import { Menu, X, Plane } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/70 backdrop-blur-md dark:bg-slate-900/60">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Plane className="h-5 w-5" />
          </span>
          <span className="text-xl font-extrabold tracking-tight">
            AeroVoyage
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Book Now
          </a>
        </div>

        <button
          aria-label="Toggle Menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden">
          <div className="container mx-auto grid gap-2 pb-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
