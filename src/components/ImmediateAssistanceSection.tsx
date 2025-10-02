import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useScrollAnimation, getAnimationClasses } from "@/hooks/use-scroll-animation";

const ImmediateAssistanceSection = () => {
  const isVisible = useScrollAnimation('immediate-assistance');

  return (
    <section id="immediate-assistance" className="py-16 px-4 bg-[#ffffff]">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Card className={`bg-gradient-to-br from-[#CE7A17] to-[#172A3A] border-0 shadow-xl hover:shadow-2xl transition-all duration-500 ${getAnimationClasses(isVisible, 'scale', 0)}`}>
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'instrument-serif' }}>
                Need Immediate <span className="text-yellow-300">Assistance?</span>
              </h3>
              <p className="text-white/90 mb-8 text-xl">Our support team is available 24/7 to help you get started</p>
              <Button className="bg-white hover:bg-yellow-300 text-[#172A3A] px-10 py-5 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-xl">
                <Phone className="w-6 h-6 mr-3" />
                Call +91-9876-543-210
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImmediateAssistanceSection;