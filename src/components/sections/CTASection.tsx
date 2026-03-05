import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden border-t border-white/5">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-8 border border-primary/30">
            <Calendar className="w-8 h-8 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="font-sans text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Transform Your Business?
          </h2>

          {/* Description */}
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free 15-minute discovery call. We'll discuss your goals,
            and show you exactly how our digital solutions can accelerate your growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full" asChild>
              <Link to="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Free Demo Call
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white/20 hover:bg-white/5 text-white bg-transparent rounded-full" asChild>
              <a href="#demo">
                Explore the Demo First
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          {/* Trust Note */}
          <p className="text-white/40 text-sm mt-8">
            No commitment required • 15-minute call • See results fast
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
