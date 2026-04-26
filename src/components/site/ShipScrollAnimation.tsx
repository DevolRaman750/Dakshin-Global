import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Import all frames and sort them
const framesGlob = import.meta.glob('/src/assets/frames-animation/*.jpg', { eager: true, query: '?url', import: 'default' });
const frameUrls = Object.entries(framesGlob)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([_, url]) => url as string);

export const ShipScrollAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const imgElements = frameUrls.map((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      return img;
    });
    setImages(imgElements);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context || images.length === 0 || !containerRef.current) return;

    let currentFrame = -1;

    const drawImage = (index: number) => {
      if (index === currentFrame) return; // Prevent redundant draws
      const img = images[index];
      if (img && img.complete) {
        // Calculate scale to cover the canvas
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          img, 
          0, 0, img.width, img.height,
          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
        currentFrame = index;
      }
    };

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Redraw current frame immediately after resize
        const frameToDraw = currentFrame === -1 ? 0 : currentFrame;
        currentFrame = -1; // invalidate to force redraw
        drawImage(frameToDraw);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const playhead = { frame: 0 };

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=400%", // Keep it pinned for 4 times the viewport height
      pin: true,
      scrub: 1, // Add a bit of smoothing to the scrub
      refreshPriority: 1, // CRITICAL: Ensure pin padding is applied BEFORE other sections calculate their start/end
      onUpdate: (self) => {
        const frameIndex = Math.min(
          images.length - 1,
          Math.max(0, Math.floor(self.progress * images.length))
        );
        playhead.frame = frameIndex;
        drawImage(frameIndex);
      }
    });

    // CRITICAL: The images load asynchronously, meaning this pin is created AFTER
    // the global ScrollTriggers (in useScrollMotion) have already calculated their start/end positions.
    // We MUST force a refresh so the other sections account for this new 400vh pin spacer.
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      st.kill();
    };
  }, [images]);

  return (
    <div ref={containerRef} className="h-screen w-full relative overflow-hidden flex items-center justify-center bg-black">
      {imagesLoaded < frameUrls.length && (
        <div className="absolute z-10 flex flex-col items-center text-white/50 gap-4">
           <div className="w-10 h-10 border-4 border-white/20 border-t-white/80 rounded-full animate-spin"></div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
};

