import { useState } from "react";
import { Eye } from "lucide-react";
import PannellumViewer from "@/components/ui/PannellumViewer";

const VirtualTourDemo = () => {
  // Using the absolute path from public as requested/implied for vite
  const panoramaImage = "/panorama.jpg";

  return (
    <div className="space-y-6">
      {/* Demo Label */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
          <Eye className="w-4 h-4" />
          Sample 360° Virtual Experience – Demo Resort
        </div>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          Explore our demo resort in full 360° interactive glory. Click and drag to look around.
        </p>
      </div>

      {/* Tour Container */}
      <div className="relative rounded-2xl overflow-hidden shadow-large aspect-[16/9] w-full">
        <PannellumViewer
          image={panoramaImage}
          autoLoad={true}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default VirtualTourDemo;
