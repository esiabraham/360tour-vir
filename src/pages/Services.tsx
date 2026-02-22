import { Link } from "react-router-dom";
import { Camera, Sparkles, Globe, Headphones, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const services = [
  {
    icon: Camera,
    title: "360° Virtual Tours",
    description: "Immersive panoramic experiences that let potential guests explore every corner of your property from anywhere in the world.",
    benefits: [
      "Professional 360° photography capture",
      "Interactive navigation with smooth transitions",
      "Mobile, tablet, and VR headset compatible",
      "Embed on your website or social media",
      "Custom hotspots highlighting key amenities",
      "Detailed floor plans integration",
    ],
  },
  {
    icon: Sparkles,
    title: "Story-Led Signature Experiences",
    description: "Transform your virtual tour into an emotional journey. We craft custom narratives that showcase your resort's unique story and character.",
    benefits: [
      "Custom storyline development",
      "Professional voiceover narration",
      "Ambient sounds and music",
      "Highlight unique selling points",
      "Brand voice integration",
      "Multi-language support available",
    ],
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Beautiful, fast, and conversion-optimized websites designed to showcase your property and turn visitors into guests.",
    benefits: [
      "Conversion-focused design",
      "Seamless virtual tour integration",
      "Booking system integration",
      "SEO optimization for visibility",
      "Fast loading performance",
      "Mobile-first responsive design",
    ],
  },
  {
    icon: Headphones,
    title: "Hosting & Support",
    description: "We handle all the technical aspects so you can focus on what matters most—welcoming guests to your property.",
    benefits: [
      "Reliable cloud hosting",
      "Regular updates and maintenance",
      "Analytics and performance reports",
      "Priority email and phone support",
      "Content updates as needed",
      "99.9% uptime guarantee",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-sand">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our <span className="text-accent">Services</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                From capturing stunning 360° imagery to crafting immersive story-led experiences, 
                we provide everything you need to showcase your property and boost bookings.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-sunset flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-accent" />
                          </div>
                          <span className="text-foreground text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-ocean opacity-90 flex items-center justify-center overflow-hidden shadow-large">
                      <service.icon className="w-24 h-24 text-white/20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Let's discuss how we can create an immersive experience for your property.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
