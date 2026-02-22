import { Link } from "react-router-dom";
import { Heart, Eye, Target, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const values = [
  {
    icon: Eye,
    title: "Immersion First",
    description: "We believe the best way to build booking confidence is to let guests truly experience a space before they arrive. Our virtual tours create emotional connections that photos alone can't achieve.",
  },
  {
    icon: Heart,
    title: "Story-Driven",
    description: "Every property has a unique story. We don't just capture spaces—we craft experiences that communicate your brand's character and make guests feel at home before they book.",
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "Beautiful visuals are just the beginning. We measure success by the impact on your bookings, guest satisfaction, and the confidence travelers feel when choosing your property.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We work as an extension of your team, understanding your goals deeply and delivering solutions tailored to your specific needs and audience.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-sand">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                About <span className="text-accent">Vista360</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                We're on a mission to help hospitality brands increase booking confidence 
                through immersive virtual experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    We believe that travelers deserve to feel confident about their accommodation choices. 
                    Too often, guests book based on limited photos only to arrive and find something different 
                    from what they expected.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Vista360 bridges that gap. Our immersive virtual tours let potential guests explore your 
                    property as if they were already there—walking through lobbies, stepping into rooms, 
                    and experiencing the atmosphere that makes your resort special.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Based in Ghana, we're proud to help West African hospitality brands showcase their 
                    properties to the world, driving tourism and building lasting connections between 
                    resorts and their future guests.
                  </p>
                </div>
                <div className="aspect-square rounded-2xl bg-gradient-ocean flex items-center justify-center shadow-large">
                  <div className="text-center text-white p-8">
                    <div className="font-serif text-6xl font-bold mb-2">50+</div>
                    <div className="text-white/80 text-lg">Properties Transformed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These principles guide everything we do, from how we capture your property 
                to how we support you after launch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-medium transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-sunset flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Ready to give your guests the confidence to book? Let's start a conversation.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">
                Get In Touch
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

export default About;
