import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { setLenis } from "./Lenis";

interface SmoothScrollProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ containerRef }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      wrapper: containerRef.current,
    });

    setLenis(lenis); // Set the global instance

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, [containerRef]);

  return null;
};

export default SmoothScroll;