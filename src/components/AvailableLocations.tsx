type AvailableLocationsProps = {
  cities: string[];
  heading?: string;
};

const AvailableLocations = ({ cities, heading = "We are available in" }: AvailableLocationsProps) => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{heading}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {cities.map((city) => (
          <div
            key={city}
            className="px-4 py-3 rounded-xl border border-primary/20 bg-card hover:bg-card-hover transition-colors text-center text-sm font-medium"
          >
            {city}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvailableLocations;



