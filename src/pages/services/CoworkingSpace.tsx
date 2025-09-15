import { Wifi, Coffee, Printer, Gamepad2, Car, Shield, ChevronDown, Users, Building, Phone, MapPin, Clock, Calendar } from "lucide-react";
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

const CoworkingSpace = () => {
  const [searchParams] = useSearchParams();
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
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
      icon: <Wifi className="w-6 h-6" />,
      title: "High-Speed Internet",
      description: "Ultra-fast fiber optic internet with 99.9% uptime guarantee for seamless productivity."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Premium Amenities",
      description: "Complimentary coffee, tea, snacks, and access to modern kitchen facilities."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Networking Opportunities",
      description: "Connect with like-minded professionals and grow your business network."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Meeting Room Access",
      description: "Book meeting rooms, conference halls, and private cabins as needed."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV monitoring and access control systems."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Hours",
      description: "24/7 access to your workspace with flexible membership options."
    }
  ];

  // Mock data for coworking spaces by city
  const mockCoworkingSpaces = {
    delhi: [
      { id: 1, name: "WeWork Connaught Place", address: "Connaught Place, New Delhi", price: "₹15,000/month", rating: 4.8, type: "Hot Desk", features: ["High-Speed WiFi", "Meeting Rooms", "Coffee Bar", "24/7 Access"] },
      { id: 2, name: "IndiQube Gurgaon", address: "DLF Cyber City, Gurgaon", price: "₹18,000/month", rating: 4.7, type: "Dedicated Desk", features: ["Private Cabin Option", "Parking", "Event Space", "Cafeteria"] },
      { id: 3, name: "91springboard CP", address: "Nehru Place, Delhi", price: "₹12,000/month", rating: 4.6, type: "Hot Desk", features: ["Startup Community", "Mentorship", "Networking Events", "Printer Access"] }
    ],
    mumbai: [
      { id: 4, name: "WeWork BKC", address: "Bandra Kurla Complex, Mumbai", price: "₹22,000/month", rating: 4.9, type: "Private Office", features: ["Premium Location", "Ocean View", "Concierge", "Wellness Room"] },
      { id: 5, name: "Awfis Lower Parel", address: "Lower Parel, Mumbai", price: "₹16,000/month", rating: 4.5, type: "Dedicated Desk", features: ["Central Mumbai", "Metro Connectivity", "Gaming Zone", "Rooftop"] },
      { id: 6, name: "GoWork Andheri", address: "Andheri East, Mumbai", price: "₹14,000/month", rating: 4.4, type: "Hot Desk", features: ["Airport Proximity", "Flexible Plans", "Community Events", "Phone Booths"] }
    ],
    bangalore: [
      { id: 7, name: "WeWork Embassy Tech", address: "Koramangala, Bangalore", price: "₹17,000/month", rating: 4.8, type: "Dedicated Desk", features: ["Tech Hub", "Innovation Labs", "Startup Ecosystem", "Outdoor Terrace"] },
      { id: 8, name: "IndiQube Whitefield", address: "Whitefield, Bangalore", price: "₹15,500/month", rating: 4.6, type: "Hot Desk", features: ["IT Corridor", "Shuttle Service", "Gaming Area", "Wellness Programs"] },
      { id: 9, name: "Bhive HSR Layout", address: "HSR Layout, Bangalore", price: "₹13,000/month", rating: 4.5, type: "Hot Desk", features: ["Residential Area", "Quiet Environment", "Flexible Hours", "Community Kitchen"] }
    ],
    pune: [
      { id: 10, name: "IndiQube Hinjewadi", address: "Hinjewadi, Pune", price: "₹14,000/month", rating: 4.7, type: "Dedicated Desk", features: ["IT Park", "Modern Facilities", "Ample Parking", "Food Court"] },
      { id: 11, name: "WorkAmp Koregaon Park", address: "Koregaon Park, Pune", price: "₹16,000/month", rating: 4.4, type: "Hot Desk", features: ["Premium Location", "Creative Spaces", "Event Hosting", "Bike Parking"] }
    ]
  };

  // Get coworking spaces for selected city
  // Normalize city key and handle common variants
  let cityKey = selectedCity.trim().toLowerCase().replace(/\s+/g, '').replace(/-/g, '');
  if (["delhi", "newdelhi", "delh", "dilli"].includes(cityKey)) cityKey = "delhi";
  if (["mumbai", "bombay"].includes(cityKey)) cityKey = "mumbai";
  if (["bangalore", "bengaluru"].includes(cityKey)) cityKey = "bangalore";
  if (["pune", "punecity"].includes(cityKey)) cityKey = "pune";
  const citySpaces = mockCoworkingSpaces[cityKey as keyof typeof mockCoworkingSpaces] || mockCoworkingSpaces.delhi;

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
                  Coworking Space
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
                  <span className="font-medium">Showing coworking spaces in {selectedCity}</span>
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
                Modern <span className="gradient-text-accent">Coworking Spaces</span>
                {selectedCity && (
                  <span className="block text-2xl md:text-3xl mt-2 text-primary">
                    in {selectedCity}
                  </span>
                )}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Work in inspiring environments designed for productivity, collaboration, and growth. 
                From hot desks to private cabins, find your perfect workspace.
              </p>

              <div className="flex justify-center gap-4 mb-8">
                <Button className="btn-hero px-8 py-4 text-lg font-semibold">
                  Book a Tour
                </Button>
                <Button variant="outline" className="px-8 py-4 text-lg font-semibold border-gray-300 text-gray-700 hover:bg-gray-50">
                  View Locations
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Premium Coworking Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-200 h-full">
                    <CardHeader className="text-center pb-4">
                      <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-accent">{feature.icon}</span>
                      </div>
                      <CardTitle className="text-gray-900 text-xl mb-4 min-h-[3rem] flex items-center justify-center">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <CardDescription className="text-gray-600 leading-relaxed text-base min-h-[4rem] flex items-center justify-center">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Coworking Space Listings */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Available Coworking Spaces in {selectedCity}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {citySpaces.map((space) => {
                  // Match coworking space image
                  let imageSrc = "";
                  switch (space.name) {
                    case "WeWork Connaught Place": imageSrc = "/card-connaught-place.jpg"; break;
                    case "IndiQube Gurgaon": imageSrc = "/card-gurgaon.jpg"; break;
                    case "91springboard CP": imageSrc = "/card-nehru-place.jpg"; break;
                    case "WeWork BKC": imageSrc = "/card-bkc.jpg"; break;
                    case "Awfis Lower Parel": imageSrc = "/card-lower-parel.jpg"; break;
                    case "GoWork Andheri": imageSrc = "/card-andheri.jpg"; break;
                    case "WeWork Embassy Tech": imageSrc = "/card-koramangala.jpg"; break;
                    case "IndiQube Whitefield": imageSrc = "/card-whitefield.jpg"; break;
                    case "Bhive HSR Layout": imageSrc = "/card-electronic-city.jpg"; break;
                    case "IndiQube Hinjewadi": imageSrc = "/card-hinjewadi.jpg"; break;
                    case "WorkAmp Koregaon Park": imageSrc = "/card-koregaon-park.jpg"; break;
                    default: imageSrc = "/placeholder.svg";
                  }
                  return (
                    <Card key={space.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-200">
                      <CardHeader>
                        <img src={imageSrc} alt={space.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl text-gray-900 font-semibold">
                            {space.name}
                          </CardTitle>
                          <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded">
                            <Clock className="w-4 h-4 text-green-600" />
                            <span className="text-green-600 font-medium text-sm">{space.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{space.address}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                            {space.type}
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-primary mb-3">
                          {space.price}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          {space.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1 btn-hero">
                            Book Tour
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

export default CoworkingSpace;