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
          <span className="inline-flex items-center rounded-full bg-orange-100/20 px-3 py-1 text-sm font-medium text-orange-500">
            Featured • Best Sellers
          </span>
          <h1 className="mt-6 text-3xl font-extrabold leading-tight md:text-5xl">
            Your adventure starts here.
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Discover breathtaking destinations, plan your perfect trip, and make every journey unforgettable. From hidden gems to iconic landmarks,Your next memory is just a click away.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#destinations"
              className="inline-flex items-center rounded-md bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105 transition transform duration-200"
            >
              Explore Destinations
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition duration-200"
            >
              Our Services
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-4">
            {[
              "/images/thumb1.jpeg",
              "/images/thumb2.jpeg",
              "/images/thumb3.jpeg",
              "/images/thumb4.jpeg",
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`thumb-${idx}`}
                className="h-16 w-full rounded object-cover transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>

        {/* Right: Booking form */}
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md border border-white/20 transition-transform hover:scale-105 duration-300">
          <h3 className="text-lg font-semibold text-white">Search & Book</h3>
          <p className="mt-1 text-sm text-white/70">
            Search packages and request a quote instantly.
          </p>

          <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
            <input
              name="destination"
              placeholder="Destination (e.g., Bali)"
              className="rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                name="checkin"
                className="w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <input
                type="date"
                name="checkout"
                className="w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <select
              name="guests"
              className="rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
            </select>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="flex-1 rounded-md bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:scale-105 transition-transform duration-200"
              >
                Request Quote
              </button>
              <a
                href="#contact"
                className="inline-flex items-center rounded-md border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-orange-500 hover:text-white transition-all duration-200"
              >
                Contact
              </a>
            </div>

            <div className="mt-2 text-xs text-white/70">
              Or chat with JournoBot for instant help.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
