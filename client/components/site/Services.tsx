import { Plane, Hotel, MapPin, Headphones } from "lucide-react";

const services = [
  {
    title: "Tailored Packages",
    desc: "Custom itineraries built around your preferences.",
    icon: Plane,
  },
  {
    title: "Best Price Guarantee",
    desc: "Competitive deals and transparent pricing.",
    icon: Hotel,
  },
  {
    title: "Expert Guidance",
    desc: "Local insights and curated recommendations.",
    icon: MapPin,
  },
  {
    title: "24/7 Support",
    desc: "We’re here any time you need us.",
    icon: Headphones,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mb-10 flex flex-col items-center text-center md:mb-14">
          <h2 className="text-3xl font-extrabold md:text-4xl">Our Services</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            From planning to booking to support on the go—AeroVoyage handles it
            all.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
