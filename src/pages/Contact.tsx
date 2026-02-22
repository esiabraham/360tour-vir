import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle, Calendar, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  propertyName: z.string().trim().max(150, "Property name must be less than 150 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyName: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0].toString()] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const whatsappNumber = "233XXXXXXXX"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in learning more about virtual tours for my property.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-sand">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Get In <span className="text-accent">Touch</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Ready to showcase your property to the world? Let's start a conversation 
                about how we can help you increase bookings with immersive virtual tours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Contact Info */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Quick Actions */}
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      Quick Actions
                    </h3>
                    
                    {/* Book Demo Call */}
                    <a
                      href="#contact-form"
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-medium transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-sunset flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Book a Demo Call</div>
                        <div className="text-sm text-muted-foreground">Free 15-minute consultation</div>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-medium transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[hsl(142,70%,49%)] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Chat on WhatsApp</div>
                        <div className="text-sm text-muted-foreground">Get a quick response</div>
                      </div>
                    </a>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      Contact Details
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-accent" />
                        <span>Accra, Ghana</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Phone className="w-5 h-5 text-accent" />
                        <span>+233 XX XXX XXXX</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Mail className="w-5 h-5 text-accent" />
                        <span>hello@vista360.gh</span>
                      </div>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="p-6 rounded-xl bg-accent/10 border border-accent/20">
                    <h4 className="font-medium text-foreground mb-2">Response Time</h4>
                    <p className="text-sm text-muted-foreground">
                      We typically respond to inquiries within 24 hours. For urgent matters, 
                      reach out via WhatsApp for faster response.
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-3">
                  <div id="contact-form" className="p-8 rounded-2xl bg-card border border-border shadow-soft">
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                          <Check className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                          Message Sent!
                        </h3>
                        <p className="text-muted-foreground mb-8">
                          Thank you for reaching out. We'll get back to you within 24 hours.
                        </p>
                        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <>
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                          Send Us a Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                Your Name *
                              </label>
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Mensah"
                                className={errors.name ? "border-destructive" : ""}
                              />
                              {errors.name && (
                                <p className="text-destructive text-sm mt-1">{errors.name}</p>
                              )}
                            </div>
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                Email Address *
                              </label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@resort.com"
                                className={errors.email ? "border-destructive" : ""}
                              />
                              {errors.email && (
                                <p className="text-destructive text-sm mt-1">{errors.email}</p>
                              )}
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                                Phone Number
                              </label>
                              <Input
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+233 XX XXX XXXX"
                              />
                            </div>
                            <div>
                              <label htmlFor="propertyName" className="block text-sm font-medium text-foreground mb-2">
                                Property Name
                              </label>
                              <Input
                                id="propertyName"
                                name="propertyName"
                                value={formData.propertyName}
                                onChange={handleChange}
                                placeholder="Coastal Paradise Resort"
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                              Your Message *
                            </label>
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Tell us about your property and what you're looking to achieve..."
                              rows={5}
                              className={errors.message ? "border-destructive" : ""}
                            />
                            {errors.message && (
                              <p className="text-destructive text-sm mt-1">{errors.message}</p>
                            )}
                          </div>

                          <Button
                            type="submit"
                            variant="accent"
                            size="lg"
                            className="w-full"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="w-5 h-5" />
                                Send Message
                              </>
                            )}
                          </Button>
                        </form>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
