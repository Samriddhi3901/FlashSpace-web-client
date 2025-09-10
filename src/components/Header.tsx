
  import { useState } from "react";
  import { Button } from "@/components/ui/button";
  import { Menu, X, Phone } from "lucide-react";
  // Using uploaded FlashSpace logo
  
  const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const navItems = [
      { label: "All Solutions", href: "#solutions" },
      { label: "List Your Space", href: "/list-your-space" },
      { label: "Go Global", href: "#global" },
    ];
  
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
              />
            </div>
  
            {/* Desktop Navigation - Right Aligned */}
            <nav className="hidden lg:flex items-center ml-auto mr-4">
              <div className="flex items-center space-x-8">
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
  
            {/* CTA Button */}
            <div className="hidden lg:block">
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
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.href)}
                    className="text-left text-foreground/80 hover:text-primary transition-colors duration-300 font-medium py-2 font-content"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  onClick={() => handleNavigation("#contact")}
                  className="bg-accent hover:bg-accent/90 text-black w-full mt-4 py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get in Touch
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  };
  
  export default Header;