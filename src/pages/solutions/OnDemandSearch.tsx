import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Clock, 
  Calendar, 
  MapPin, 
  Wifi, 
  Coffee, 
  Presentation,
  CheckCircle,
  Star,
  Zap,
  Users,
  Building2,
  CreditCard,
  Phone,
  Briefcase
} from "lucide-react";
import { getAllCities } from "@/data/cityData";

const OnDemandSearch = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSolution, setSelectedSolution] = useState("");
  const [filteredResults, setFilteredResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const cities = getAllCities();

  // Mock data for on-demand spaces in different cities
  const onDemandData = {
    mumbai: [
      { id: 1, name: "BKC Meeting Room Premium", address: "Bandra Kurla Complex, Mumbai", price: "₹599/hour", rating: 4.8, features: ["AV Equipment", "Video Conferencing", "Catering", "Parking"] },
      { id: 2, name: "Andheri Event Space", address: "Andheri East, Mumbai", price: "₹1,299/day", rating: 4.7, features: ["Large Capacity", "Stage Setup", "Sound System", "AC"] },
      { id: 3, name: "Lower Parel Boardroom", address: "Lower Parel, Mumbai", price: "₹399/hour", rating: 4.6, features: ["Executive Setup", "Whiteboard", "WiFi", "Refreshments"] },
      { id: 4, name: "Powai Training Center", address: "Powai, Mumbai", price: "₹899/day", rating: 4.5, features: ["Training Setup", "Projector", "Chairs", "Break Area"] },
      { id: 5, name: "Malad Conference Hall", address: "Malad West, Mumbai", price: "₹299/hour", rating: 4.4, features: ["Basic Setup", "Good Lighting", "AC", "Security"] },
      { id: 6, name: "Goregaon Workshop Space", address: "Goregaon West, Mumbai", price: "₹1,599/day", rating: 4.6, features: ["Workshop Setup", "Tools Available", "Large Space", "Parking"] }
    ],
    delhi: [
      { id: 7, name: "CP Conference Premium", address: "Connaught Place, Delhi", price: "₹699/hour", rating: 4.9, features: ["Prime Location", "Modern AV", "Metro Access", "Catering"] },
      { id: 8, name: "Cyber City Event Hall", address: "DLF Cyber City, Gurgaon", price: "₹1,499/day", rating: 4.8, features: ["Corporate Events", "Full Setup", "Parking", "Food Court"] },
      { id: 9, name: "Nehru Place Meeting Room", address: "Nehru Place, Delhi", price: "₹349/hour", rating: 4.5, features: ["Basic Meeting Setup", "Projector", "WiFi", "AC"] },
      { id: 10, name: "Dwarka Training Center", address: "Sector 10, Dwarka", price: "₹799/day", rating: 4.4, features: ["Training Facilities", "Audio System", "Comfortable Seating", "Refreshments"] },
      { id: 11, name: "Lajpat Nagar Hall", address: "Lajpat Nagar, Delhi", price: "₹249/hour", rating: 4.2, features: ["Budget Option", "Basic Amenities", "Good Location", "AC"] },
      { id: 12, name: "Karol Bagh Seminar Room", address: "Karol Bagh, Delhi", price: "₹899/day", rating: 4.3, features: ["Seminar Setup", "Microphone", "Chairs", "Whiteboard"] }
    ],
    bangalore: [
      { id: 13, name: "Koramangala Tech Hub", address: "Koramangala, Bangalore", price: "₹549/hour", rating: 4.9, features: ["Tech Setup", "High-Speed Internet", "Modern Design", "Cafeteria"] },
      { id: 14, name: "Whitefield Convention", address: "Whitefield, Bangalore", price: "₹1,399/day", rating: 4.7, features: ["Large Events", "Stage", "Sound & Light", "Catering"] },
      { id: 15, name: "Indiranagar Meeting Pod", address: "Indiranagar, Bangalore", price: "₹399/hour", rating: 4.6, features: ["Small Meetings", "Cozy Setup", "WiFi", "Coffee"] },
      { id: 16, name: "HSR Layout Workshop", address: "HSR Layout, Bangalore", price: "₹999/day", rating: 4.5, features: ["Workshop Space", "Tools", "Flexible Layout", "Parking"] },
      { id: 17, name: "Marathahalli Training Room", address: "Marathahalli, Bangalore", price: "₹299/hour", rating: 4.4, features: ["Training Setup", "Projector", "Comfortable Chairs", "AC"] },
      { id: 18, name: "Jayanagar Event Space", address: "Jayanagar, Bangalore", price: "₹1,199/day", rating: 4.6, features: ["Cultural Events", "Traditional Setup", "Sound System", "Decorations"] }
    ]
  };

  useEffect(() => {
    if (selectedCity || selectedSolution) {
      let results: any[] = [];
      
      if (selectedCity && onDemandData[selectedCity as keyof typeof onDemandData]) {
        results = onDemandData[selectedCity as keyof typeof onDemandData];
      } else if (selectedCity) {
        // If city not in our data, show generic results
        results = onDemandData.mumbai.slice(0, 6);
      }
      
      // If no city selected but solution selected, show all on-demand results
      if (!selectedCity && selectedSolution === 'on-demand') {
        results = [...onDemandData.mumbai, ...onDemandData.delhi, ...onDemandData.bangalore].slice(0, 6);
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

  const onDemandServices = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Work Cafes",
      description: "Casual workspace environments perfect for individual work",
      features: ["Relaxed Atmosphere", "High-Speed WiFi", "Fresh Coffee", "Flexible Hours"]
    },
    {
      icon: <Presentation className="w-8 h-8" />,
      title: "Event/Meeting Rooms",
      description: "Professional spaces for meetings, presentations, and events",
      features: ["AV Equipment", "Video Conferencing", "Catering Options", "Technical Support"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "State-Specific Availability",
      description: "Available across Delhi, Mumbai, Bangalore, and more cities",
      features: ["Multiple Locations", "City-Wide Coverage", "Easy Access", "Local Support"]
    }
  ];

  const bookingOptions = [
    {
      duration: "Hourly",
      price: "₹199",
      period: "/hour",
      features: ["Meeting Room Access", "Basic Amenities", "WiFi Included", "Instant Booking"],
      popular: false
    },
    {
      duration: "Daily",
      price: "₹999",
      period: "/day",
      features: ["Full Day Access", "Premium Amenities", "Catering Options", "Priority Support"],
      popular: true
    },
    {
      duration: "Weekly",
      price: "₹4,999",
      period: "/week",
      features: ["Extended Access", "All Amenities", "Dedicated Support", "Custom Setup"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Rohan Gupta",
      company: "Startup Founder",
      rating: 5,
      comment: "Perfect solution for our client meetings. Professional setup with zero hassle."
    },
    {
      name: "Neha Singh", 
      company: "Event Manager",
      rating: 5,
      comment: "Flexible booking system made our corporate events seamless and professional."
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
              On-Demand Workspace Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-content">
              Book professional workspaces instantly with flexible hourly and daily options. 
              Perfect for meetings, events, and temporary work needs.
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

      {/* On-Demand Services */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-header">
              On-Demand Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-content">
              State-wise availability with flexible booking options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {onDemandServices.map((service, index) => (
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
              Customer Success Stories
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

      {/* Flexible Booking Options */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-header">
              Flexible Booking (Hourly/Daily)
            </h2>
            <p className="text-xl text-muted-foreground font-content">
              Choose the duration that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {bookingOptions.map((option, index) => (
              <Card key={index} className={`glass-card relative ${option.popular ? 'border-primary ring-2 ring-primary/20' : 'border-primary/20'} hover:scale-105 transition-all duration-300`}>
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-header">{option.duration}</CardTitle>
                  <div className="text-4xl font-bold font-header">
                    {option.price}<span className="text-lg text-muted-foreground">{option.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="font-content">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${option.popular ? 'btn-hero' : 'btn-outline'}`}>
                    Book Now
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
            Book Your Perfect Space Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-content">
            Instant booking, flexible duration, professional spaces across multiple cities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero px-8 py-4">
              <Briefcase className="w-5 h-5 mr-2" />
              Book Now
            </Button>
            <Button variant="outline" className="px-8 py-4 border-primary/30">
              <Building2 className="w-5 h-5 mr-2" />
              Explore Plans
            </Button>
            <Button variant="outline" className="px-8 py-4 border-primary/30">
              <Phone className="w-5 h-5 mr-2" />
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
                Available On-Demand Spaces
              </h2>
              <p className="text-xl text-muted-foreground font-content">
                Found {filteredResults.length} on-demand spaces {selectedCity && `in ${cities.find(c => c.id === selectedCity)?.name}`}
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

export default OnDemandSearch;