import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import VideoBackground from "./VideoBackground";

const HeroSection = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", 
    "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat",
    "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane"
  ];

  const services = [
    "Virtual Office", 
    "Managed Offices", "Cabins", "Open Desk", "Hot Desk",
    "Meeting Rooms", "Event Spaces", "Private Offices",
    "On Demand Solutions"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearch = () => {
    console.log("Searching for:", { location: selectedLocation, service: selectedService });
    // Add your search logic here
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-12 px-4 relative overflow-hidden">
      {/* Dynamic Video Background - Only for Hero Section */}
      <VideoBackground />
      {/* Darker overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-black/40 to-slate-800/50 backdrop-blur-sm z-10"></div>
      
      <div className="container mx-auto text-center relative z-20">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto mb-8 relative">          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Get Virtual Office, <span className="text-accent">Anytime, Anywhere.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-content">
            Enabling Businesses Pan India to register and expand hustlefree
            <br />
            with virtual offices starting from <span className="text-accent font-semibold">₹799/month.</span>
          </p>
          
          {/* Search Component - Flashspace Style */}
          <div className="bg-white rounded-full shadow-2xl max-w-3xl mx-auto p-2">
            <div className="flex flex-col md:flex-row gap-2">
              {/* Location Dropdown */}
              <div className="flex-1 flex items-center px-4 py-3">
                <MapPin className="w-5 h-5 mr-3 text-gray-500" />
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="border-0 bg-transparent p-0 h-auto focus:ring-0 text-left">
                    <SelectValue placeholder="Location" className="text-gray-600" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                    {cities.map((city) => (
                      <SelectItem 
                        key={city} 
                        value={city.toLowerCase()}
                        className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer"
                      >
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-gray-200 my-3"></div>

              {/* Service Dropdown */}
              <div className="flex-1 flex items-center px-4 py-3">
                <Search className="w-5 h-5 mr-3 text-gray-500" />
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="border-0 bg-transparent p-0 h-auto focus:ring-0 text-left">
                    <SelectValue placeholder="Solution" className="text-gray-600" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                    {services.map((service) => (
                      <SelectItem 
                        key={service} 
                        value={service.toLowerCase()}
                        className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer"
                      >
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <Button 
                onClick={handleSearch}
                className="bg-black hover:bg-gray-800 text-white rounded-full px-12 py-6 h-auto font-medium"
              >
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Golden Dots Animation - Minimal */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-float opacity-40"
              style={{
                left: `${10 + (Math.random() * 80)}%`,
                top: `${10 + (Math.random() * 80)}%`,
                animationDelay: `${Math.random() * 12}s`,
                animationDuration: `${10 + Math.random() * 8}s`,
              }}
            />
          ))}
          {[...Array(5)].map((_, i) => (
            <div
              key={`large-${i}`}
              className="absolute w-2 h-2 bg-yellow-400/60 rounded-full animate-float opacity-30"
              style={{
                left: `${15 + (Math.random() * 70)}%`,
                top: `${15 + (Math.random() * 70)}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${12 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;