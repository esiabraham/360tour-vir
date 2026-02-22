import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroResort from "@/assets/hero-resort.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroResort})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/40 to-foreground/70" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Trusted by leading resorts in Ghana
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Immersive Virtual Experiences That{" "}
            <span className="text-gradient-sunset">Increase Resort Bookings</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Let guests experience your resort online before they book. Our 360° virtual tours create emotional connections that drive conversions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#demo">
                <Play className="w-5 h-5" />
                Explore the Demo Experience
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                Book a Free Demo Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            {[
              { value: "35%", label: "Booking Increase" },
              { value: "4x", label: "Longer Site Visits" },
              { value: "50+", label: "Properties Served" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
