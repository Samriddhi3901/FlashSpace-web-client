import { Building, MapPin, Mail, Phone, FileText, CheckCircle, Star, Users, Award, ChevronDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import cannougght from "@/../public/card-connaught-place.jpg";

const VirtualOffice = () => {
  const [searchParams] = useSearchParams();
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    // Get city and location from URL parameters
    const city = searchParams.get('city') || 'Delhi';
    const location = searchParams.get('location') || '';
    setSelectedCity(city);
    setSelectedLocation(location);
  }, [searchParams]);
  const businessSolutions = [
    {
      label: "Virtual Office",
      href: "/services/virtual-office",
      icon: Building,
      description: "Professional business address solutions"
    },
    {
      label: "Coworking Space", 
      href: "/services/coworking-space",
      icon: Users,
      description: "Flexible workspace solutions"
    },
    {
      label: "On Demand",
      href: "/services/on-demand", 
      icon: Phone,
      description: "Meeting rooms & services"
    },
    {
      label: "Event Spaces",
      href: "/services/event-spaces",
      icon: MapPin,
      description: "Premium event venues"
    }
  ];

  const handleNavigation = (href: string) => {
    window.location.href = href;
  };
  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Prime Location Address",
      description: "Get a prestigious business address in prime commercial locations across major cities."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Mail Handling & Forwarding",
      description: "Professional mail management with scanning, forwarding, and secure storage options."
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Answering Service",
      description: "Dedicated phone number with professional call answering and message forwarding."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "GST Registration Support",
      description: "Complete assistance with GST registration and compliance documentation."
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Company Registration",
      description: "Full support for company incorporation and statutory compliance requirements."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Professional Credibility",
      description: "Enhance your business credibility with a professional corporate address."
    }
  ];

  // Mock data for virtual offices by city
  const mockVirtualOffices = {
    delhi: [
      { id: 1, name: "Connaught Place Virtual Office", address: "CP Block, New Delhi", price: "₹999/month", rating: 4.8, features: ["Prime Location", "GST Registration", "Mail Handling"] },
      { id: 2, name: "Gurgaon Business Center", address: "DLF Cyber City, Gurgaon", price: "₹1,299/month", rating: 4.7, features: ["IT Hub Location", "Call Handling", "Meeting Rooms"] },
      { id: 3, name: "Nehru Place Office", address: "Nehru Place, Delhi", price: "₹799/month", rating: 4.5, features: ["Commercial Center", "Professional Address", "Mail Services"] }
    ],
    mumbai: [
      { id: 4, name: "BKC Premium Office", address: "Bandra Kurla Complex, Mumbai", price: "₹1,599/month", rating: 4.9, features: ["Financial District", "Prestigious Address", "Full Services"] },
      { id: 5, name: "Lower Parel Business", address: "Lower Parel, Mumbai", price: "₹1,299/month", rating: 4.6, features: ["Central Location", "GST Support", "Call Management"] },
      { id: 6, name: "Andheri East Hub", address: "Andheri East, Mumbai", price: "₹1,099/month", rating: 4.4, features: ["Suburban Office", "Basic Services", "Mail Handling"] }
    ],
    bangalore: [
      { id: 7, name: "Koramangala Tech Office", address: "Koramangala, Bangalore", price: "₹1,199/month", rating: 4.7, features: ["Tech Hub", "Modern Facilities", "Professional Address"] },
      { id: 8, name: "Whitefield Business Center", address: "Whitefield, Bangalore", price: "₹1,099/month", rating: 4.5, features: ["IT Corridor", "Mail Services", "Call Handling"] },
      { id: 9, name: "Electronic City Office", address: "Electronic City, Bangalore", price: "₹999/month", rating: 4.3, features: ["Tech Park", "GST Registration", "Basic Services"] }
    ],
    pune: [
      { id: 10, name: "Hinjewadi IT Park Office", address: "Hinjewadi, Pune", price: "₹899/month", rating: 4.6, features: ["IT Park", "Modern Amenities", "Professional Services"] },
      { id: 11, name: "Koregaon Park Center", address: "Koregaon Park, Pune", price: "₹1,199/month", rating: 4.4, features: ["Premium Location", "Call Management", "Mail Services"] }
    ]
  };

  // Get offices for selected city
  // Normalize city key and handle common variants
  let cityKey = selectedCity.trim().toLowerCase().replace(/\s+/g, '').replace(/-/g, '');
  // Fallback for common variants
  if (["delhi", "newdelhi", "delh", "dilli"].includes(cityKey)) cityKey = "delhi";
  if (["mumbai", "bombay"].includes(cityKey)) cityKey = "mumbai";
  if (["bangalore", "bengaluru"].includes(cityKey)) cityKey = "bangalore";
  if (["pune", "punecity"].includes(cityKey)) cityKey = "pune";
  const cityOffices = mockVirtualOffices[cityKey as keyof typeof mockVirtualOffices] || mockVirtualOffices.delhi;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-900 hover:text-accent transition-colors group">
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            
            {/* Business Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="text-sm text-gray-700 hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2 border-gray-300"
                >
                  Virtual Office
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 bg-white border border-gray-200 shadow-lg">
                {businessSolutions.map((solution) => (
                  <DropdownMenuItem 
                    key={solution.label}
                    onClick={() => handleNavigation(solution.href)}
                    className="cursor-pointer p-3 hover:bg-gray-50 transition-colors"
                  >
                    <solution.icon className="w-4 h-4 mr-3 text-accent" />
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{solution.label}</span>
                      <span className="text-xs text-gray-500">{solution.description}</span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8">
          <div className="max-w-5xl mx-auto">
            {/* City-specific Header */}
            {selectedCity && (
              <div className="bg-primary/5 rounded-lg p-6 mb-8">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Showing results for {selectedCity}</span>
                </div>
                {selectedLocation && (
                  <p className="text-gray-600">
                    Near <span className="font-medium">{selectedLocation}</span>
                  </p>
                )}
              </div>
            )}

            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Professional <span className="gradient-text-accent">Virtual Office</span>
                {selectedCity && (
                  <span className="block text-2xl md:text-3xl mt-2 text-primary">
                    in {selectedCity}
                  </span>
                )}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Establish your business presence with a prestigious address, professional mail handling, 
                and comprehensive virtual office services starting from ₹799/month.
              </p>

              <div className="flex justify-center gap-4 mb-8">
                <Button className="btn-hero px-8 py-4 text-lg font-semibold">
                  Get Started Now
                </Button>
                <Button variant="outline" className="px-8 py-4 text-lg font-semibold border-gray-300 text-gray-700 hover:bg-gray-50">
                  Schedule Demo
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Complete Virtual Office Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-200">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-accent">{feature.icon}</span>
                      </div>
                      <CardTitle className="text-gray-900 text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Virtual Office Listings */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Available Virtual Offices in {selectedCity}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cityOffices.map((office) => {
                  // Try to match image from public/card-images.json
                  let imageSrc = "";
                  switch (office.name) {
                    case "Connaught Place Virtual Office": imageSrc = "/card-connaught-place.jpg"; break;
                    case "Gurgaon Business Center": imageSrc = "/card-gurgaon.jpg"; break;
                    case "Nehru Place Office": imageSrc = "/card-nehru-place.jpg"; break;
                    case "BKC Premium Office": imageSrc = "/card-bkc.jpg"; break;
                    case "Lower Parel Business": imageSrc = "/card-lower-parel.jpg"; break;
                    case "Andheri East Hub": imageSrc = "/card-andheri.jpg"; break;
                    case "Koramangala Tech Office": imageSrc = "/card-koramangala.jpg"; break;
                    case "Whitefield Business Center": imageSrc = "/card-whitefield.jpg"; break;
                    case "Electronic City Office": imageSrc = "/card-electronic-city.jpg"; break;
                    case "Hinjewadi IT Park Office": imageSrc = "/card-hinjewadi.jpg"; break;
                    case "Koregaon Park Center": imageSrc = "/card-koregaon-park.jpg"; break;
                    default: imageSrc = "/placeholder.svg";
                  }
                  return (
                    <Card key={office.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-200">
                      <CardHeader>
                        <img src={imageSrc} alt={office.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                        {console.log(imageSrc)}
                        
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl text-gray-900 font-semibold">
                            {office.name}
                          </CardTitle>
                          <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded">
                            <Award className="w-4 h-4 text-green-600" />
                            <span className="text-green-600 font-medium text-sm">{office.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 mb-3">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{office.address}</span>
                        </div>
                        <div className="text-2xl font-bold text-primary mb-3">
                          {office.price}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          {office.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1 btn-hero">
                            Book Now
                          </Button>
                          <Button variant="outline" className="flex-1 text-primary border-primary hover:bg-primary/5">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };

export default VirtualOffice;