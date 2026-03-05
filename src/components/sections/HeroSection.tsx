import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Stars/Dust (optional simple background texture) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-10">

          {/* Headline */}
          <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            Driving growth with <br />
            <span className="text-glow text-white">Software Development.</span>
          </h1>

          {/* Subheadline & Badge */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
              We're a full-service Tech Agency <span className="inline-block animate-bounce px-2">👋</span> <br />
              We turn businesses Into digital <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"><Sparkles className="w-4 h-4" /> industry leaders.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg" asChild>
              <a href="#services">
                Our services
              </a>
            </Button>
            <Button variant="outline" size="xl" className="rounded-full px-8 py-6 text-lg border-white/20 hover:bg-white/5 text-white bg-transparent backdrop-blur-sm" asChild>
              <Link to="/contact">
                Get in touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
