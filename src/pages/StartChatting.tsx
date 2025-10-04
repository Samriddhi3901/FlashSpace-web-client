import { useState } from 'react';
import { Send, Mic, Plus, MapPin, Building2, FileText, Briefcase, Users, Sparkles } from 'lucide-react';

// TypeScript Interfaces
interface QuickAction {
  title: string;
  subtitle: string;
  bg: string;
  icon: React.ElementType;
  color: string;
}

interface PopularSpace {
  name: string;
  location: string;
  type: string;
}

interface ContactForm {
  name: string;
  phone: string;
  email: string;
}

const StartChatting = () => {
  const [message, setMessage] = useState('');
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    phone: '',
    email: ''
  });

  const quickActions: QuickAction[] = [
    { 
      title: 'Take our workspace quiz', 
      subtitle: 'Find perfect workspace',
      bg: 'bg-blue-500',
      icon: Building2,
      color: 'text-white'
    },
    { 
      title: 'Get business setup', 
      subtitle: 'Complete registration',
      bg: 'bg-emerald-500',
      icon: FileText,
      color: 'text-white'
    },
    {
      title: 'Compliance tools',
      subtitle: 'Stay legally compliant',
      bg: 'bg-[#EDB003]',
      icon: Briefcase,
      color: 'text-white'
    }
  ];

  const popularSpaces: PopularSpace[] = [
    { name: 'BKC Premium Hub', location: 'Bandra Kurla Complex', type: 'Premium' },
    { name: 'Connaught Place', location: 'CP, New Delhi', type: 'Heritage' },
    { name: 'Electronic City', location: 'Bangalore', type: 'Tech Hub' },
    { name: 'Koramangala', location: 'Bangalore', type: 'Startup' },
    { name: 'Gurgaon Central', location: 'Gurugram', type: 'Corporate' },
    { name: 'Lower Parel', location: 'Mumbai', type: 'Business' }
  ];

  const complianceServices: string[] = [
    'GST Registration',
    'Company Formation', 
    'FSSAI License',
    'Trade License',
    'Professional Tax',
    'Labour License'
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleContactSubmit = () => {
    console.log('Contact form submitted:', contactForm);
    setContactForm({ name: '', phone: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FS</span>
            </div>
            <span className="text-lg font-bold text-gray-900">FlashSpace</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Explore
            </button>
            <button className="px-5 py-1.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all">
              Sign In
            </button>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-6 py-4 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-[calc(100vh-5rem)]">
          
          {/* Left Panel - Chat Interface (3 columns) */}
          <div className="lg:col-span-3 flex flex-col bg-white rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden">
            {/* Chat Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">FS</span>
                </div>
                <h1 className="text-lg font-semibold text-gray-900">New Chat</h1>
              </div>
              <Sparkles className="w-5 h-5 text-purple-500" />
            </div>

            {/* Chat Content - Empty State */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Need WorkSpace / Business Setup?
              </h2>
              <p className="text-gray-600 text-base mb-8 max-w-lg leading-relaxed">
                Hey! I'm here to assist you with end-to-end workspace and compliance requirements. Let's get started!
              </p>

              {/* Large Prompt Suggestions */}
              <div className="w-full max-w-2xl grid grid-cols-2 gap-3 mb-6">
                <button className="p-4 bg-white border-2 border-gray-200 rounded-2xl text-left hover:border-blue-400 hover:shadow-lg transition-all group">
                  <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">Find coworking spaces</div>
                  <div className="text-xs text-gray-500 mt-1">in Delhi NCR region</div>
                </button>
                <button className="p-4 bg-white border-2 border-gray-200 rounded-2xl text-left hover:border-purple-400 hover:shadow-lg transition-all group">
                  <div className="text-sm font-medium text-gray-900 group-hover:text-purple-600">GST Registration</div>
                  <div className="text-xs text-gray-500 mt-1">Complete registration process</div>
                </button>
                <button className="p-4 bg-white border-2 border-gray-200 rounded-2xl text-left hover:border-green-400 hover:shadow-lg transition-all group">
                  <div className="text-sm font-medium text-gray-900 group-hover:text-green-600">Compare workspace plans</div>
                  <div className="text-xs text-gray-500 mt-1">Find the best deal</div>
                </button>
                <button className="p-4 bg-white border-2 border-gray-200 rounded-2xl text-left hover:border-[#EDB003] hover:shadow-lg transition-all group">
                  <div className="text-sm font-medium text-gray-900 group-hover:text-[#EDB003]">Business compliance</div>
                  <div className="text-xs text-gray-500 mt-1">Check requirements</div>
                </button>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-6 border-t border-gray-200 bg-white">
              <div className="relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask anything..."
                  className="w-full px-16 py-4 bg-white border-2 border-gray-300 rounded-full outline-none text-gray-900 placeholder-gray-400 focus:border-blue-500 transition-colors"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Plus className="w-5 h-5 text-gray-500" />
                </button>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Mic className="w-5 h-5 text-gray-500" />
                  </button>
                  <button 
                    onClick={handleSendMessage}
                    className="p-2.5 bg-blue-600 hover:bg-blue-700 rounded-full transition-all"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              <p className="text-xs text-gray-400 text-center mt-3">
                FlashSpace can make mistakes. Check important info.
              </p>
            </div>
          </div>

          {/* Right Panel - Information Sections (2 columns) */}
          <div className="lg:col-span-2 space-y-5 overflow-y-auto h-full pr-2 scrollbar-thin">
            
            {/* Popular Spaces Section */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200/50">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-gray-900">Popular Spaces in Delhi</h3>
                <div className="flex items-center gap-1.5 text-blue-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-medium">View Map</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {popularSpaces.map((space, index) => (
                  <div 
                    key={index}
                    className="relative border-2 border-gray-200 rounded-2xl p-4 hover:border-blue-400 cursor-pointer transition-all bg-white hover:shadow-lg group overflow-hidden"
                  >
                    <div className="absolute top-3 right-3">
                      <Building2 className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <div className="text-sm font-semibold text-gray-900 mb-1.5 pr-8">{space.name}</div>
                    <div className="text-xs text-gray-500 mb-2">{space.location}</div>
                    <div className="inline-block px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {space.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200/50">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Get started</h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <div 
                      key={index}
                      className={`${action.bg} rounded-2xl p-5 cursor-pointer hover:scale-105 transition-all shadow-lg hover:shadow-xl`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="text-base font-bold text-white mb-1">{action.title}</div>
                          <div className="text-sm text-white/90">{action.subtitle}</div>
                        </div>
                        <IconComponent className={`w-8 h-8 ${action.color} opacity-90`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Compliance Services */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200/50">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Compliance Needs For You</h3>
              <div className="grid grid-cols-2 gap-3">
                {complianceServices.map((service, index) => (
                  <div 
                    key={index}
                    className="border-2 border-gray-200 rounded-2xl p-4 hover:border-green-400 cursor-pointer transition-all bg-white hover:shadow-md group"
                  >
                    <div className="text-sm font-semibold text-gray-900 text-center group-hover:text-green-700 transition-colors">
                      {service}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Get in Touch */}
            <div className="bg-gray-900 rounded-3xl p-6 shadow-xl text-white">
              <h3 className="text-lg font-bold mb-5">Get in Touch with a Consultant!</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-white border-2 border-gray-200 rounded-2xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">Connect with our experts</span>
                </div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full px-5 py-3 bg-white border-2 border-gray-700 rounded-2xl text-sm text-gray-900 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-colors"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  className="w-full px-5 py-3 bg-white border-2 border-gray-700 rounded-2xl text-sm text-gray-900 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email Address"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full px-5 py-3 bg-white border-2 border-gray-700 rounded-2xl text-sm text-gray-900 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-colors"
                />
                <button 
                  onClick={handleContactSubmit}
                  className="w-full bg-white text-gray-900 py-3 rounded-2xl text-sm font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                >
                  Submit Request
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StartChatting;