import { Briefcase, Wifi, Coffee, Users, Calendar, Shield, Zap, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ServicesSidebar from "@/components/ServicesSidebar";

const CoworkingSpace = () => {
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
                Modern <span className="gradient-text-accent">Coworking Spaces</span>
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoworkingSpace;