import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Users,
  Zap
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      content: "+91-9876-543-210",
      action: "Call Now",
      href: "tel:+919876543210"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      content: "hello@virtuhubconnect.com",
      action: "Send Email",
      href: "mailto:hello@virtuhubconnect.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Locations",
      content: "100+ Cities Across India",
      action: "Find Locations",
      href: "#locations"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "24/7 Support Available",
      action: "Get Support",
      href: "#support"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-background via-card-hover to-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in font-header">
            Ready to Transform Your Business?
            <br />
            <span className="gradient-text-accent">Let's Connect!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            Get started with FlashSpace today and experience the future of virtual office solutions. 
            Our team is ready to help you find the perfect solution for your business needs.
          </p>
          
          {/* Floating Elements */}
          <div className="relative mt-8">
            <div className="absolute -top-6 left-1/4 w-6 h-6 bg-accent/20 rounded-full blur-sm animate-float"></div>
            <div className="absolute -top-4 right-1/3 w-4 h-4 bg-primary/20 rounded-full blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-2 left-1/3 w-3 h-3 bg-accent/30 rounded-full blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Contact Form */}
          <div className="w-full h-full">
            <Card className="glass-card border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-accent/30 h-full">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl gradient-text-primary flex items-center gap-3 font-header">
                  <Send className="w-8 h-8" />
                  Get in Touch
                </CardTitle>
                <p className="text-muted-foreground">Fill out the form and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent className="flex-1">
                <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="bg-secondary/50 border-primary/20 focus:border-primary/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="bg-secondary/50 border-primary/20 focus:border-primary/40"
                    />
                  </div>
                </div>

                {/* Phone and Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-secondary/50 border-primary/20 focus:border-primary/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-secondary/50 border-primary/20 focus:border-primary/40"
                    />
                  </div>
                </div>

                {/* Service Interest */}
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="bg-secondary/50 border-primary/20 focus:border-primary/40">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="virtual-office">Virtual Office Solutions</SelectItem>
                      <SelectItem value="business-registration">Business Registration</SelectItem>
                      <SelectItem value="mail-management">Mail Management</SelectItem>
                      <SelectItem value="meeting-rooms">Meeting Room Access</SelectItem>
                      <SelectItem value="coworking">Coworking Space</SelectItem>
                      <SelectItem value="consultation">Free Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your business needs..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="bg-secondary/50 border-primary/20 focus:border-primary/40"
                  />
                </div>

                  {/* Submit Button */}
                  <div className="mt-auto pt-4">
                    <Button 
                      type="submit"
                      className="w-full btn-hero py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="w-full h-full flex flex-col">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="glass-card hover-lift bg-card border-primary/20 hover:border-accent/30 transition-all duration-500 cursor-pointer group shadow-lg hover:shadow-xl"
                  onClick={() => window.open(info.href, '_blank')}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                      {info.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-3 text-lg">{info.title}</h3>
                    <p className="text-muted-foreground mb-4">{info.content}</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground group-hover:scale-105 transition-transform duration-300"
                    >
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;