import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent mb-8">
            <Calendar className="w-8 h-8 text-accent-foreground" />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Resort's Online Presence?
          </h2>

          {/* Description */}
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free 15-minute discovery call. We'll discuss your property, understand your goals, 
            and show you exactly how virtual tours can increase your bookings.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">
                <Calendar className="w-5 h-5" />
                Book Your Free Demo Call
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#demo">
                Explore the Demo First
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Trust Note */}
          <p className="text-primary-foreground/50 text-sm mt-8">
            No commitment required • 15-minute call • See results fast
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
