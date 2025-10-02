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
import { useScrollAnimation, getAnimationClasses } from "@/hooks/use-scroll-animation";

const ContactSection = () => {
  const { toast } = useToast();
  const isVisible = useScrollAnimation('contact');
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
    <section id="contact" className="py-20 px-4 relative overflow-hidden bg-[#ffffff]">

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${getAnimationClasses(isVisible, 'fadeInUp', 0)}`} style={{ fontFamily: 'instrument-serif' }}>
            <span className="text-[#172A3A]">Ready to Transform Your Business?</span>
            <br />
            <span className="text-[#CE7A17]">Let's Connect!</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed ${getAnimationClasses(isVisible, 'fadeInUp', 200)}`}>
            Get started with FlashSpace today and experience the future of virtual office solutions.
            Our team is ready to help you find the perfect solution for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Contact Form */}
          <div className="w-full h-full">
            <Card className={`bg-white border-2 border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 hover:border-[#CE7A17] h-full ${getAnimationClasses(isVisible, 'slideRight', 400)}`}>
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-[#172A3A] flex items-center gap-3" style={{ fontFamily: 'instrument-serif' }}>
                  <Send className="w-8 h-8 text-[#CE7A17]" />
                  Get in Touch
                </CardTitle>
                <p className="text-gray-600">Fill out the form and we'll get back to you within 24 hours</p>
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
                      className="bg-gray-50 border-2 border-gray-200 focus:border-[#CE7A17]"
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
                      className="bg-gray-50 border-2 border-gray-200 focus:border-[#CE7A17]"
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
                      className="bg-gray-50 border-2 border-gray-200 focus:border-[#CE7A17]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-gray-50 border-2 border-gray-200 focus:border-[#CE7A17]"
                    />
                  </div>
                </div>

                {/* Service Interest */}
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="bg-gray-50 border-2 border-gray-200 focus:border-[#CE7A17]">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-2 border-gray-200 shadow-lg">
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
                    className="bg-gray-50 border-2 border-gray-200 focus:border-[#CE7A17]"
                  />
                </div>

                  {/* Submit Button */}
                  <div className="mt-auto pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-[#CE7A17] hover:bg-[#172A3A] text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
                  className={`bg-white border-2 border-gray-200 hover:border-[#CE7A17] transition-all duration-500 cursor-pointer group shadow-md hover:shadow-xl hover:scale-105 ${getAnimationClasses(isVisible, 'slideLeft', 400 + index * 100)}`}
                  onClick={() => window.open(info.href, '_blank')}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#172A3A]/15 to-[#CE7A17]/15 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#172A3A] group-hover:text-[#CE7A17] transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                      {info.icon}
                    </div>
                    <h3 className="font-semibold text-[#172A3A] mb-3 text-lg">{info.title}</h3>
                    <p className="text-gray-600 mb-4">{info.content}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-2 border-gray-200 text-[#172A3A] hover:bg-[#CE7A17] hover:text-white hover:border-[#CE7A17] group-hover:scale-105 transition-transform duration-300"
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