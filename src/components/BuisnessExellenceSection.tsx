import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

const BusinessExcellenceSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    window.addEventListener("scroll", handleScroll);
    const section = document.getElementById("business-excellence");
    if (section) observer.observe(section);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const metrics = [
    {
      title: "YoY Growth of Clients",
      subtitle: "Renewal Rate",
      value: "95%",
      description: "Our client retention rate demonstrates consistent satisfaction and trust in our workspace solutions.",
      color: "from-emerald-500 to-emerald-600",
      delay: 0
    },
    {
      title: "Client Happiness Index",
      subtitle: "Satisfaction Rate",
      value: "98%",
      description: "Exceptional service quality and modern amenities ensure our clients achieve maximum productivity.",
      color: "from-amber-400 to-amber-500",
      delay: 200
    },
    {
      title: "Business Growth Impact",
      subtitle: "Success Rate",
      value: "92%",
      description: "Companies using our workspace solutions report significant improvements in team collaboration and business outcomes.",
      color: "from-blue-500 to-blue-600",
      delay: 400
    },
    {
      title: "Operational Excellence",
      subtitle: "Efficiency Score",
      value: "97%",
      description: "Streamlined processes and premium facilities enable businesses to focus on what matters most - growth.",
      color: "from-purple-500 to-purple-600",
      delay: 600
    },
    {
      title: "Unmatched Flexibility",
      subtitle: "Adaptability Score",
      value: "99%",
      description: "Transform your business operations with our revolutionary flexible workspace solutions that adapt to your growing needs.",
      color: "from-cyan-500 to-cyan-600",
      delay: 800
    },
    {
      title: "Premium Locations",
      subtitle: "Coverage Rate",
      value: "100%",
      description: "Establish your prestigious business presence in India's most coveted commercial districts and business hubs.",
      color: "from-indigo-500 to-indigo-600",
      delay: 1000
    }
  ];

  return (
    <section id="business-excellence" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-header">
            Why Choose <span className="gradient-text-accent">FlashSpace ?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-content">
            Discover the metrics that make us India's most trusted workspace solution provider
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className={`
                  relative bg-gradient-to-br ${metric.color} p-8 text-white border-0 shadow-2xl
                  transform transition-all duration-1000 ease-out
                  ${isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-20 opacity-0 scale-95'
                  }
                  hover:scale-105 hover:shadow-3xl cursor-pointer
                `}
                style={{
                  transitionDelay: isVisible ? `${metric.delay}ms` : '0ms',
                  zIndex: metrics.length - index
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{metric.title}</h3>
                      <p className="text-white/80 text-sm font-medium font-content">{metric.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-bold">{metric.value}</span>
                    </div>
                  </div>
                  
                  <div className="h-2 bg-white/20 rounded-full mb-6 overflow-hidden">
                    <div 
                      className={`
                        h-full bg-white rounded-full transition-all duration-2000 ease-out
                        ${isVisible ? 'w-full' : 'w-0'}
                      `}
                      style={{ transitionDelay: `${metric.delay + 500}ms` }}
                    ></div>
                  </div>

                  <p className="text-white/90 leading-relaxed font-content">
                    {metric.description}
                  </p>

                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                </div>
              </Card>
            ))}
          </div>

          {/* Enhanced One-Time KYC Feature */}
          <Card className="mt-12 bg-gradient-to-r from-slate-800 to-slate-700 p-8 text-white border border-slate-600 shadow-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text-accent">Enhanced One-Time KYC</h3>
              <p className="text-xl text-slate-300 mb-6 max-w-4xl mx-auto leading-relaxed font-content">
                Complete your KYC verification once and apply it seamlessly across all booked locations. 
                A centralized, efficient process designed to save time and enhance your business experience.
              </p>
              <div className="flex justify-center items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  Secure & Compliant
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  One-Time Setup
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  Pan-India Access
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BusinessExcellenceSection;