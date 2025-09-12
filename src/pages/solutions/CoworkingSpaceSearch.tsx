import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Users, 
  Wifi, 
  Coffee, 
  Printer, 
  Shield, 
  Clock, 
  MapPin,
  CheckCircle,
  Star,
  Building,
  Zap,
  Calendar,
  CreditCard,
  UserCheck,
  Briefcase
} from "lucide-react";
import { getAllCities } from "@/data/cityData";

const CoworkingSpaceSearch = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSolution, setSelectedSolution] = useState("");
  const [filteredResults, setFilteredResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const cities = getAllCities();

  // Mock data for coworking spaces in different cities
  const coworkingData = {
    mumbai: [
      { id: 1, name: "WeWork BKC", address: "Bandra Kurla Complex, Mumbai", price: "₹3,999/month", rating: 4.8, features: ["24/7 Access", "High-Speed WiFi", "Meeting Rooms", "Events"] },
      { id: 2, name: "Awfis Andheri", address: "Andheri East, Mumbai", price: "₹2,999/month", rating: 4.7, features: ["Flexible Desks", "Community", "Pantry", "Parking"] },
      { id: 3, name: "IndiQube Lower Parel", address: "Lower Parel, Mumbai", price: "₹3,499/month", rating: 4.6, features: ["Premium Space", "Collaboration Zones", "Cafeteria", "Gym"] },
      { id: 4, name: "Regus Powai", address: "Powai, Mumbai", price: "₹4,299/month", rating: 4.8, features: ["Professional Environment", "Business Lounge", "Reception", "IT Support"] },
      { id: 5, name: "91springboard Goregaon", address: "Goregaon West, Mumbai", price: "₹2,499/month", rating: 4.5, features: ["Startup Community", "Networking Events", "Mentorship", "Game Zone"] },
      { id: 6, name: "myHQ Malad", address: "Malad West, Mumbai", price: "₹1,999/month", rating: 4.4, features: ["Cost-effective", "Basic Amenities", "Good Connectivity", "Flexible Plans"] }
    ],
    delhi: [
      { id: 7, name: "WeWork Connaught Place", address: "CP, New Delhi", price: "₹3,799/month", rating: 4.9, features: ["Prime Location", "Metro Access", "Premium Facilities", "Global Community"] },
      { id: 8, name: "Awfis Cyber Hub", address: "DLF Cyber Hub, Gurgaon", price: "₹3,299/month", rating: 4.7, features: ["IT Hub", "Modern Design", "Food Court Access", "Parking"] },
      { id: 9, name: "IndiQube Nehru Place", address: "Nehru Place, Delhi", price: "₹2,799/month", rating: 4.5, features: ["Commercial Center", "Meeting Rooms", "Cafeteria", "Event Space"] },
      { id: 10, name: "Regus Dwarka", address: "Sector 8, Dwarka", price: "₹2,999/month", rating: 4.6, features: ["Business Center", "Professional Setup", "Reception Services", "IT Support"] },
      { id: 11, name: "91springboard Lajpat Nagar", address: "Lajpat Nagar, Delhi", price: "₹2,199/month", rating: 4.3, features: ["Community Focus", "Networking", "Mentorship Programs", "Events"] },
      { id: 12, name: "myHQ Rajouri Garden", address: "Rajouri Garden, Delhi", price: "₹1,799/month", rating: 4.2, features: ["Affordable", "Basic Facilities", "Good Location", "Flexible Memberships"] }
    ],
    bangalore: [
      { id: 13, name: "WeWork Koramangala", address: "Koramangala, Bangalore", price: "₹3,499/month", rating: 4.9, features: ["Startup Hub", "Premium Amenities", "Community Events", "Wellness Room"] },
      { id: 14, name: "Awfis Whitefield", address: "Whitefield, Bangalore", price: "₹2,899/month", rating: 4.7, features: ["IT Corridor", "Modern Workspace", "Collaboration Areas", "Cafeteria"] },
      { id: 15, name: "IndiQube Indiranagar", address: "Indiranagar, Bangalore", price: "₹3,199/month", rating: 4.6, features: ["Prime Area", "Designer Space", "Meeting Rooms", "Recreation Zone"] },
      { id: 16, name: "Regus HSR Layout", address: "HSR Layout, Bangalore", price: "₹3,799/month", rating: 4.8, features: ["Professional Environment", "Business Lounge", "Secretarial Services", "IT Support"] },
      { id: 17, name: "91springboard Marathahalli", address: "Marathahalli, Bangalore", price: "₹2,399/month", rating: 4.4, features: ["Tech Community", "Networking Events", "Skill Development", "Game Room"] },
      { id: 18, name: "myHQ Jayanagar", address: "Jayanagar, Bangalore", price: "₹1,899/month", rating: 4.3, features: ["Budget-friendly", "Essential Amenities", "Community Feel", "Flexible Options"] }
    ]
  };

  useEffect(() => {
    if (selectedCity || selectedSolution) {
      let results: any[] = [];
      
      if (selectedCity && coworkingData[selectedCity as keyof typeof coworkingData]) {
        results = coworkingData[selectedCity as keyof typeof coworkingData];
      } else if (selectedCity) {
        // If city not in our data, show generic results
        results = coworkingData.mumbai.slice(0, 6);
      }
      
      // If no city selected but solution selected, show all coworking results
      if (!selectedCity && selectedSolution === 'coworking-space') {
        results = [...coworkingData.mumbai, ...coworkingData.delhi, ...coworkingData.bangalore].slice(0, 6);
      }
      
      setFilteredResults(results);
      setShowResults(results.length > 0);
    } else {
      setShowResults(false);
      setFilteredResults([]);
    }
  }, [selectedCity, selectedSolution]);

  const solutions = [
    { value: "virtual-office", label: "Virtual Office" },
    { value: "coworking-space", label: "Coworking Space" },
    { value: "on-demand", label: "On Demand" },
    { value: "business-setup", label: "Business Setup" }
  ];

  const coworkingServices = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Day Pass",
      description: "Flexible daily access to premium coworking spaces",
      features: ["Full Day Access", "High-Speed WiFi", "Free Refreshments", "Meeting Room Access"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Desk",
      description: "Your own personal workspace in a shared environment",
      features: ["Fixed Desk Space", "Personal Storage", "24/7 Access", "Mail Handling"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Team Cabins",
      description: "Private office spaces for teams of 3-10 members",
      features: ["Private Cabin", "Customizable Space", "Team Collaboration", "Enhanced Privacy"]
    }
  ];

  const subscriptionPackages = [
    {
      type: "Basic",
      price: "₹2,999",
      period: "/month",
      features: ["Hot Desk Access", "5 Days/Week", "Basic Amenities", "Community Access"],
      popular: false
    },
    {
      type: "Premium",
      price: "₹4,999", 
      period: "/month",
      features: ["Dedicated Desk", "7 Days/Week", "Premium Amenities", "Meeting Room Credits"],
      popular: true
    },
    {
      type: "Enterprise",
      price: "₹9,999",
      period: "/month", 
      features: ["Team Cabin", "24/7 Access", "All Amenities", "Priority Support"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Amit Patel",
      company: "Digital Marketing Agency",
      rating: 5,
      comment: "The coworking space has transformed our productivity and team collaboration."
    },
    {
      name: "Sarah Johnson",
      company: "Freelance Designer",
      rating: 5,
      comment: "Perfect environment for focused work with great networking opportunities."
    }
  ];

  const handleSearch = () => {
    if (selectedCity && selectedSolution) {
      navigate(`/search-results?city=${selectedCity}&solution=${selectedSolution}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Search Bar */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text font-header">
              Coworking Space Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-content">
              Join vibrant communities of entrepreneurs and professionals in flexible, 
              well-equipped workspaces designed for productivity and collaboration.
            </p>
          </div>

          {/* Search Section */}
          <Card className="glass-card max-w-4xl mx-auto p-8 border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Select City</label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="border-primary/20 focus:border-primary">
                    <SelectValue placeholder="Choose your city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.id} value={city.id}>
                        {city.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Select Solution</label>
                <Select value={selectedSolution} onValueChange={setSelectedSolution}>
                  <SelectTrigger className="border-primary/20 focus:border-primary">
                    <SelectValue placeholder="Choose solution type" />
                  </SelectTrigger>
                  <SelectContent>
                    {solutions.map((solution) => (
                      <SelectItem key={solution.value} value={solution.value}>
                        {solution.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button 
                  onClick={handleSearch}
                  disabled={!selectedCity || !selectedSolution}
                  className="w-full btn-hero"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Search Spaces
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Coworking Services */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-header">
              Coworking Space Options
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-content">
              Flexible workspace solutions designed for modern professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coworkingServices.map((service, index) => (
              <Card key={index} className="glass-card border-primary/20 hover:border-accent/30 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary">{service.icon}</span>
                  </div>
                  <CardTitle className="text-xl font-header">{service.title}</CardTitle>
                  <CardDescription className="font-content">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span className="text-sm font-content">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Reviews */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-header">
              Member Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 font-content italic">
                    "{testimonial.comment}"
                  </p>
                  <div>
                    <p className="font-semibold font-header">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground font-content">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Packages */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-header">
              Subscription Packages
            </h2>
            <p className="text-xl text-muted-foreground font-content">
              Basic, Premium, and Enterprise options to suit every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {subscriptionPackages.map((pkg, index) => (
              <Card key={index} className={`glass-card relative ${pkg.popular ? 'border-primary ring-2 ring-primary/20' : 'border-primary/20'} hover:scale-105 transition-all duration-300`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-header">{pkg.type}</CardTitle>
                  <div className="text-4xl font-bold font-header">
                    {pkg.price}<span className="text-lg text-muted-foreground">{pkg.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="font-content">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.popular ? 'btn-hero' : 'btn-outline'}`}>
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clear CTAs */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-header">
            Join Our Thriving Community
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-content">
            Connect, collaborate, and grow with like-minded professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero px-8 py-4">
              <Briefcase className="w-5 h-5 mr-2" />
              Book Now
            </Button>
            <Button variant="outline" className="px-8 py-4 border-primary/30">
              <UserCheck className="w-5 h-5 mr-2" />
              Explore Plans
            </Button>
            <Button variant="outline" className="px-8 py-4 border-primary/30">
              <MapPin className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Filtered Results Section */}
      {showResults && (
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-header">
                Available Coworking Spaces
              </h2>
              <p className="text-xl text-muted-foreground font-content">
                Found {filteredResults.length} coworking spaces {selectedCity && `in ${cities.find(c => c.id === selectedCity)?.name}`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredResults.map((result) => (
                <Card key={result.id} className="glass-card border-primary/20 hover:border-accent/30 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-lg font-header">{result.name}</CardTitle>
                    <CardDescription className="font-content">{result.address}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary font-header">{result.price}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-content">{result.rating}</span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {result.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            <span className="text-sm font-content">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full btn-hero">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default CoworkingSpaceSearch;