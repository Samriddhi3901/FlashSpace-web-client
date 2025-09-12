import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Star, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { getCityById } from "@/data/cityData";

// Import monument images
import delhiIndiaGate from "@/assets/image.png";
import mumbaiGateway from "@/assets/image.png";
import bangalorePalace from "@/assets/image.png";
import hyderabadCharminar from "@/assets/image.png";
import chennaiMarina from "@/assets/image.png";
import kolkataVictoria from "@/assets/image.png";
import puneShaniwar from "@/assets/image.png";
import ahmedabadAshram from "@/assets/image.png";
import jaipurHawa from "@/assets/image.png";
import suratCastle from "@/assets/image.png";
import lucknowImambara from "@/assets/image.png";

const CityListing = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const city = cityId ? getCityById(cityId) : null;

  // Map city IDs to imported images
  const getHeroImage = (cityId: string) => {
    switch (cityId) {
      case 'delhi':
        return delhiIndiaGate;
      case 'mumbai':
        return mumbaiGateway;
      case 'bangalore':
        return bangalorePalace;
      case 'hyderabad':
        return hyderabadCharminar;
      case 'chennai':
        return chennaiMarina;
      case 'kolkata':
        return kolkataVictoria;
      case 'pune':
        return puneShaniwar;
      case 'ahmedabad':
        return ahmedabadAshram;
      case 'jaipur':
        return jaipurHawa;
      case 'surat':
        return suratCastle;
      case 'lucknow':
        return lucknowImambara;
      default:
        return city?.heroImage || '';
    }
  };

  if (!city) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">City Not Found</h1>
          <p className="text-muted-foreground mb-8">The city you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with City Info */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0">
          <img 
            src={getHeroImage(city.id)} 
            alt={`${city.name} - Famous Monument`}
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10"></div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-accent rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full animate-ping opacity-30" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Back Home Button - Top Right */}
        <div className="absolute top-6 right-6 z-20">
          <Button variant="outline" asChild className="text-white border-white/30 hover:bg-white/10 backdrop-blur-md hover-lift transition-all duration-300 shadow-lg">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back Home
            </Link>
          </Button>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Badge variant="outline" className="mb-6 border-accent/50 text-accent bg-accent/10 backdrop-blur-md px-6 py-2 text-sm font-medium">
              <MapPin className="w-4 h-4 mr-2" />
              Explore {city.name}
            </Badge>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Welcome to 
              <br />
              <span className="gradient-text-accent bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                {city.name}
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              {city.description}
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* City Background & Monuments */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <div className="animate-fade-in">
              <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-medium border-primary/20">
                About {city.name}
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Discover {city.name}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12 font-light">
                {city.backgroundInfo}
              </p>
            </div>
          </div>

          {/* Famous Monuments with Enhanced Design */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
              Famous Landmarks
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {city.famousMonuments.map((monument, index) => (
                <Card key={index} className="group hover-lift transition-all duration-500 overflow-hidden border-0 shadow-lg hover:shadow-2xl bg-gradient-to-br from-card via-card/95 to-card/90">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={city.monumentImages[index % city.monumentImages.length]}
                      alt={monument}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-lg drop-shadow-lg">{monument}</h4>
                      <div className="w-full h-1 bg-gradient-to-r from-accent to-primary rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Stats Cards */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Building, label: "Premium Spaces", value: `${city.properties.length}+`, color: "from-blue-500/20 to-blue-600/10" },
              { icon: Users, label: "Happy Clients", value: "500+", color: "from-green-500/20 to-green-600/10" },
              { icon: Star, label: "Average Rating", value: "4.8", color: "from-yellow-500/20 to-yellow-600/10" },
              { icon: MapPin, label: "Prime Locations", value: "10+", color: "from-purple-500/20 to-purple-600/10" }
            ].map((stat, index) => (
              <Card key={index} className={`text-center p-8 hover-lift transition-all duration-500 border-0 shadow-lg hover:shadow-xl bg-gradient-to-br ${stat.color} backdrop-blur-sm group`}>
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-primary/10">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </Card>
            ))}
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
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-6 py-2 border-primary/20">
              Available Properties
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Premium Spaces in {city.name}
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Choose from our carefully curated workspace solutions
            </p>
          </div>

          {city.properties.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {city.properties.map((property, index) => (
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
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Coming Soon to {city.name}
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
                We're working on bringing premium workspace solutions to {city.name}. 
                Stay tuned for updates!
              </p>
              <Button asChild className="btn-hero hover-lift">
                <Link to="/list-your-space">List Your Space</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CityListing;