import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, Clock, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-40 w-60 h-60 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Icon */}
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full shadow-lg shadow-primary/25">
              <Globe className="w-12 h-12 text-white animate-pulse" />
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              We're Going Global!
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Our international expansion is in the works. 
              <br className="hidden md:block" />
              Get ready for FlashSpace's worldwide presence.
            </p>

            {/* Features grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Coming Soon</h3>
                <p className="text-sm text-muted-foreground">Expanding to major cities worldwide</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Global Network</h3>
                <p className="text-sm text-muted-foreground">Premium workspace solutions everywhere</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <Bell className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground">Be the first to know when we launch</p>
              </div>
            </div>

            {/* Call to action */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground mb-6">
                Interested in our global expansion? Get in touch with us!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="px-8">
                  <Link to="/list-your-space">Partner With Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8">
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;