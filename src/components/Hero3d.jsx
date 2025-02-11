import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3); // Ajusta la velocidad del efecto
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{ transform: `translateY(${offset}px)` }}
    >
      <Spline scene="https://prod.spline.design/YuHkT-kqL1047iun/scene.splinecode" />
    </div>
  );
}
