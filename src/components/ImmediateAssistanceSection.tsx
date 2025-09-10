  import { Card, CardContent } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Phone } from "lucide-react";
  
  const ImmediateAssistanceSection = () => {
    return (
      <section className="py-16 px-4 bg-gradient-to-br from-background to-card-hover">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <Card className="glass-card border-accent/30 bg-gradient-to-br from-accent/10 to-primary/5 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold gradient-text-accent mb-4 font-header">Need Immediate Assistance?</h3>
                <p className="text-muted-foreground mb-6 text-lg">Our support team is available 24/7</p>
                <Button className="btn-hero px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
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