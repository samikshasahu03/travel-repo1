export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="container relative z-10 mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-accent p-8 text-center text-primary-foreground shadow-xl md:p-12">
          <h3 className="text-2xl font-extrabold md:text-3xl">
            Ready to Start Your Adventure?
          </h3>
          <p className="mt-2 text-white/90">
            Chat with our travel experts today and get a free custom itinerary.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:bookings@aerovoyage.com"
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:opacity-95"
            >
              Email Us
            </a>
            <a
              href="#destinations"
              className="rounded-md bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/25"
            >
              Browse Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
