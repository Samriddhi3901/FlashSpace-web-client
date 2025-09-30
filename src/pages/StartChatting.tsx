import { useState } from 'react';
import { Send, Mic, Plus, MapPin, Calendar, Users, Building2, FileText, Briefcase } from 'lucide-react';
import Header from '@/components/Header';

const StartChatting = () => {
  const [message, setMessage] = useState('');

  const quickActions = [
    { 
      title: 'Take our workspace quiz', 
      subtitle: 'Find perfect workspace',
      bg: 'bg-gradient-to-br from-blue-100 to-blue-200',
      icon: Building2,
      color: 'text-blue-600'
    },
    { 
      title: 'Get business setup', 
      subtitle: 'Complete registration',
      bg: 'bg-gradient-to-br from-green-100 to-green-200',
      icon: FileText,
      color: 'text-green-600'
    },
    { 
      title: 'Compliance tools', 
      subtitle: 'Stay legally compliant',
      bg: 'bg-gradient-to-br from-purple-100 to-purple-200',
      icon: Briefcase,
      color: 'text-purple-600'
    }
  ];

  const popularSpaces = [
    { name: 'BKC Premium Hub', location: 'Bandra Kurla Complex', type: 'Premium' },
    { name: 'Connaught Place', location: 'CP, New Delhi', type: 'Heritage' },
    { name: 'Electronic City', location: 'Bangalore', type: 'Tech Hub' },
    { name: 'Koramangala', location: 'Bangalore', type: 'Startup' },
    { name: 'Gurgaon Central', location: 'Gurugram', type: 'Corporate' },
    { name: 'Lower Parel', location: 'Mumbai', type: 'Business' }
  ];

  const complianceServices = [
    'GST Registration',
    'Company Formation', 
    'FSSAI License',
    'Trade License',
    'Professional Tax',
    'Labour License'
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-8rem)]">
          
          {/* Left Panel - Chat Interface */}
          <div className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow-sm">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FS</span>
                </div>
                <h1 className="text-xl font-semibold text-gray-900">New Chat</h1>
              </div>
            </div>

            {/* Chat Content */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Building2 className="w-10 h-10 text-pink-500" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Need WorkSpace / Business Setup ?</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-md">
                Hey ! I am here to assist you with end to end workspace and compliance requirements
              </p>

              {/* Large Input Area */}
              <div className="w-full max-w-md border-2 border-gray-200 rounded-2xl p-4 mb-6 bg-gray-50 min-h-[120px]">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask me anything about workspaces, business setup, or compliance..."
                  className="w-full h-full bg-transparent resize-none outline-none text-gray-700 placeholder-gray-400"
                  rows={4}
                />
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center gap-3 bg-gray-50 rounded-full p-3">
                <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                  <Plus className="w-5 h-5 text-gray-600" />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask anything..."
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                  <Mic className="w-5 h-5 text-gray-600" />
                </button>
                <button 
                  onClick={handleSendMessage}
                  className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="text-xs text-gray-400 text-center mt-2">
                FlashSpace can make mistakes. Check important info.
              </p>
            </div>
          </div>

          {/* Right Panel - Information Sections */}
          <div className="space-y-6 overflow-y-auto">
            
            {/* Popular Spaces Section */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Popular Spaces in Delhi</h3>
                <MapPin className="w-5 h-5 text-gray-400" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {popularSpaces.map((space, index) => (
                  <div 
                    key={index}
                    className="aspect-square border border-gray-200 rounded-lg p-3 hover:border-blue-300 cursor-pointer transition-colors bg-gray-50 hover:bg-blue-50"
                  >
                    <div className="text-xs font-medium text-gray-900 mb-1">{space.name}</div>
                    <div className="text-xs text-gray-500">{space.location}</div>
                    <div className="text-xs text-blue-600 mt-2">{space.type}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get started</h3>
              <div className="grid grid-cols-3 gap-3">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <div 
                      key={index}
                      className={`${action.bg} rounded-xl p-4 cursor-pointer hover:scale-105 transition-transform`}
                    >
                      <IconComponent className={`w-6 h-6 ${action.color} mb-2`} />
                      <div className="text-sm font-medium text-gray-900">{action.title}</div>
                      <div className="text-xs text-gray-600 mt-1">{action.subtitle}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Compliance Services */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Needs For You</h3>
              <div className="grid grid-cols-3 gap-3">
                {complianceServices.map((service, index) => (
                  <div 
                    key={index}
                    className="aspect-square border border-gray-200 rounded-lg p-3 hover:border-green-300 cursor-pointer transition-colors bg-gray-50 hover:bg-green-50 flex items-center justify-center"
                  >
                    <div className="text-xs font-medium text-gray-900 text-center">{service}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Get in Touch */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch with a Consultant !</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center">
                  <Users className="w-8 h-8 text-gray-400" />
                </div>
                <div className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-blue-500"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-blue-500"
                  />
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-blue-500"
                  />
                  <button className="w-full bg-gray-900 text-white py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                    Submit
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StartChatting;