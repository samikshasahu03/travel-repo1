import { Plane, Hotel, MapPin, Headphones, Star, CalendarCheck, Bell, HotelIcon } from "lucide-react";

const services = [
  {
    title: "Flight & Hotel Booking Assistance",
    desc: "Find and book the best flights, hotels, and accommodations with real-time pricing and deals.",
    icon: HotelIcon,
  },
  {
    title: "Smart Destination Suggestions",
    desc: "Competitive deals and transparent pricing.",
    icon: Star,
  },
  {
    title: "Activity & Experience Booking",
    desc: "Discover and reserve local experiences, tours, and activities without the hassle.",
    icon: CalendarCheck,
  },
  {
    title: "Real-Time Travel Alerts",
    desc: "Receive instant notifications about flight delays, weather changes, or travel disruptions.",
    icon: Bell,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-orange-50 py-16 md:py-24">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <h2 className="text-3xl font-extrabold text-gray-800 md:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            Plan your dream journey in just a few taps. Personalized itineraries, top attractions, and hidden gems included
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, desc, icon: Icon }, idx) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{ transitionDelay: `${idx * 100}ms` }} // staggered animation effect
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-tr from-orange-500 to-orange-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
