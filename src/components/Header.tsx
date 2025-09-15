import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Building2, Users, Zap, FileText, UserCheck } from "lucide-react";
// import FileUploadButton from "./FileUploadButton";
// Using uploaded FlashSpace logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "List Your Space", href: "/list-your-space" },
    { label: "Go Global", href: "/coming-soon" },
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
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
                className="relative"
                tabIndex={0}
              >
                <button
                  className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300 font-medium font-content flex items-center gap-1 cursor-pointer"
                  onClick={() => setIsDropdownOpen((open) => !open)}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  All Solutions
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}><path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <div
                  className={`absolute left-0 top-full min-w-[320px] bg-white border border-border rounded-lg shadow-lg z-50 mt-2 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'}`}
                  style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
                  onMouseEnter={() => { setIsDropdownHovered(true); setIsDropdownOpen(true); }}
                  onMouseLeave={() => { setIsDropdownHovered(true); setIsDropdownOpen(true); }}
                >
                  <div className="p-2">
                    {[
                      { 
                        icon: Building2, 
                        label: "Virtual Spaces", 
                        description: "Professional business addresses & mail handling",
                        href: "/solutions/virtual-space" 
                      },
                      { 
                        icon: Users, 
                        label: "Coworking Spaces", 
                        description: "Flexible workspaces for teams & individuals",
                        href: "/solutions/coworking-space" 
                      },
                      { 
                        icon: Zap, 
                        label: "On Demand", 
                        description: "Meeting rooms & conference spaces as needed",
                        href: "/solutions/on-demand" 
                      },
                      { 
                        icon: FileText, 
                        label: "Business Setup", 
                        description: "Company registration & compliance services",
                        href: "/solutions/business-setup" 
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
                        href: "/solutions/virtual-space" 
                      },
                      { 
                        icon: Users, 
                        label: "Coworking Spaces", 
                        description: "Flexible workspaces for teams & individuals",
                        href: "/solutions/coworking-space" 
                      },
                      { 
                        icon: Zap, 
                        label: "On Demand", 
                        description: "Meeting rooms & conference spaces as needed",
                        href: "/solutions/on-demand" 
                      },
                      { 
                        icon: FileText, 
                        label: "Business Setup", 
                        description: "Company registration & compliance services",
                        href: "/solutions/business-setup" 
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