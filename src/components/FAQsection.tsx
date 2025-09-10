import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  Lightbulb, 
  FileText, 
  Shield, 
  DollarSign, 
  Zap, 
  Building2,
  Sparkles
} from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      id: "item-1",
      question: "What is a virtual office, and how does it work?",
      answer: "A virtual office provides your business with a prestigious address, mail handling, and professional services without the need for physical office space. You get all the benefits of a prime business location while working from anywhere. Our virtual offices include mail forwarding, call answering services, and access to meeting rooms when needed.",
      category: "basics"
    },
    {
      id: "item-2", 
      question: "Why should I choose a virtual office over a traditional office space?",
      answer: "Virtual offices offer significant cost savings (up to 80% less than traditional offices), complete flexibility, premium business addresses, and professional services - perfect for startups, freelancers, and growing businesses. You eliminate overhead costs like rent, utilities, and maintenance while maintaining a professional business presence.",
      category: "benefits"
    },
    {
      id: "item-3",
      question: "How can I use the virtual office address for business registration?",
      answer: "Our virtual office addresses are fully compliant for business registration, GST registration, and all legal documentation. We provide the necessary NOCs (No Objection Certificates) and documentation for smooth registration processes. Our team assists with the entire registration workflow to ensure compliance.",
      category: "registration"
    },
    {
      id: "item-4",
      question: "Is my mail safe and secure with FlashSpace?",
      answer: "Absolutely! We use advanced security protocols, digital mail scanning, secure storage systems, and provide detailed tracking for all mail handling. Your business correspondence is completely safe and confidential. We offer real-time notifications and secure digital access to all your mail.",
      category: "security"
    },
    {
      id: "item-5",
      question: "Are there any hidden costs or additional fees?",
      answer: "No hidden costs! Our transparent pricing includes all mentioned services. Any additional services are clearly outlined upfront with no surprise charges. We provide detailed pricing breakdowns and service agreements so you know exactly what you're paying for.",
      category: "pricing"
    },
    {
      id: "item-6",
      question: "How quickly can I get started with a virtual office?",
      answer: "You can be up and running in just 24 hours! Our streamlined onboarding process ensures rapid activation of all your virtual office services. We handle document verification, address setup, and service activation swiftly to get your business operational immediately.",
      category: "setup"
    },
    {
      id: "item-7",
      question: "Can I use a virtual office address for GST registration in India?",
      answer: "Yes, our virtual office addresses are GST-compliant and accepted by all regulatory authorities including the Income Tax Department and Registrar of Companies. We provide full documentation support for GST registration, renewals, and compliance requirements.",
      category: "registration"
    },
    {
      id: "item-8",
      question: "What meeting room facilities are available?",
      answer: "Our virtual office packages include access to premium meeting rooms across all locations. Facilities include high-speed internet, video conferencing equipment, presentation tools, and professional ambiance. Rooms can be booked hourly or daily based on your needs.",
      category: "facilities"
    }
  ];

  const categories = [
    { key: "all", label: "All Questions", icon: HelpCircle },
    { key: "basics", label: "Basics", icon: BookOpen },
    { key: "benefits", label: "Benefits", icon: Lightbulb },
    { key: "registration", label: "Registration", icon: FileText },
    { key: "security", label: "Security", icon: Shield },
    { key: "pricing", label: "Pricing", icon: DollarSign },
    { key: "setup", label: "Setup", icon: Zap },
    { key: "facilities", label: "Facilities", icon: Building2 }
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-background via-card-hover to-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in font-header">
            Everything You Need to Know
            <br />
            <span className="gradient-text-accent">FAQ</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            <span>Get instant answers to the most common questions about our virtual office solutions and services.</span>
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
          </div>
        </div>

        {/* Search and Filter */}
        <Card className="glass-card border-primary/20 mb-12 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-center gradient-text-primary text-xl font-header">Find Your Answer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Search Bar */}
            <div className="relative">
              <Input
                placeholder="Search for questions, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="py-3 bg-secondary/50 border-primary/20 focus:border-accent/40 rounded-xl text-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.key}
                    onClick={() => setSelectedCategory(category.key)}
                    className={`
                      group px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 justify-center
                      ${selectedCategory === category.key
                        ? 'bg-gradient-to-r from-primary to-accent text-white glow-primary shadow-lg transform scale-105'
                        : 'glass-card border-primary/20 text-muted-foreground hover:border-accent/30 hover:text-foreground hover:scale-105'
                      }
                    `}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* FAQ Accordion */}
        <Card className="glass-card border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-0">
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className="border-b border-primary/10 last:border-b-0"
                  >
                    <AccordionTrigger className="px-8 py-6 text-left hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-300 group">
                      <span className="font-semibold text-foreground pr-4 group-hover:text-primary transition-colors duration-300 text-lg">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6">
                      <div className="text-muted-foreground leading-relaxed text-lg bg-gradient-to-r from-card-hover to-transparent p-4 rounded-lg">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="p-16 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 gradient-text-primary font-header">No results found</h3>
                <p className="text-muted-foreground text-lg">
                  Try adjusting your search terms or browse different categories.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Support */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-xl">
            Still have questions? Our support team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#contact" 
              className="btn-hero px-8 py-4 rounded-xl text-accent-foreground font-semibold inline-block transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Contact Support
            </a>
            <a 
              href="mailto:support@virtuhubconnect.com"
              className="glass-card border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;  