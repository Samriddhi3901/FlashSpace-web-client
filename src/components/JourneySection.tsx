import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { 
  MapPin, 
  Building2, 
  CreditCard, 
  FileCheck, 
  CheckCircle2,
  Sparkles
} from "lucide-react";

const JourneySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const section = document.getElementById("journey");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const journeySteps = [
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Select Location",
      step: "STEP 1",
      delay: 0
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Choose Your Space",
      step: "STEP 2", 
      delay: 200
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Make the Payment",
      step: "STEP 3",
      delay: 400
    },
    {
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      title: "Submit KYC",
      step: "STEP 4",
      delay: 600
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      title: "Space is Yours",
      step: "STEP 5",
      delay: 800
    },
  ];

  return (
    <section id="journey" className="py-20 px-4 bg-gradient-to-br from-background via-card-hover to-background overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-accent mb-4 animate-fade-in font-header">
            Your Success Story Begins Here
          </h2>
          <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in font-content" style={{ animationDelay: '200ms' }}>
            <span>The FlashSpace Journey</span>
            <Sparkles className="w-8 h-8 text-accent animate-pulse" />
          </div>
        </div>

        {/* Journey Steps */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center mb-16 relative">
            {journeySteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {/* Step Circle */}
                <div 
                  className={`
                    w-32 h-32 rounded-full border-4 border-primary/20 glass-card
                    flex flex-col items-center justify-center mb-6 relative group shadow-lg glow-primary
                    transform transition-all duration-700 hover:scale-110 hover:border-accent/40 hover:shadow-xl
                    ${isVisible 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : 'translate-y-10 opacity-0 scale-95'
                    }
                  `}
                  style={{ 
                    transitionDelay: isVisible ? `${step.delay}ms` : '0ms',
                    animationDelay: `${step.delay}ms`
                  }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Step Number */}
                  <span className="text-accent font-bold text-sm relative z-10 group-hover:text-primary transition-colors duration-300">
                    {step.step}
                  </span>
                  
                  {/* Curved Arrow Connection */}
                  {index < journeySteps.length - 1 && (
                    <div className="absolute top-1/2 left-full w-20 h-16 transform -translate-y-1/2 z-0 flex items-center justify-center">
                      <svg 
                        width="80" 
                        height="64" 
                        viewBox="0 0 80 64" 
                        className="absolute inset-0"
                      >
                        {/* Base curved path */}
                        <path
                          d="M 0 32 Q 20 16, 40 32 T 80 32"
                          stroke="hsl(var(--primary) / 0.3)"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                        />
                        
                        {/* Animated curved path */}
                        <path
                          d="M 0 32 Q 20 16, 40 32 T 80 32"
                          stroke="url(#arrowGradient)"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray="100"
                          strokeDashoffset={isVisible ? "0" : "100"}
                          className="transition-all duration-1000"
                          style={{ transitionDelay: `${step.delay + 300}ms` }}
                        />
                        
                        {/* Arrow Head */}
                        <polygon
                          points="72,28 80,32 72,36 74,32"
                          fill="hsl(var(--accent))"
                          className={`
                            transform transition-all duration-1000 origin-center
                            ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                          `}
                          style={{ transitionDelay: `${step.delay + 800}ms` }}
                        />
                        
                        {/* Gradient Definition */}
                        <defs>
                          <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="hsl(var(--primary))" />
                            <stop offset="100%" stopColor="hsl(var(--accent))" />
                          </linearGradient>
                        </defs>
                      </svg>
                      
                      {/* Sparkle Effects */}
                      <div 
                        className={`
                          absolute top-4 left-6 w-2 h-2 bg-accent rounded-full animate-pulse
                          transform transition-all duration-1000
                          ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                        `}
                        style={{ 
                          transitionDelay: `${step.delay + 600}ms`,
                          animationDelay: `${step.delay + 1000}ms`
                        }}
                      ></div>
                      <div 
                        className={`
                          absolute bottom-6 right-8 w-1.5 h-1.5 bg-primary rounded-full animate-pulse
                          transform transition-all duration-1000
                          ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                        `}
                        style={{ 
                          transitionDelay: `${step.delay + 700}ms`,
                          animationDelay: `${step.delay + 1200}ms`
                        }}
                      ></div>
                    </div>
                  )}
                </div>

                {/* Step Title */}
                <div 
                  className={`
                    text-center text-foreground font-semibold text-lg max-w-32
                    transform transition-all duration-700
                    ${isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-5 opacity-0'
                    }
                  `}
                  style={{ transitionDelay: `${step.delay + 200}ms` }}
                >
                  {step.title}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-8 mb-12">
            {journeySteps.map((step, index) => (
              <div key={index} className="flex items-center gap-6 relative">
                <div className="w-20 h-20 rounded-full border-3 border-primary/20 glass-card flex flex-col items-center justify-center flex-shrink-0 shadow-lg glow-primary">
                  <div className="mb-1 text-primary">
                    {step.icon}
                  </div>
                  <span className="text-accent font-bold text-xs">
                    {step.step}
                  </span>
                </div>
                <div className="text-foreground font-semibold text-lg">
                  {step.title}
                </div>
                
                {/* Mobile Curved Arrow */}
                {index < journeySteps.length - 1 && (
                  <div className="absolute left-10 top-full w-8 h-16 transform translate-y-2">
                    <svg 
                      width="32" 
                      height="64" 
                      viewBox="0 0 32 64" 
                      className="absolute inset-0"
                    >
                      {/* Base curved path */}
                      <path
                        d="M 16 0 Q 8 20, 16 32 T 16 64"
                        stroke="hsl(var(--primary) / 0.3)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      
                      {/* Animated curved path */}
                      <path
                        d="M 16 0 Q 8 20, 16 32 T 16 64"
                        stroke="url(#mobileArrowGradient)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="80"
                        strokeDashoffset="0"
                        className="animate-pulse"
                      />
                      
                      {/* Arrow Head */}
                      <polygon
                        points="12,56 16,64 20,56 16,60"
                        fill="hsl(var(--accent))"
                        className="animate-pulse"
                      />
                      
                      {/* Gradient Definition */}
                      <defs>
                        <linearGradient id="mobileArrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--accent))" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              className={`
                btn-hero px-12 py-4 rounded-full font-bold text-lg
                transform hover:scale-105 transition-all duration-300
                shadow-lg hover:shadow-xl animate-fade-in
              `}
              style={{ animationDelay: '1000ms' }}
            >
              START YOUR JOURNEY TODAY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;