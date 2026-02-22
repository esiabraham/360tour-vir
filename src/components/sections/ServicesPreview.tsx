import { Link } from "react-router-dom";
import { Camera, Sparkles, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Camera,
    title: "360° Virtual Tours",
    description: "Capture every corner of your property with stunning panoramic photography that lets guests explore freely.",
    features: ["Professional 360° capture", "Interactive hotspots", "Mobile-optimized viewing"],
  },
  {
    icon: Sparkles,
    title: "Story-Led Experiences",
    description: "Transform tours into emotional journeys with guided narratives that highlight your resort's unique character.",
    features: ["Custom storylines", "Ambient audio", "Brand integration"],
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Beautiful, conversion-focused websites designed to showcase your virtual experiences and drive bookings.",
    features: ["Booking integration", "SEO optimized", "Performance focused"],
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We <span className="text-accent">Create</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From capturing stunning 360° imagery to crafting immersive story-led experiences, 
            we handle everything you need to boost booking confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-large transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-sunset flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
