import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const VideoSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check initially
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="relative aspect-video max-w-4xl mx-auto mb-12">
      <video 
        className="w-full h-full object-cover rounded-lg shadow-xl"
        controls
        preload="none"
        poster="/images/video-poster.jpg"
        playsInline
      >
        <source 
          src={isMobile ? "/videos/nestra-explainer-mobile.mp4" : "/videos/nestra-explainer-desktop.mp4"} 
          type="video/mp4" 
        />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>
  );
};

export default VideoSection;