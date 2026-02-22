import { useEffect, useRef } from "react";
import "pannellum/build/pannellum.css";
import "pannellum";

interface PannellumViewerProps {
    image: string;
    autoLoad?: boolean;
    compass?: boolean;
    showZoomCtrl?: boolean;
    showFullscreenCtrl?: boolean;
    hotSpots?: Array<{
        pitch: number;
        yaw: number;
        type: "scene" | "info";
        text: string;
        URL?: string;
    }>;
    onSceneChange?: (sceneId: string) => void;
    className?: string;
}

const PannellumViewer = ({
    image,
    autoLoad = true,
    compass = true,
    showZoomCtrl = true,
    showFullscreenCtrl = true,
    hotSpots = [],
    className = "",
}: PannellumViewerProps) => {
    const viewerContainer = useRef<HTMLDivElement>(null);
    const viewerInstance = useRef<any>(null);

    useEffect(() => {
        if (!viewerContainer.current) return;

        // Initialize viewer
        if (!viewerInstance.current && window.pannellum) {
            viewerInstance.current = window.pannellum.viewer(viewerContainer.current, {
                type: "equirectangular",
                panorama: image,
                autoLoad,
                compass,
                showZoomCtrl,
                showFullscreenCtrl,
                hotSpots,
                pitch: 10,
                yaw: 180,
                hfov: 110,
            });
        } else {
            // Updating logic would go here if needed
        }

        return () => {
            if (viewerInstance.current) {
                viewerInstance.current.destroy();
                viewerInstance.current = null;
            }
        };
    }, [image, autoLoad, compass, showZoomCtrl, showFullscreenCtrl, hotSpots]);

    return <div ref={viewerContainer} className={`w-full h-full ${className}`} />;
};

export default PannellumViewer;
