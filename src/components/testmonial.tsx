import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation, getAnimationClasses } from "@/hooks/use-scroll-animation";

const TestimonialsSection = () => {
  const isVisible = useScrollAnimation('testimonials');
  
  const companies = [
    { name: "Addda 24/7", logo: "ADDDA 24/7" },
    { name: "Study IQ", logo: "STUDY IQ" },
    { name: "Flipkart", logo: "FLIPKART" },
    { name: "Truly Madly", logo: "TRULY MADLY" },
    { name: "Stage OTT", logo: "STAGE OTT" },
    { name: "LUV Films", logo: "LUV FILMS" },
    { name: "Callerdesk", logo: "CALLERDESK" },
    { name: "Konsalidon", logo: "KONSALIDON" },
    { name: "CareerGuide.com", logo: "CAREERGUIDE" },
    { name: "Meritink", logo: "MERITINK" },
    { name: "Anarock", logo: "ANAROCK" },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  const testimonials = [
    {
      text: "FlashSpace transformed our expansion strategy. With their virtual offices across 100+ cities, we established presence in key markets without the overhead costs.",
      author: "Rajesh Kumar",
      position: "CEO, TechStart Solutions",
      company: "Mumbai"
    },
    {
      text: "The seamless mail management and professional address gave our startup the credibility we needed to secure major clients from day one.",
      author: "Priya Sharma",
      position: "Founder, Digital Innovations",
      company: "Bangalore"
    },
    {
      text: "24/7 support and lightning-fast setup helped us launch our business operations in just one day. Truly exceptional service!",
      author: "Amit Patel", 
      position: "Director, Global Ventures",
      company: "Delhi"
    }
  ];

  return (
    <section id="testimonials" className="py-12 px-4 relative overflow-hidden">
        {/* Background Images need to be imported and used properly */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${"/src/assets/testimonials-bg.jpg"})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 font-header ${getAnimationClasses(isVisible, 'fadeInUp', 0)}`}>
            <span className="gradient-text-accent">Trusted by Industry Leaders</span>
            <br />
            <span className="text-muted-foreground text-xl md:text-2xl font-content">Across India</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed font-content ${getAnimationClasses(isVisible, 'fadeInUp', 200)}`}>
            Join thousands of successful businesses who chose FlashSpace to accelerate their growth 
            and establish their market presence with confidence.
          </p>
          
          {/* Floating Elements */}
          <div className="relative">
            <div className="absolute -top-10 left-1/4 w-8 h-8 bg-accent/20 rounded-full blur-sm animate-float"></div>
            <div className="absolute -top-6 right-1/3 w-6 h-6 bg-primary/20 rounded-full blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-4 left-1/3 w-4 h-4 bg-accent/30 rounded-full blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Company Logos Carousel */}
        <div className={`mb-12 overflow-hidden ${getAnimationClasses(isVisible, 'fadeIn', 300)}`}>
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            {/* Scrolling Logos */}
            <div className="infinite-scroll">
              {duplicatedCompanies.map((company, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 mx-6 flex items-center justify-center w-44 h-20"
                >
                  <div className="glass-card p-6 w-full h-full flex items-center justify-center hover:shadow-xl transition-all duration-300 border-primary/20 rounded-xl group hover:border-accent/30">
                    <span className="text-sm font-bold text-primary group-hover:text-accent tracking-wider transition-colors duration-300 text-center">
                      {company.logo}
                    </span>
                    
                    {/* Subtle corner accent */}
                    <div className="absolute top-0 right-0 w-3 h-3 bg-accent/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="text-center mb-8 mt-16">
          <h3 className={`text-xl font-bold mb-4 gradient-text-primary font-header ${getAnimationClasses(isVisible, 'fadeInUp', 400)}`}>
            Great People Trust Us
          </h3>
          <p className={`text-muted-foreground font-content ${getAnimationClasses(isVisible, 'fadeInUp', 500)}`}>
            Real stories from real businesses who transformed their operations with FlashSpace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`bg-card border-border shadow-lg hover:shadow-xl hover-lift border-primary/20 hover:border-primary/40 transition-all duration-500 ${getAnimationClasses(isVisible, 'fadeInUp', 600 + index * 100)}`}
            >
              <CardContent className="p-6">
                {/* Quote */}
                <div className="text-6xl text-primary/20 mb-4 font-serif">"</div>
                <p className="text-muted-foreground leading-relaxed mb-4 font-content">
                  {testimonial.text}
                </p>
                
                {/* Author Info */}
                <div className="border-t border-primary/20 pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground font-content">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground font-content">{testimonial.position}</div>
                      <div className="text-sm text-primary font-content">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <Card className={`bg-card border-border shadow-lg border-primary/20 ${getAnimationClasses(isVisible, 'fadeInUp', 900)}`}>
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-xl md:text-2xl font-bold gradient-text-accent mb-2">5000+</div>
                <div className="text-muted-foreground font-content">Happy Clients</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold gradient-text-accent mb-2">100+</div>
                <div className="text-muted-foreground font-content">Cities Covered</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold gradient-text-accent mb-2">24/7</div>
                <div className="text-muted-foreground font-content">Support</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialsSection;