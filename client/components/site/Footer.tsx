export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-white/70 py-8 dark:bg-slate-900/60">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 text-center md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} AeroVoyage. All rights reserved.
        </p>
        <div className="text-sm text-muted-foreground">
          Built for unforgettable journeys.
        </div>
      </div>
    </footer>
  );
}
