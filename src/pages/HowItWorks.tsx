import { Link } from "react-router-dom";
import { MessageSquare, Camera, Palette, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery & Experience Goals",
    description: "We start with a conversation to understand your property, your brand, and what you want guests to feel when they explore your virtual experience. We'll discuss your goals, target audience, and key spaces to highlight.",
    details: [
      "15-minute discovery call",
      "Property questionnaire",
      "Goal alignment session",
      "Timeline planning",
    ],
  },
  {
    number: "02",
    icon: Camera,
    title: "On-Site 360° Capture",
    description: "Our team visits your property with professional 360° photography equipment. We capture every space that matters—from the entrance to guest rooms, restaurants to pools—ensuring the best angles and lighting.",
    details: [
      "Professional equipment",
      "Optimal lighting timing",
      "Multiple angle captures",
      "Quality assurance review",
    ],
  },
  {
    number: "03",
    icon: Palette,
    title: "Story & Experience Design",
    description: "This is where magic happens. We craft your virtual experience with smooth navigation, interactive hotspots, and if desired, a story-led narrative that guides guests through your property's unique journey.",
    details: [
      "Navigation flow design",
      "Hotspot placement",
      "Brand integration",
      "Story development",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Delivery, Hosting & Sharing",
    description: "Your virtual tour goes live! We host it on reliable servers, provide embed codes for your website, and guide you on sharing it across social media, booking platforms, and marketing materials.",
    details: [
      "Cloud hosting setup",
      "Website integration",
      "Social media assets",
      "Analytics dashboard",
    ],
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-sand">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                How It <span className="text-accent">Works</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                From our first conversation to your live virtual tour, we make the process simple and stress-free. 
                Here's what to expect when you work with us.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-7 top-20 bottom-0 w-0.5 bg-border hidden md:block" />
                  )}

                  <div className="flex gap-8 mb-16 last:mb-0">
                    {/* Icon */}
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-sunset flex items-center justify-center relative z-10">
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-medium transition-all duration-300">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="md:hidden w-12 h-12 rounded-xl bg-gradient-sunset flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-accent font-medium text-sm">Step {step.number}</span>
                          <h3 className="font-serif text-2xl font-bold text-foreground mt-1">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        {step.details.map((detail, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {detail}
                          </div>
                        ))}
                      </div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Book a free 15-minute call and let's discuss how we can bring your property to life online.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">
                Book Your Free Call
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

export default HowItWorks;
