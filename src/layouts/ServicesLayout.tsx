import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ServicesSidebar from "@/components/ServicesSidebar";
import VideoBackground from "@/components/VideoBackground";

interface ServicesLayoutProps {
  children: ReactNode;
}

const ServicesLayout = ({ children }: ServicesLayoutProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Video Background */}
      <VideoBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-black/50 to-slate-800/60 backdrop-blur-sm z-10"></div>
      
      {/* Header */}
      <header className="relative z-20 border-b border-white/10 bg-white/5 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors group">
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-20 flex">
        <ServicesSidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ServicesLayout;