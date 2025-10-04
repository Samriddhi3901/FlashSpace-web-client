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
      href: "tel:+919876543210",
      image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=800",
      bgColor: "from-yellow-50/95 via-amber-50/90 to-yellow-100/95"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      content: "hello@virtuhubconnect.com",
      action: "Send Email",
      href: "mailto:hello@virtuhubconnect.com",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=800",
      bgColor: "from-yellow-100/95 via-white/90 to-amber-100/95"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Locations",
      content: "100+ Cities Across India",
      action: "Find Locations",
      href: "#locations",
      image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=800",
      bgColor: "from-amber-50/95 via-yellow-50/90 to-yellow-100/95"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "24/7 Support Available",
      action: "Get Support",
      href: "#support",
      image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=800",
      bgColor: "from-yellow-50/95 via-amber-100/90 to-yellow-200/95"
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
            <span className="text-[#EDB003]">Let's Connect!</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed ${getAnimationClasses(isVisible, 'fadeInUp', 200)}`}>
            Get started with FlashSpace today and experience the future of virtual office solutions.
            Our team is ready to help you find the perfect solution for your business needs.
          </p>
        </div>

        {/* Contact Form and Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Contact Form */}
          <div className="w-full">
            <Card className={`bg-white border-2 border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 hover:border-[#EDB003] ${getAnimationClasses(isVisible, 'slideRight', 400)}`}>
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-[#172A3A] flex items-center gap-3" style={{ fontFamily: 'instrument-serif' }}>
                  <Send className="w-8 h-8 text-[#EDB003]" />
                  Get in Touch
                </CardTitle>
                <p className="text-gray-600">Fill out the form and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="bg-gray-50 border-2 border-gray-200 focus:border-[#EDB003]"
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
                      className="bg-gray-50 border-2 border-gray-200 focus:border-[#EDB003]"
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
                      className="bg-gray-50 border-2 border-gray-200 focus:border-[#EDB003]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-gray-50 border-2 border-gray-200 focus:border-[#EDB003]"
                    />
                  </div>
                </div>

                {/* Service Interest */}
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="bg-gray-50 border-2 border-gray-200 focus:border-[#EDB003]">
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
                    className="bg-gray-50 border-2 border-gray-200 focus:border-[#EDB003]"
                  />
                </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-[#EDB003] hover:bg-[#172A3A] text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Dynamic Image Section with Floating Cards */}
          <div className={`w-full h-full flex items-center justify-center ${getAnimationClasses(isVisible, 'slideLeft', 400)}`}>
            <div className="relative w-full h-[500px] sm:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Bright Yellow-White Office Background */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000"
                alt="Modern Office Space"
                className="absolute inset-0 w-full h-full object-cover brightness-110"
              />

              {/* Yellow-White Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/90 via-white/80 to-yellow-100/90"></div>

              {/* Animated Light Rays */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 -left-20 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-0 -right-20 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 h-full p-6 sm:p-10 md:p-14 flex flex-col justify-center">
                {/* Animated Headline */}
                <div className="mb-8 sm:mb-12 text-center">
                  <h3
                    className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight text-gray-900"
                    style={{
                      fontFamily: 'Josefin Sans',
                      textShadow: '0 0 40px rgba(251, 191, 36, 0.4), 0 0 80px rgba(251, 191, 36, 0.2)',
                      animation: 'text-glow 3s ease-in-out infinite'
                    }}
                  >
                    Your Virtual Office
                    <br />
                    <span className="text-yellow-600">Starts Here</span>
                  </h3>
                </div>

                {/* Four Interactive Cards */}
                <div className="grid grid-cols-2 gap-3 sm:gap-5">
                  <div
                    className="group relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-yellow-200/50"
                    style={{
                      animation: 'card-float 3s ease-in-out infinite',
                      animationDelay: '0s'
                    }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500 animate-pulse-glow"></div>
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-yellow-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <MapPin className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-600" />
                      </div>
                      <h4 className="text-gray-900 font-semibold text-sm sm:text-lg mb-1 sm:mb-2 group-hover:text-yellow-600 transition-colors duration-300">Prime Locations</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">100+ prestigious addresses</p>
                    </div>
                  </div>

                  <div
                    className="group relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-yellow-200/50"
                    style={{
                      animation: 'card-float 3s ease-in-out infinite',
                      animationDelay: '0.2s'
                    }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500 animate-pulse-glow"></div>
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-yellow-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Users className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-600" />
                      </div>
                      <h4 className="text-gray-900 font-semibold text-sm sm:text-lg mb-1 sm:mb-2 group-hover:text-yellow-600 transition-colors duration-300">Coworking Space</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Collaborative environment</p>
                    </div>
                  </div>

                  <div
                    className="group relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-yellow-200/50"
                    style={{
                      animation: 'card-float 3s ease-in-out infinite',
                      animationDelay: '0.4s'
                    }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500 animate-pulse-glow"></div>
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-yellow-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-600" />
                      </div>
                      <h4 className="text-gray-900 font-semibold text-sm sm:text-lg mb-1 sm:mb-2 group-hover:text-yellow-600 transition-colors duration-300">24/7 Support</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Always here to assist</p>
                    </div>
                  </div>

                  <div
                    className="group relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-yellow-200/50"
                    style={{
                      animation: 'card-float 3s ease-in-out infinite',
                      animationDelay: '0.6s'
                    }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500 animate-pulse-glow"></div>
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-yellow-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-600" />
                      </div>
                      <h4 className="text-gray-900 font-semibold text-sm sm:text-lg mb-1 sm:mb-2 group-hover:text-yellow-600 transition-colors duration-300">Instant Setup</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Get started in minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Cards - Moved Below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-2 border-yellow-200 hover:border-[#EDB003] transition-all duration-500 cursor-pointer group shadow-lg hover:shadow-2xl hover:scale-105 ${getAnimationClasses(isVisible, 'fadeInUp', 800 + index * 100)}`}
              onClick={() => window.open(info.href, '_blank')}
            >
              {/* Background Image with Yellow Overlay */}
              <div className="absolute inset-0">
                <img
                  src={info.image}
                  alt={`${info.title} Background`}
                  className="w-full h-full object-cover brightness-110 group-hover:scale-110 transition-transform duration-700"
                />
                {/* Dynamic Yellow Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.bgColor}`}></div>

                {/* Animated Light Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl group-hover:bg-yellow-400/30 transition-colors duration-500"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-300/20 rounded-full blur-2xl group-hover:bg-amber-400/30 transition-colors duration-500"></div>
                </div>
              </div>

              <CardContent className="relative p-6 sm:p-8 text-center min-h-[280px] flex flex-col justify-between">
                {/* Dynamic Animated Icon Container */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  {/* Pulsing Rings */}
                  <div className="absolute inset-0 bg-yellow-200/30 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/40 to-yellow-500/40 rounded-full animate-pulse"></div>

                  {/* Main Icon Circle */}
                  <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 transform">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-yellow-300 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

                    {/* Icon */}
                    <div className="relative text-white drop-shadow-lg">
                      {info.icon}
                    </div>

                    {/* Sparkle Effect */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-[#172A3A] mb-3 text-lg sm:text-xl group-hover:text-yellow-700 transition-colors duration-300">{info.title}</h3>
                  <p className="text-gray-700 mb-4 font-medium text-sm sm:text-base">{info.content}</p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="border-2 border-yellow-300 bg-white/70 backdrop-blur-sm text-[#172A3A] hover:bg-[#EDB003] hover:text-white hover:border-[#EDB003] group-hover:scale-105 transition-all duration-300 shadow-md font-semibold"
                >
                  {info.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;