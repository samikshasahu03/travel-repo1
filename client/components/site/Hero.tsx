export default function Hero() {
  const bg =
    "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.25)), url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop)";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget as HTMLFormElement);
    const destination = form.get("destination") || "";
    const checkin = form.get("checkin") || "";
    const checkout = form.get("checkout") || "";
    const guests = form.get("guests") || "1";

    const subject = encodeURIComponent(`Booking Inquiry: ${destination}`);
    const body = encodeURIComponent(
      `Hi,\n\nI would like to inquire about bookings for ${destination}.\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests}\n\nPlease get back to me with available packages.\n\nThanks!`,
    );

    window.location.href = `mailto:bookings@aerovoyage.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: bg }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="container relative z-10 mx-auto grid gap-8 py-20 md:grid-cols-2 md:items-center">
        {/* Left: Hero copy */}
        <div className="mx-auto max-w-2xl text-white md:mx-0">
          <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
            Featured • Best Sellers
          </span>
          <h1 className="mt-6 text-3xl font-extrabold leading-tight md:text-5xl">
            Plan. Book. Explore.
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Seamless bookings, curated experiences, and local experts ready to
            help. Find your next unforgettable trip with AeroVoyage.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#destinations"
              className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow transition hover:opacity-95"
            >
              Explore Destinations
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              Our Services
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-4">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop"
              alt="thumb"
              className="h-16 w-full rounded object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop"
              alt="thumb"
              className="h-16 w-full rounded object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1502920917128-1aa500764ce7?q=80&w=800&auto=format&fit=crop"
              alt="thumb"
              className="h-16 w-full rounded object-cover hidden md:block"
            />
            <img
              src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=800&auto=format&fit=crop"
              alt="thumb"
              className="h-16 w-full rounded object-cover hidden md:block"
            />
          </div>
        </div>

        {/* Right: Booking form */}
        <div className="mx-auto w-full max-w-md rounded-2xl bg-card/80 p-6 shadow-xl backdrop-blur">
          <h3 className="text-lg font-semibold">Search & Book</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Search packages and request a quote instantly.
          </p>

          <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
            <label className="sr-only">Destination</label>
            <input
              name="destination"
              placeholder="Destination (e.g., Bali)"
              className="rounded-md border px-3 py-2 text-sm"
            />

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="sr-only">Check-in</label>
                <input
                  type="date"
                  name="checkin"
                  className="w-full rounded-md border px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="sr-only">Check-out</label>
                <input
                  type="date"
                  name="checkout"
                  className="w-full rounded-md border px-3 py-2 text-sm"
                />
              </div>
            </div>

            <select
              name="guests"
              className="rounded-md border px-3 py-2 text-sm"
            >
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
            </select>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="flex-1 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-95"
              >
                Request Quote
              </button>
              <a
                href="#contact"
                className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-accent/6"
              >
                Contact
              </a>
            </div>

            <div className="mt-2 text-xs text-muted-foreground">
              Or chat with AeroBot for instant help.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
