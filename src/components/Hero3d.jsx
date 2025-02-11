import { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function App() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        requestAnimationFrame(() => {
          if (parallaxRef.current) {
            parallaxRef.current.style.transform = `translateY(${lastScrollY * 0.3}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={parallaxRef}
      className="w-full h-screen flex items-center justify-center will-change-transform"
    >
      <Spline scene="https://prod.spline.design/YuHkT-kqL1047iun/scene.splinecode" />
    </div>
  );
}
