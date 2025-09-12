import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, Zap, MapPin, Shield } from "lucide-react";

const BusinessExcellenceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const section = document.getElementById("business-excellence");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: TrendingUp,
      title: "95% Client Retention",
      subtitle: "Proven Success Rate",
      description: "Our exceptional service quality ensures clients stay with us, building long-term partnerships for sustained growth.",
      features: ["Year-over-year growth", "Consistent satisfaction", "Trust-based relationships"],
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Users,
      title: "98% Satisfaction Score",
      subtitle: "Happy Clients",
      description: "Premium amenities and personalized service create an environment where businesses thrive and teams excel.",
      features: ["Modern amenities", "24/7 support", "Productivity boost"],
      color: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Zap,
      title: "Instant Flexibility",
      subtitle: "Adapt & Scale",
      description: "From hot desks to private offices, scale your workspace up or down instantly based on your business needs.",
      features: ["Flexible terms", "Quick scaling", "No long commitments"],
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      subtitle: "Strategic Positioning",
      description: "Establish your business presence in India's most prestigious commercial districts and business hubs.",
      features: ["Premium addresses", "Easy accessibility", "Business networking"],
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      subtitle: "Complete Protection",
      description: "Bank-grade security with biometric access, CCTV monitoring, and secure data handling for peace of mind.",
      features: ["Biometric access", "24/7 monitoring", "Data protection"],
      color: "from-secondary/20 to-secondary/5"
    },
    {
      icon: CheckCircle,
      title: "One-Time KYC",
      subtitle: "Seamless Process",
      description: "Complete verification once and access all our locations across India without repetitive documentation.",
      features: ["Single verification", "Pan-India access", "Quick onboarding"],
      color: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <section id="business-excellence" className="py-24 px-4 relative overflow-hidden">
      {/* Enhanced background with video-like gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>
      
      {/* Animated background elements matching hero section */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
            Why Choose <span className="text-accent">FlashSpace?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-content">
            Discover what makes us India's most trusted workspace solution provider with unmatched quality and service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card
                key={index}
                className={`
                  group relative p-8 h-full cursor-pointer 
                  bg-white/10 backdrop-blur-md border border-white/20
                  transition-all duration-500 ease-out hover-scale
                  ${isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                  }
                  ${activeCard === index ? 'ring-2 ring-accent/50 shadow-xl shadow-accent/20' : ''}
                  hover:bg-white/15 hover:border-white/30
                `}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-accent/20">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-white/60 font-medium">
                      {reason.subtitle}
                    </p>
                  </div>

                  <p className="text-white/80 mb-6 leading-relaxed text-lg">{reason.description}</p>

                  {/* Features */}
                  <div className="space-y-3">
                    {reason.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center gap-3 text-white/70"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-6 right-6 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>

                {/* Card border glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA with enhanced styling */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white/10 to-white/5 rounded-full border border-white/20 backdrop-blur-md">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span className="text-white font-medium text-lg">Trusted by 10,000+ businesses across India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessExcellenceSection;