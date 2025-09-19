import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Building2, Users, Zap, FileText, UserCheck, ArrowRight } from "lucide-react";
// import FileUploadButton from "./FileUploadButton";
// Using uploaded FlashSpace logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "List Your Space", href: "/list-your-space" },
    { label: "Go Global", href: "/coming-soon" },
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="https://cdn.prod.website-files.com/664330484432dcdd6519a8fd/665dd8e0007de68a44f3750b_Black%20and%20White%20Bold%20Typography%20Clothing%20Brand%20Logo%20(940%20x%20400%20px)%20(940%20x%20200%20px)%20(940%20x%20150%20px).png" 
              alt="FlashSpace Logo" 
              className="h-8 w-auto"
              onClick={() => handleNavigation("/")}
              style={{ cursor: 'pointer' }}
            />
          </div>

          {/* Desktop Navigation - Right Aligned */}
          <nav className="hidden lg:flex items-center ml-auto mr-4">
            <div className="flex items-center space-x-8">
              {/* All Solutions Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setIsDropdownOpen(false);
                }}
              >
                <button
                  className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300 font-medium font-content flex items-center gap-1 cursor-pointer"
                  onClick={() => setIsDropdownOpen((open) => !open)}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsDropdownOpen((open) => !open);
                    }
                  }}
                >
                  All Solutions
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}><path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <div
                  className={`absolute left-1/2 top-full w-[600px] bg-white border border-border rounded-lg shadow-lg z-50 mt-2 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'}`}
                  style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.08)', transform: 'translateX(-50%)' }}
                >
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Left: On-Demand sub-features */}
                      <div className="border border-border/50 rounded-lg p-4 bg-white/50">
                        <div className="flex items-center gap-2 mb-1">
                          <Zap className="w-4 h-4 text-primary" />
                          <h4 className="text-sm font-semibold">On-Demand</h4>
                        </div>
                        <p className="text-xs text-foreground/60 mb-3">Book by the hour or day</p>
                        <div className="flex flex-col">
                          {[
                            { label: 'Meeting Rooms', type: 'meeting-room' },
                            { label: 'Training Rooms', type: 'training-room' },
                            { label: 'Phone Booths', type: 'phone-booth' },
                            { label: 'Day Offices', type: 'day-office' },
                          ].map((item) => (
                            <button
                              key={item.type}
                              className="flex items-center justify-between text-left text-sm px-3 py-2 rounded-md hover:bg-accent/10 transition-colors"
                              onClick={() => { handleNavigation(`/solutions/on-demand?type=${item.type}`); setIsDropdownOpen(false); }}
                            >
                              <span className="text-foreground/80">{item.label}</span>
                              <ArrowRight className="w-4 h-4 text-foreground/40" />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Right: Three main solution cards */}
                      <div className="grid grid-cols-1 gap-3">
                        {[ 
                          {
                            icon: Building2,
                            title: 'Virtual Office',
                            desc: 'Business address, mail handling, call forwarding',
                            href: '/services/virtual-office',
                          },
                          {
                            icon: Users,
                            title: 'Coworking Space',
                            desc: 'Flexible desks, private cabins, team suites',
                            href: '/services/coworking-space',
                          },
                          {
                            icon: FileText,
                            title: 'Business Setup',
                            desc: 'Company registration, GST, compliance',
                            href: '/services/business-setup',
                          },
                        ].map(({ icon: Icon, title, desc, href }) => (
                          <div
                            key={title}
                            className="group flex items-start gap-3 p-4 rounded-lg border border-border/60 hover:bg-accent/10 hover:border-border cursor-pointer transition-colors"
                            onClick={() => { handleNavigation(href); setIsDropdownOpen(false); }}
                          >
                            <Icon className="w-5 h-5 text-primary mt-0.5" />
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h5 className="text-sm font-semibold group-hover:text-primary">{title}</h5>
                                <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-primary" />
                              </div>
                              <p className="text-xs text-foreground/60 mt-1">{desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTAs */}
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <button
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent/90 text-black rounded-lg transition-colors font-medium text-sm"
                        onClick={() => { handleNavigation('#contact'); setIsDropdownOpen(false); }}
                      >
                        <UserCheck className="w-4 h-4" />
                        Get Consultation
                      </button>
                      <button
                        className="flex items-center justify-center gap-2 px-4 py-2.5 border border-border rounded-lg hover:bg-accent/5 text-foreground/80 transition-colors font-medium text-sm"
                        onClick={() => { handleNavigation('#contact'); setIsDropdownOpen(false); }}
                      >
                        Share Requirement
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Other nav items */}
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300 font-medium font-content"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* <FileUploadButton /> */}
            <Button 
              onClick={() => handleNavigation("#contact")}
              className="bg-accent hover:bg-accent/90 text-black px-6 py-2.5 text-sm rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-card border border-border rounded-lg p-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              {/* All Solutions Dropdown for Mobile */}
              <div className="relative">
                <button
                  className="text-left text-foreground/80 hover:text-primary transition-colors duration-300 font-medium py-2 font-content flex items-center gap-1 cursor-pointer w-full"
                  onClick={() => setIsDropdownOpen((open) => !open)}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  All Solutions
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}><path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <div
                  className={`absolute left-0 top-full min-w-[300px] bg-white border border-border rounded-lg shadow-lg z-50 mt-2 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'}`}
                  style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
                >
                  <div className="p-2">
                    {[
                      { 
                        icon: Building2, 
                        label: "Virtual Spaces", 
                        description: "Professional business addresses & mail handling",
                        href: "/services/virtual-office" 
                      },
                      { 
                        icon: Users, 
                        label: "Coworking Spaces", 
                        description: "Flexible workspaces for teams & individuals",
                        href: "/services/coworking-space" 
                      },
                      { 
                        icon: Zap, 
                        label: "On Demand", 
                        description: "Meeting rooms & conference spaces as needed",
                        href: "/services/on-demand" 
                      },
                      { 
                        icon: FileText, 
                        label: "Business Setup", 
                        description: "Company registration & compliance services",
                        href: "/services/business-setup" 
                      },
                    ].map((option) => {
                      const IconComponent = option.icon;
                      return (
                        <div
                          key={option.label}
                          className="dropdown-option flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors cursor-pointer font-content group"
                          onClick={() => { handleNavigation(option.href); setIsDropdownOpen(false); }}
                          tabIndex={0}
                        >
                          <IconComponent className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                              {option.label}
                            </h4>
                            <p className="text-xs text-foreground/60 mt-1 leading-relaxed">
                              {option.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                    
                    {/* Talk to Expert Button */}
                    <div className="mt-3 pt-3 border-t border-border/50">
                      <button
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-accent hover:bg-accent/90 text-black rounded-lg transition-colors font-medium text-sm"
                        onClick={() => { handleNavigation("#contact"); setIsDropdownOpen(false); }}
                      >
                        <UserCheck className="w-4 h-4" />
                        Talk to an Expert
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Other nav items */}
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className="text-left text-foreground/80 hover:text-primary transition-colors duration-300 font-medium py-2 font-content"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-3 mt-4">
                {/* <FileUploadButton /> */}
                <Button 
                  onClick={() => handleNavigation("#contact")}
                  className="bg-accent hover:bg-accent/90 text-black w-full py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get in Touch
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;