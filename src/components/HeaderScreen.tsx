import { useState, useRef, useEffect } from "react";
import SkeletonPart from "./SkeletonPart";
import HandPart from "./HandPart";
import EyePart from "./EyePart";

export default function HeaderScreen() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const frameRef = useRef(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    const animate = () => {
      // Плавное приближение к целевой позиции

      setTranslate({ y: -mousePos.y * 0.1, x: -mousePos.x * 0.1 });

      isAnimating.current = true;
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameRef.current);
  }, [mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / 20;
    const deltaY = (e.clientY - centerY) / 20;

    setMousePos({
      x: deltaX * 200,
      y: deltaY * 200,
    });
  };

  return (
    <section
      onPointerMoveCapture={handleMouseMove}
      className="h-screen text-white select-none overflow-hidden relative bg-black px-20">
      <div
        style={{
          transform: `translate(${translate.x}px, ${translate.y}px)`,
          willChange: "transform",
          transition: "2s linear",
        }}
        className="h-full w-full inset-0 flex items-center absolute justify-center">
        <SkeletonPart parallaxFactor={0.001} mousePos={mousePos} />
        <EyePart parallaxFactor={0.001} mousePos={mousePos} />
        <HandPart parallaxFactor={0.001} mousePos={mousePos} />
        <div className="flex items-center size-[70vw] relative justify-center">
          <img
            style={{
              transform: `translate(${mousePos.x * 0.005}px, ${mousePos.y * 0.005}px)`,
              willChange: "transform",
              transition: "2s linear",
            }}
            loading="lazy"
            src="/i.png"
            className="fill-white absolute max-sm:max-w-200  w-auto  -z-1 shrink-0 drop-shadow-lg drop-shadow-red-900 brightness-200 grayscale-100 invert-100 opacity-20 "
            alt="Pentagon logo"
          />
          <div className="flex flex-col items-center gap-10">
            <p className="text-white/50 font-black text-xl">Simfort</p>
            <h1
              style={{
                transform: `translate(${mousePos.x * 0.001}px, ${mousePos.y * 0.001}px)`,
                willChange: "transform",
                transition: "2s linear",
              }}
              className="text-6xl shadow-lg text-center max-sm:text-3xl  drop-shadow-2xl font-extralight">
              WELCOME,TO PORFOLIO
            </h1>
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="absolute bottom-0 h-10 w-full left-0  flex items-center justify-center">
        <a href="#projects" className="relative z-10  ">
          GO
        </a>
      </div>
      <div className="absolute bottom-0 h-10 w-full blur-xl bg-black text-center left-0"></div>
    </section>
  );
}
