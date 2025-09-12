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
      icon: <Building className="w-6 h-6 text-primary" />,
      title: "Virtual Office",
      description: "Professional business address with mail handling and call forwarding services",
      features: ["Prime Location Address", "GST Registration Support", "Mail Forwarding", "Call Management"],
      path: "/solutions/virtual-office"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Coworking Space",
      description: "Flexible workspace options with networking opportunities and premium amenities",
      features: ["Flexible Workspace", "Networking Events", "Premium Amenities", "24/7 Access"],
      path: "/solutions/coworking-space"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "On Demand",
      description: "On-demand meeting spaces and services with video conferencing facilities",
      features: ["Meeting Rooms", "Video Conferencing", "Presentation Tools", "Flexible Booking"],
      path: "/solutions/on-demand"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Business Setup",
      description: "Complete business setup solutions including legal documentation and compliance support",
      features: ["Legal Documentation", "Business Registration", "Compliance Support", "Tax Advisory"],
      path: "/solutions/business-setup"
    },
  ];

  return (
    <section id="solutions" className="py-20 px-4 bg-gradient-to-br from-background via-card-hover to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 font-header ${getAnimationClasses(isVisible, 'fadeInUp', 0)}`}>
            Complete Business Ecosystem
            <br />
            <span className="gradient-text-accent">at Your Fingertips</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-content ${getAnimationClasses(isVisible, 'fadeInUp', 200)}`}>
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
                  glass-card border-primary/20 hover:border-accent/30 shadow-lg hover:shadow-2xl 
                  group cursor-pointer transition-all duration-700 hover:scale-110 glow-primary hover:glow-accent
                  relative overflow-hidden h-full flex flex-col ${getAnimationClasses(isVisible, 'fadeInUp', index * 150)}
                `}
              >
                {/* Dynamic Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-colors duration-500"></div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors duration-500"></div>

                <CardHeader className="space-y-6 p-8 relative z-10 flex-grow">
                  <div className="flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                      <span className="text-primary group-hover:text-accent transition-colors duration-300 text-xl">
                        {solution.icon}
                      </span>
                    </div>
                  </div>
                  <div className="text-center flex-grow flex flex-col">
                    <CardTitle className="text-xl mb-4 text-foreground group-hover:text-primary transition-colors duration-300 font-bold font-header min-h-[3rem] flex items-center justify-center">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-base font-content flex-grow flex items-center justify-center min-h-[4rem]">
                      {solution.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6 p-8 pt-0 relative z-10">
                  {/* Features List */}
                  <div className="space-y-4 min-h-[8rem] flex flex-col justify-start">
                    {solution.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center space-x-3 transform transition-all duration-300 group-hover:translate-x-2"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full group-hover:bg-primary transition-colors duration-300 flex-shrink-0"></div>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium font-content text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                    <Button 
                      variant="outline" 
                      className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:glow-primary py-4 font-semibold text-lg transform group-hover:scale-105 mt-auto"
                    >
                      Explore Now
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button 
            className={`btn-hero px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${getAnimationClasses(isVisible, 'fadeInUp', 600)}`}
          >
            View All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;