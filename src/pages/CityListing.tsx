import { useParams, useLocation } from "react-router-dom";
import { MapPin, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { getCityById, getAllCities } from "@/data/cityData";
import SearchBar from "@/components/SearchBar";

// Import monument images
// import delhiIndiaGate from "@/assets/image.png";
// import mumbaiGateway from "@/assets/image.png";
// import bangalorePalace from "@/assets/image.png";
// import hyderabadCharminar from "@/assets/image.png";
// import chennaiMarina from "@/assets/image.png";
// import kolkataVictoria from "@/assets/image.png";
// import puneShaniwar from "@/assets/image.png";
// import ahmedabadAshram from "@/assets/image.png";
// import jaipurHawa from "@/assets/image.png";
// import suratCastle from "@/assets/image.png";
// import lucknowImambara from "@/assets/image.png";

const CityListing = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const city = cityId ? getCityById(cityId) : null;
  const locationHook = useLocation();
  const searchParams = new URLSearchParams(locationHook.search);
  const selectedService = searchParams.get('service') || '';
  const selectedLocation = '';

  const prettyService = (() => {
    if (!selectedService) return "All Services";
    const s = selectedService.toLowerCase();
    if (s.includes("virtual")) return "Virtual Office";
    if (s.includes("cowork")) return "Coworking Space";
    if (s.includes("demand")) return "On Demand";
    if (s.includes("setup")) return "Business Setup";
    return selectedService;
  })();

  // derive sortBy from query
  const sortBy = searchParams.get('sort') || 'popularity';

  const filtered = city
    ? city.properties.filter((p) => {
        const serviceMatch = selectedService
          ? p.type.toLowerCase().includes(selectedService.toLowerCase().replace(/s$/, ""))
          : true;
        return serviceMatch;
      }).sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'price_low') return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
        if (sortBy === 'price_high') return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
        return 0;
      })
    : [];

  // Resolve hero image; fallback to city's provided heroImage or placeholder
  const getHeroImage = () => {
    return city?.heroImage || "/placeholder.svg";
  };

  if (!city) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">City Not Found</h1>
          <p className="text-muted-foreground mb-8">The city you're looking for doesn't exist.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      {/* Search and Results Header */}
      <section className="py-10 px-4 bg-gradient-to-br from-background via-card-hover to-background">
        <div className="container mx-auto">
          <div className="mb-6">
            <SearchBar />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                {prettyService} in {city.name}
              </h1>
              {/* location chip removed */}
            </div>
            <div className="text-sm text-muted-foreground">{filtered.length} result(s)</div>
          </div>
        </div>
      </section>

      {/* Properties Listing with Enhanced Design */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/30"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="container mx-auto relative z-10">
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {filtered.map((property, index) => (
                <div 
                  key={property.id}
                  className="animate-fade-in hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-muted/50 to-muted/20 rounded-full">
                <Building className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-2">No results found</h3>
              <p className="text-muted-foreground mb-2 max-w-md mx-auto leading-relaxed">
                Try adjusting your location or service from the search above.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Similar Spaces */}
      {filtered.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-6">Similar Spaces you may like</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {getAllCities()
                .filter((c) => c.id !== city.id)
                .flatMap((c) => c.properties.map((p) => ({ city: c, property: p })))
                .filter(({ property }) =>
                  selectedService ? property.type.toLowerCase().includes(selectedService.toLowerCase().replace(/s$/, "")) : true
                )
                .slice(0, 6)
                .map(({ property }, index) => (
                  <div key={property.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.08}s` }}>
                    <PropertyCard property={property} />
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default CityListing;