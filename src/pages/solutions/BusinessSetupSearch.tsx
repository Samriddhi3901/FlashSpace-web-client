import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  FileText, 
  Shield, 
  Users, 
  Building, 
  CheckCircle, 
  Star, 
  MapPin,
  Briefcase,
  Calculator,
  Phone,
  UserCheck,
  Settings,
  CreditCard
} from "lucide-react";
import { getAllCities } from "@/data/cityData";

const BusinessSetupSearch = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSolution, setSelectedSolution] = useState("");
  const [filteredResults, setFilteredResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const cities = getAllCities();

  // Mock data for business setup services in different cities
  const businessSetupData = {
    mumbai: [
      { id: 1, name: "Mumbai Corporate Services", address: "BKC, Mumbai", price: "₹18,999", rating: 4.9, features: ["Company Registration", "GST Setup", "Bank Account", "Compliance"] },
      { id: 2, name: "Maharashtra Business Hub", address: "Lower Parel, Mumbai", price: "₹16,999", rating: 4.8, features: ["Quick Registration", "Legal Documentation", "Tax Planning", "Support"] },
      { id: 3, name: "Andheri Business Center", address: "Andheri East, Mumbai", price: "₹14,999", rating: 4.7, features: ["Startup Package", "ROC Filing", "Digital Signature", "Address"] },
      { id: 4, name: "Powai Registration Services", address: "Powai, Mumbai", price: "₹15,999", rating: 4.6, features: ["Tech Startup Focus", "IP Support", "Mentorship", "Networking"] },
      { id: 5, name: "Malad Business Solutions", address: "Malad West, Mumbai", price: "₹13,999", rating: 4.5, features: ["Cost-effective", "Basic Registration", "Compliance", "Documentation"] },
      { id: 6, name: "Goregaon Corporate Setup", address: "Goregaon West, Mumbai", price: "₹17,999", rating: 4.7, features: ["Premium Services", "Fast Processing", "Complete Support", "Advisory"] }
    ],
    delhi: [
      { id: 7, name: "Delhi Corporate Registry", address: "Connaught Place, Delhi", price: "₹15,999", rating: 4.9, features: ["Central Location", "Government Liaising", "Fast Processing", "Expert Team"] },
      { id: 8, name: "NCR Business Services", address: "Gurgaon, Delhi", price: "₹17,999", rating: 4.8, features: ["Corporate Hub", "Premium Services", "International Setup", "Advisory"] },
      { id: 9, name: "Nehru Place Registry", address: "Nehru Place, Delhi", price: "₹12,999", rating: 4.6, features: ["Budget Package", "Basic Registration", "Documentation", "Support"] },
      { id: 10, name: "Dwarka Business Center", address: "Sector 12, Dwarka", price: "₹14,999", rating: 4.5, features: ["Residential Area", "Personal Touch", "Flexible Services", "Guidance"] },
      { id: 11, name: "Lajpat Nagar Setup", address: "Lajpat Nagar, Delhi", price: "₹11,999", rating: 4.4, features: ["Affordable", "Essential Services", "Quick Turnaround", "Local Support"] },
      { id: 12, name: "Karol Bagh Services", address: "Karol Bagh, Delhi", price: "₹16,999", rating: 4.7, features: ["Comprehensive Package", "Legal Support", "Tax Advisory", "Ongoing Support"] }
    ],
    bangalore: [
      { id: 13, name: "Bangalore Tech Registry", address: "Koramangala, Bangalore", price: "₹16,999", rating: 4.9, features: ["Tech Startup Focus", "IP Registration", "Funding Support", "Mentorship"] },
      { id: 14, name: "Silicon Valley Services", address: "Whitefield, Bangalore", price: "₹18,999", rating: 4.8, features: ["Premium Tech Package", "International Setup", "Compliance", "Advisory"] },
      { id: 15, name: "Indiranagar Business Hub", address: "Indiranagar, Bangalore", price: "₹15,999", rating: 4.7, features: ["Prime Location", "Complete Services", "Fast Processing", "Support"] },
      { id: 16, name: "HSR Layout Registry", address: "HSR Layout, Bangalore", price: "₹14,999", rating: 4.6, features: ["Residential Commercial", "Personal Service", "Documentation", "Guidance"] },
      { id: 17, name: "Marathahalli Setup Center", address: "Marathahalli, Bangalore", price: "₹17,999", rating: 4.8, features: ["IT Belt Location", "Tech Services", "Compliance", "Ongoing Support"] },
      { id: 18, name: "Jayanagar Business Services", address: "Jayanagar, Bangalore", price: "₹13,999", rating: 4.5, features: ["Traditional Area", "Cost-effective", "Basic Package", "Local Support"] }
    ]
  };

  useEffect(() => {
    if (selectedCity || selectedSolution) {
      let results: any[] = [];
      
      if (selectedCity && businessSetupData[selectedCity as keyof typeof businessSetupData]) {
        results = businessSetupData[selectedCity as keyof typeof businessSetupData];
      } else if (selectedCity) {
        // If city not in our data, show generic results
        results = businessSetupData.mumbai.slice(0, 6);
      }
      
      // If no city selected but solution selected, show all business setup results
      if (!selectedCity && selectedSolution === 'business-setup') {
        results = [...businessSetupData.mumbai, ...businessSetupData.delhi, ...businessSetupData.bangalore].slice(0, 6);
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

  const businessSetupServices = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Company Registration",
      description: "End-to-end company registration and incorporation services",
      features: ["ROC Filing", "Certificate of Incorporation", "PAN & TAN", "Digital Signature"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Legal & Compliance",
      description: "Comprehensive legal documentation and compliance support",
      features: ["Legal Documentation", "Regulatory Compliance", "Annual Filings", "Board Resolutions"]
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Mentorship & Consultation",
      description: "Expert guidance and ongoing business consultation",
      features: ["Business Strategy", "Growth Planning", "Market Analysis", "Expert Mentorship"]
    }
  ];

  const customPackages = [
    {
      state: "Delhi",
      price: "₹15,999",
      features: ["Company Registration", "GST Registration", "Legal Documentation", "Registered Office"],
      timeline: "7-10 days"
    },
    {
      state: "Mumbai",
      price: "₹17,999", 
      features: ["Premium Registration", "Tax Planning", "Compliance Support", "Prime Address"],
      timeline: "5-7 days"
    },
    {
      state: "Bangalore",
      price: "₹16,999",
      features: ["Startup Package", "IP Registration", "Legal Advisory", "Tech Hub Address"],
      timeline: "7-14 days"
    }
  ];

  const testimonials = [
    {
      name: "Vikram Mehta",
      company: "Tech Startup",
      rating: 5,
      comment: "Seamless business registration process. The team handled everything professionally."
    },
    {
      name: "Anita Sharma",
      company: "E-commerce Business",
      rating: 5,
      comment: "Excellent support throughout the entire setup process. Highly recommended!"
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
              Business Setup Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-content">
              Complete business setup from registration to compliance. Expert legal support, 
              mentorship, and state-wise custom packages to launch your business successfully.
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
                  Search Services
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Business Setup Services */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-header">
              Business Setup Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-content">
              State-wise business registration with expert guidance and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {businessSetupServices.map((service, index) => (
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
              Success Stories
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

      {/* Custom Packages Per State */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-header">
              Custom Packages Per State
            </h2>
            <p className="text-xl text-muted-foreground font-content">
              Tailored business setup packages for different states
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {customPackages.map((pkg, index) => (
              <Card key={index} className="glass-card border-primary/20 hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-header">{pkg.state}</CardTitle>
                  <div className="text-4xl font-bold font-header text-primary">
                    {pkg.price}
                  </div>
                  <Badge variant="outline" className="mt-2">
                    {pkg.timeline}
                  </Badge>
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
                  <Button className="w-full btn-hero">
                    Choose Package
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
            Start Your Business Journey Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-content">
            Expert guidance, fast processing, and complete support for your business setup
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero px-8 py-4">
              <Briefcase className="w-5 h-5 mr-2" />
              Book Now
            </Button>
            <Button variant="outline" className="px-8 py-4 border-primary/30">
              <Settings className="w-5 h-5 mr-2" />
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
                Available Business Setup Services
              </h2>
              <p className="text-xl text-muted-foreground font-content">
                Found {filteredResults.length} business setup services {selectedCity && `in ${cities.find(c => c.id === selectedCity)?.name}`}
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
                        Get Started
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

export default BusinessSetupSearch;