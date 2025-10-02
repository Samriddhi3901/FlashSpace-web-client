import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
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
      title: "Instant Setup",
      description: "Get your business address activated in less than 24 hours with our streamlined onboarding process.",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      description: "Establish your presence in India's most prestigious business districts across 100+ cities.",
      bgColor: "bg-purple-50",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&auto=format"
    },
    {
      icon: Shield,
      title: "Complete Compliance",
      description: "GST ready addresses with full legal documentation and compliance support included.",
      bgColor: "bg-emerald-50",
      image: "https://plus.unsplash.com/premium_photo-1664475876634-246925214655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2lnbmF0dXJlJTVDfGVufDB8fDB8fHww"
    },
    {
      icon: Users,
      title: "98% Satisfaction",
      description: "Join thousands of happy businesses who trust FlashSpace for their virtual office needs.",
      bgColor: "bg-orange-50",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop&auto=format"
    }
  ];

  return (
    <section id="business-excellence" className="py-20 px-4 relative overflow-hidden bg-[#ffffff]">
      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#172A3A]" style={{ fontFamily: 'instrument-serif' }}>
            Why Choose <span className="text-[#CE7A17]">FlashSpace</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            India's most trusted workspace solution with premium quality and service
          </p>
        </div>

        {/* Cards Grid - 4 cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card
                key={index}
                className={`
                  group relative overflow-hidden cursor-pointer
                  ${reason.bgColor} border-0 rounded-3xl
                  transition-all duration-500
                  hover:shadow-xl hover:-translate-y-1
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
                  ${activeCard === index ? 'shadow-xl -translate-y-1' : 'shadow-md'}
                `}
                style={{
                  transitionDelay: `${index * 80}ms`
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card Content */}
                <div className="flex flex-col h-full">
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden rounded-t-3xl mb-6">
                    <img
                      src={reason.image}
                      alt={reason.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  <div className="px-8 pb-8 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#172A3A] mb-4" style={{ fontFamily: 'instrument-serif' }}>
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6 text-base">
                      {reason.description}
                    </p>

                    {/* Learn More Link */}
                    <button className="text-[#172A3A] text-left underline hover:text-[#CE7A17] transition-colors duration-300 mt-auto">
                      Learn More →
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg border-2 border-gray-200">
            <CheckCircle className="w-5 h-5 text-[#CE7A17]" />
            <span className="text-[#172A3A] font-semibold text-xl" style={{ fontFamily: 'instrument-serif' }}>
              Trusted by <span className="text-[#CE7A17]">10,000+</span> businesses across India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessExcellenceSection;