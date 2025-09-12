import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  Clock, 
  FileText,
  CheckCircle,
  Star,
  Users,
  Briefcase,
  Calendar,
  CreditCard,
  Zap,
  Globe
} from "lucide-react";
import { getAllCities } from "@/data/cityData";

const VirtualOfficeSearch = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSolution, setSelectedSolution] = useState("");
  const [filteredResults, setFilteredResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const cities = getAllCities();

  // Mock data for virtual office services in different cities
  const virtualOfficeData = {
    mumbai: [
      { id: 1, name: "BKC Premium Virtual Office", address: "Bandra Kurla Complex, Mumbai", price: "₹1,299/month", rating: 4.8, features: ["Prime Location", "GST Registration", "Mail Handling"] },
      { id: 2, name: "Lower Parel Business Address", address: "Lower Parel, Mumbai", price: "₹1,599/month", rating: 4.7, features: ["Business Address", "Call Handling", "Meeting Rooms"] },
      { id: 3, name: "Nariman Point Office", address: "Nariman Point, Mumbai", price: "₹1,899/month", rating: 4.9, features: ["Prestigious Address", "Mail Services", "Receptionist"] },
      { id: 4, name: "Andheri East Hub", address: "Andheri East, Mumbai", price: "₹999/month", rating: 4.6, features: ["Cost-effective", "Basic Services", "GST Support"] },
      { id: 5, name: "Powai Tech Office", address: "Powai, Mumbai", price: "₹1,399/month", rating: 4.7, features: ["Tech Hub", "Professional Address", "Call Management"] },
      { id: 6, name: "Goregaon Business Center", address: "Goregaon West, Mumbai", price: "₹1,199/month", rating: 4.5, features: ["Suburban Location", "Mail Handling", "Phone Services"] }
    ],
    delhi: [
      { id: 7, name: "Connaught Place Virtual Office", address: "CP, New Delhi", price: "₹999/month", rating: 4.9, features: ["Central Location", "Metro Access", "Professional Address"] },
      { id: 8, name: "Gurgaon Cyber City", address: "DLF Cyber City, Gurgaon", price: "₹1,499/month", rating: 4.8, features: ["IT Hub", "Modern Facilities", "Call Handling"] },
      { id: 9, name: "Nehru Place Business", address: "Nehru Place, Delhi", price: "₹899/month", rating: 4.6, features: ["Commercial Center", "GST Registration", "Mail Services"] },
      { id: 10, name: "Dwarka Corporate Office", address: "Sector 12, Dwarka", price: "₹799/month", rating: 4.4, features: ["Residential Area", "Basic Services", "Professional Address"] },
      { id: 11, name: "Lajpat Nagar Hub", address: "Lajpat Nagar, Delhi", price: "₹699/month", rating: 4.3, features: ["Market Area", "Cost-effective", "Mail Handling"] },
      { id: 12, name: "Karol Bagh Center", address: "Karol Bagh, Delhi", price: "₹849/month", rating: 4.5, features: ["Central Delhi", "Good Connectivity", "Phone Services"] }
    ],
    bangalore: [
      { id: 13, name: "Koramangala Virtual Office", address: "Koramangala, Bangalore", price: "₹1,199/month", rating: 4.8, features: ["Startup Hub", "Tech-friendly", "Professional Services"] },
      { id: 14, name: "Whitefield Tech Center", address: "Whitefield, Bangalore", price: "₹1,399/month", rating: 4.7, features: ["IT Corridor", "Modern Address", "Call Management"] },
      { id: 15, name: "Indiranagar Business", address: "Indiranagar, Bangalore", price: "₹1,099/month", rating: 4.6, features: ["Prime Location", "Mail Services", "GST Support"] },
      { id: 16, name: "HSR Layout Office", address: "HSR Layout, Bangalore", price: "₹999/month", rating: 4.5, features: ["Residential Commercial", "Basic Services", "Professional Address"] },
      { id: 17, name: "Marathahalli Hub", address: "Marathahalli, Bangalore", price: "₹1,299/month", rating: 4.7, features: ["IT Belt", "Call Handling", "Mail Management"] },
      { id: 18, name: "Jayanagar Center", address: "Jayanagar, Bangalore", price: "₹899/month", rating: 4.4, features: ["Traditional Area", "Cost-effective", "Basic Features"] }
    ]
  };

  useEffect(() => {
    if (selectedCity || selectedSolution) {
      let results: any[] = [];
      
      if (selectedCity && virtualOfficeData[selectedCity as keyof typeof virtualOfficeData]) {
        results = virtualOfficeData[selectedCity as keyof typeof virtualOfficeData];
      } else if (selectedCity) {
        // If city not in our data, show generic results
        results = virtualOfficeData.mumbai.slice(0, 6);
      }
      
      // If no city selected but solution selected, show all virtual office results
      if (!selectedCity && selectedSolution === 'virtual-office') {
        results = [...virtualOfficeData.mumbai, ...virtualOfficeData.delhi, ...virtualOfficeData.bangalore].slice(0, 6);
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

  const virtualOfficeServices = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Online Meeting Rooms",
      description: "Professional virtual meeting spaces with HD video conferencing",
      features: ["HD Video Conferencing", "Screen Sharing", "Recording Available", "24/7 Access"]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Virtual Office Address",
      description: "Prime business addresses for your company registration",
      features: ["Prime Location", "Mail Handling", "GST Registration", "Legal Compliance"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexible Plans",
      description: "Monthly and yearly subscription options",
      features: ["Monthly Plans", "Yearly Discounts", "Custom Packages", "Scalable Solutions"]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "₹999",
      period: "/month",
      features: ["Business Address", "Mail Forwarding", "GST Support", "Basic Call Handling"],
      popular: false
    },
    {
      name: "Professional", 
      price: "₹1999",
      period: "/month",
      features: ["Everything in Basic", "Dedicated Phone Line", "Meeting Room Credits", "Priority Support"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹3999", 
      period: "/month",
      features: ["Everything in Professional", "Unlimited Meeting Rooms", "Custom Address", "Dedicated Manager"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Startup",
      rating: 5,
      comment: "Virtual office solution helped us establish professional presence without high costs."
    },
    {
      name: "Priya Sharma",
      company: "Consulting Firm", 
      rating: 5,
      comment: "Excellent mail handling and call management services. Highly recommended!"
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
              Virtual Office Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-content">
              Establish your professional business presence with our premium virtual office services. 
              Get a prestigious address, mail handling, and call management solutions.
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

      {/* Featured Spaces and Offers */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-header">
              Virtual Office Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-content">
              Comprehensive virtual office solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {virtualOfficeServices.map((service, index) => (
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
              What Our Clients Say
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

      {/* Pricing & Plans */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-header">
              Pricing & Plans
            </h2>
            <p className="text-xl text-muted-foreground font-content">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`glass-card relative ${plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-primary/20'} hover:scale-105 transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-header">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold font-header">
                    {plan.price}<span className="text-lg text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="font-content">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'btn-hero' : 'btn-outline'}`}>
                    Get Started
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
            Ready to Establish Your Virtual Office?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-content">
            Join thousands of businesses who trust us with their virtual office needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero px-8 py-4">
              <Briefcase className="w-5 h-5 mr-2" />
              Book Now
            </Button>
            <Button variant="outline" className="px-8 py-4 border-primary/30">
              <Users className="w-5 h-5 mr-2" />
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
                Available Virtual Office Solutions
              </h2>
              <p className="text-xl text-muted-foreground font-content">
                Found {filteredResults.length} virtual office options {selectedCity && `in ${cities.find(c => c.id === selectedCity)?.name}`}
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

export default VirtualOfficeSearch;