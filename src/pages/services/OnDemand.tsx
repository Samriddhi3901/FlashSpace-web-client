import { Users, Calendar, Presentation, Video, Clock, MapPin, Headphones, Monitor } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ServicesSidebar from "@/components/ServicesSidebar";

const OnDemand = () => {
  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Meeting Rooms",
      description: "Professional meeting spaces equipped with modern amenities for productive discussions.",
      duration: "Hourly/Daily",
      price: "From ₹199/hour"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Conferencing",
      description: "State-of-the-art video conferencing facilities for seamless remote collaboration.",
      duration: "Hourly",
      price: "From ₹149/hour"
    },
    {
      icon: <Presentation className="w-6 h-6" />,
      title: "Presentation Rooms",
      description: "Fully equipped presentation spaces with projectors, screens, and sound systems.",
      duration: "Hourly/Half-day",
      price: "From ₹299/hour"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Training Rooms",
      description: "Spacious training facilities perfect for workshops, seminars, and corporate training.",
      duration: "Half-day/Full-day",
      price: "From ₹799/half-day"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Phone Booths",
      description: "Private soundproof booths for confidential calls and focused work sessions.",
      duration: "Hourly",
      price: "From ₹99/hour"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Day Offices",
      description: "Private office spaces available for day use with all essential amenities.",
      duration: "Daily",
      price: "From ₹999/day"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-900 hover:text-accent transition-colors group">
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        <ServicesSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Book Spaces <span className="gradient-text-accent">On-Demand</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Access professional meeting rooms, video conferencing facilities, and workspace solutions 
                whenever you need them. Book instantly with flexible hourly and daily options.
              </p>

              <div className="flex justify-center gap-4 mb-8">
                <Button className="btn-hero px-8 py-4 text-lg font-semibold">
                  Book Now
                </Button>
                <Button variant="outline" className="px-8 py-4 text-lg font-semibold border-gray-300 text-gray-700 hover:bg-gray-50">
                  View Availability
                </Button>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Available On-Demand Services
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-200 h-full flex flex-col">
                    <CardHeader className="text-center pb-4 flex-grow">
                      <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-accent">{service.icon}</span>
                      </div>
                      <CardTitle className="text-gray-900 text-xl mb-4 min-h-[3rem] flex items-center justify-center">
                        {service.title}
                      </CardTitle>
                      <div className="flex justify-center items-center gap-4 text-sm mb-4 min-h-[2rem]">
                        <span className="text-gray-500 font-medium">{service.duration}</span>
                        <span className="font-bold text-accent text-base">{service.price}</span>
                      </div>
                      <CardDescription className="text-gray-600 leading-relaxed text-base min-h-[4rem] flex items-center justify-center px-2">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center pt-0 pb-6">
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 font-semibold">
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OnDemand;