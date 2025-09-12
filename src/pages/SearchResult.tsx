import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { getCityById, getAllCities } from "@/data/cityData";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const cityId = searchParams.get('city') || '';
  const solution = searchParams.get('solution') || '';
  
  const city = getCityById(cityId);
  const allCities = getAllCities();
  
  // Get solution display name
  const getSolutionName = (solutionValue: string) => {
    const solutionMap: Record<string, string> = {
      'virtual-office': 'Virtual Office',
      'coworking-space': 'Coworking Space', 
      'on-demand': 'On Demand',
      'event-spaces': 'Event Spaces'
    };
    return solutionMap[solutionValue] || solutionValue;
  };

  // Filter properties based on solution type (for demo, we'll show all properties)
  const filteredProperties = city?.properties || [];

  // If searching across all cities when no specific city
  const allProperties = !city ? 
    allCities.flatMap(c => c.properties) : 
    filteredProperties;

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-primary rounded-full animate-ping opacity-40"></div>
        </div>

        {/* Back Button */}
        <div className="container mx-auto relative z-10 mb-8">
          <Button variant="outline" asChild className="hover-lift">
            <Link to={`/solutions/${solution}`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Search
            </Link>
          </Button>
        </div>

        {/* Content */}
        <div className="container mx-auto relative z-10 text-center">
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-6 px-6 py-2 border-primary/20">
              <Filter className="w-4 h-4 mr-2" />
              Search Results
            </Badge>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {getSolutionName(solution)} in
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                {city?.name || 'All Cities'}
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Found {allProperties.length} premium workspace{allProperties.length !== 1 ? 's' : ''} matching your criteria
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{city?.name || 'All Cities'}</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <span>{getSolutionName(solution)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/30"></div>
        
        <div className="container mx-auto relative z-10">
          {allProperties.length > 0 ? (
            <>
              {/* Results Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {allProperties.map((property, index) => (
                  <div 
                    key={property.id}
                    className="animate-fade-in hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <PropertyCard property={property} />
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-16">
                <Button variant="outline" className="px-8 py-3">
                  Load More Results
                </Button>
              </div>
            </>
          ) : (
            /* No Results */
            <div className="text-center py-20">
              <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-muted/50 to-muted/20 rounded-full">
                <Filter className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                No Results Found
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
                We couldn't find any {getSolutionName(solution).toLowerCase()} spaces in {city?.name || 'your selected location'}. 
                Try searching in a different city or explore other solutions.
              </p>
              <div className="space-x-4">
                <Button asChild>
                  <Link to={`/solutions/${solution}`}>
                    Modify Search
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/services">
                    Browse All Solutions
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SearchResults;