import { MapPin, Calendar, Users, Award, Camera, Utensils, Music, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ServicesSidebar from "@/components/ServicesSidebar";

const EventSpaces = () => {
  const services = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Event Planning",
      description: "Complete event planning and coordination services from concept to execution."
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Catering Services",
      description: "Professional catering with diverse menu options and dietary accommodations."
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Audio Visual",
      description: "State-of-the-art AV equipment with professional technical support."
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Entertainment",
      description: "Live entertainment, DJ services, and performance coordination."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Services",
      description: "Professional security staff and crowd management for safe events."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Support",
      description: "Dedicated event coordinators ensuring flawless execution."
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
                Exceptional <span className="gradient-text-accent">Event Spaces</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Create memorable experiences in our premium event venues. From intimate meetings 
                to grand conferences, we provide the perfect setting for your special occasions.
              </p>

              <div className="flex justify-center gap-4 mb-8">
                <Button className="btn-hero px-8 py-4 text-lg font-semibold">
                  Book Venue
                </Button>
                <Button variant="outline" className="px-8 py-4 text-lg font-semibold border-gray-300 text-gray-700 hover:bg-gray-50">
                  Virtual Tour
                </Button>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Complete Event Services
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-200">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-accent">{service.icon}</span>
                      </div>
                      <CardTitle className="text-gray-900 text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {service.description}
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

export default EventSpaces;