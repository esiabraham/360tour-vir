import VirtualTourDemo from "@/components/VirtualTourDemo";

const DemoShowcase = () => {
  return (
    <section id="demo" className="py-20 md:py-32 bg-gradient-sand">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience It <span className="text-accent">Yourself</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Click through our demo tour to see exactly what your guests will experience. 
            Navigate between spaces, look around freely, and feel what it's like to virtually 
            "walk through" a resort.
          </p>
        </div>

        {/* Virtual Tour Demo */}
        <VirtualTourDemo />
      </div>
    </section>
  );
};

export default DemoShowcase;
