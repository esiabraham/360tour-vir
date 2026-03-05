import { ArrowRight, Code, Smartphone, Globe, Layers } from "lucide-react";
import VirtualTourDemo from "@/components/VirtualTourDemo";
import { Link } from "react-router-dom";

const ServicesPreview = () => {
  return (
    <section id="services" className="py-24 bg-background border-t border-white/5 relative overflow-hidden">

      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-medium text-white tracking-tight">
            Our services
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl text-lg">
            We deliver state-of-the-art digital solutions to empower your business.
          </p>
        </div>

        {/* Bento Grid layout for Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(350px,_auto)]">

          {/* Card 1: Virtual Tour (Spans 2 columns on lg) */}
          <div className="glass-panel p-6 flex flex-col justify-between col-span-1 md:col-span-2 lg:col-span-2 hover:border-primary/30 transition-colors group relative overflow-hidden">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-white">Vista 360 Virtual Tours</h3>
            </div>

            {/* The actual Virtual Tour Demo injected into the bento card */}
            <div className="flex-1 rounded-xl overflow-hidden border border-white/10 relative min-h-[300px] bg-black/50">
              <div className="absolute inset-0 pointer-events-auto">
                <VirtualTourDemo />
              </div>
              <div className="absolute inset-0 bg-transparent pointer-events-none group-hover:bg-primary/5 transition-colors duration-500 z-10"></div>
            </div>
          </div>

          {/* Card 2: WebApp Development */}
          <div className="glass-panel p-8 flex flex-col justify-between col-span-1 hover:border-primary/30 transition-colors group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                <Layers className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Web App Development</h3>
              <p className="text-white/60 text-sm">
                We build scalable, high-performance web applications tailored to your complex business logic and workflow requirements.
              </p>
            </div>
            <div className="mt-8 flex-1 flex items-end">
              <div className="w-full h-32 bg-gradient-to-t from-primary/20 to-transparent rounded-lg border border-white/5 relative overflow-hidden">
                {/* Abstract UI simulation */}
                <div className="absolute bottom-4 left-4 right-4 h-12 bg-white/10 backdrop-blur-md rounded border border-white/10"></div>
                <div className="absolute bottom-20 left-4 w-1/2 h-4 bg-white/10 backdrop-blur-md rounded border border-white/10"></div>
              </div>
            </div>
          </div>

          {/* Card 3: Mobile App Development */}
          <div className="glass-panel p-8 flex flex-col justify-between col-span-1 hover:border-primary/30 transition-colors group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Mobile App Development</h3>
              <p className="text-white/60 text-sm">
                Engage your users on the go with intuitive, native-feeling iOS and Android mobile applications.
              </p>
            </div>
            <div className="mt-8 flex justify-center flex-1 items-end">
              <div className="w-32 h-40 bg-black/80 rounded-t-3xl border-t border-x border-white/20 relative overflow-hidden p-2">
                <div className="w-full h-full border border-white/10 rounded-t-2xl bg-white/5"></div>
              </div>
            </div>
          </div>

          {/* Card 4: Website Development */}
          <div className="glass-panel p-8 flex flex-col justify-between col-span-1 md:col-span-2 lg:col-span-2 hover:border-primary/30 transition-colors group relative overflow-hidden">
            {/* Abstract code background */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none flex items-center justify-center overflow-hidden">
              <pre className="text-[8px] text-primary font-mono select-none">
                {`function init() {
  const website = new Website({
    responsive: true,
    seo: 'optimized',
    design: 'premium'
  });
  website.launch();
}`}
              </pre>
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Website Development</h3>
              <p className="text-white/60 text-sm max-w-sm">
                Create a stunning first impression with pixel-perfect, conversion-optimized marketing websites and landing pages.
              </p>

              <div className="mt-auto pt-8">
                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:text-white transition-colors">
                  Start your project <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
