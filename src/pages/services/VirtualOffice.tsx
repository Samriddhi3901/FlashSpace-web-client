import { Building, MapPin, Mail, Phone, FileText, CheckCircle, Star, Users, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ServicesSidebar from "@/components/ServicesSidebar";

const VirtualOffice = () => {
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
                Professional <span className="gradient-text-accent">Virtual Office</span>
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default VirtualOffice;