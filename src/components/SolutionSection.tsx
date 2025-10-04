import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building, 
  FileText, 
  Mail, 
  MapPin, 
  Users, 
  Briefcase,
  ChevronRight,
  Zap
} from "lucide-react";
import { useScrollAnimation, getAnimationClasses } from "@/hooks/use-scroll-animation";

const SolutionsSection = () => {
  const isVisible = useScrollAnimation('solutions');
  
  const solutions = [
    {
      icon: <Building className="w-5 h-5 text-[#172A3A]" />,
      title: "Virtual Office",
      description: "Professional business address with mail handling and call forwarding services",
      features: ["Prime Location Address", "GST Registration Support", "Mail Forwarding", "Call Management"],
      path: "/solutions/virtual-office"
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#172A3A]" />,
      title: "Coworking Space",
      description: "Flexible workspace options with networking opportunities and premium amenities",
      features: ["Flexible Workspace", "Networking Events", "Premium Amenities", "24/7 Access"],
      path: "/solutions/coworking-space"
    },
    {
      icon: <Users className="w-5 h-5 text-[#172A3A]" />,
      title: "On Demand",
      description: "On-demand meeting spaces and services with video conferencing facilities",
      features: ["Meeting Rooms", "Video Conferencing", "Presentation Tools", "Flexible Booking"],
      path: "/solutions/on-demand"
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#172A3A]" />,
      title: "Business Setup",
      description: "Complete business setup solutions including legal documentation and compliance support",
      features: ["Legal Documentation", "Business Registration", "Compliance Support", "Tax Advisory"],
      path: "/solutions/business-setup"
    },
  ];

  return (
    <section id="solutions" className="py-20 px-4 bg-[#ffffff] relative overflow-hidden">
      {/* Removed gradient & decorative blobs for pure white background */}

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 font-header ${getAnimationClasses(isVisible, 'fadeInUp', 0)}`} style={{ fontFamily: 'Josefin Sans' }}>
            Complete Business Ecosystem
            <br />
            <span className="text-[#EDB003]">at Your Fingertips</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-content font-geist ${getAnimationClasses(isVisible, 'fadeInUp', 200)}`}>
            Transform your business operations with our comprehensive suite of virtual office solutions 
            designed to scale with your ambitions.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <Link 
              key={index}
              to={solution.path}
              className="block h-full"
            >
              <Card 
                className={`
                  bg-white border-2 border-gray-200 hover:border-[#EDB003] shadow-md hover:shadow-xl
                  group cursor-pointer transition-all duration-500 hover:scale-105
                  relative overflow-hidden h-full flex flex-col rounded-xl ${getAnimationClasses(isVisible, 'fadeInUp', index * 150)}
                `}
              >
                {/* Dynamic Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#172A3A]/5 to-[#EDB003]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-10 -right-10 w-16 h-16 bg-[#EDB003]/10 rounded-full blur-xl group-hover:bg-[#EDB003]/20 transition-colors duration-500"></div>
                <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-[#172A3A]/10 rounded-full blur-xl group-hover:bg-[#172A3A]/20 transition-colors duration-500"></div>

                <CardHeader className="space-y-4 p-5 relative z-10 flex-grow ">
                  <div className="flex items-center justify-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#172A3A]/15 to-[#EDB003]/15 rounded-2xl flex items-center justify-center group-hover:from-[#172A3A]/25 group-hover:to-[#EDB003]/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <span className="text-[#172A3A] group-hover:text-[#EDB003] transition-colors duration-300">
                        {solution.icon}
                      </span>
                    </div>
                  </div>
                  <div className="text-center flex-grow flex flex-col">
                    <CardTitle className="text-lg mb-2 text-[#172A3A] group-hover:text-[#EDB003] transition-colors duration-300 font-bold font-header">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-snug text-sm font-content">
                      {solution.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4 p-5 pt-0 relative z-10">
                  {/* Features List */}
                  <div className="space-y-2.5">
                    {solution.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center space-x-2 transform transition-all duration-300 group-hover:translate-x-1"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-[#EDB003] rounded-full group-hover:bg-[#172A3A] transition-colors duration-300 flex-shrink-0"></div>
                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-medium font-content text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-[#172A3A] text-[#172A3A] hover:bg-[#EDB003] hover:text-white hover:border-[#EDB003] transition-all duration-300 py-2.5 font-semibold text-sm transform group-hover:scale-105 mt-auto"
                    >
                      Explore Now
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button 
            className={`bg-[#EDB003] hover:bg-[#172A3A] text-white px-8 py-3 font-semibold
             text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-lg ${getAnimationClasses(isVisible, 'fadeInUp', 600)}`} style={{ fontFamily: 'Josefin Sans' }}
          >
            View All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;