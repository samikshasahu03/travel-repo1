type Destination = {
  image: string;
  name: string;
  duration: string;
  price: string;
};

export default function DestinationCard({
  image,
  name,
  duration,
  price,
}: Destination) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-card shadow-sm transition hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
            {duration}
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Starting from</p>
          <p className="text-base font-bold">{price}</p>
        </div>
        <a
          href="#contact"
          className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
