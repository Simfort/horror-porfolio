import { useState } from "react";

export default function SkeletonPart({
  parallaxFactor,
  mousePos,
}: {
  parallaxFactor: number;
  mousePos: {
    x: number;
    y: number;
  };
}) {
  const [isMouse, setIsMouse] = useState(false);

  // Расчёт смещения для параллакса
  const parallaxX = mousePos.x * parallaxFactor;
  const parallaxY = mousePos.y * parallaxFactor;

  return (
    <div
      onMouseEnter={() => setIsMouse(true)}
      onMouseLeave={() => setIsMouse(false)}
      style={{
        transform: `translate(${parallaxX}px, ${parallaxY}px)`,
        willChange: "transform",
        transition: "2s linear",
      }}
      className="flex items-center max-sm:-left-50 absolute  left-0  justify-center gap-2 flex-col">
      <img
        src="/head.png"
        className={`${isMouse ? "opacity-20" : ""} w-50 transition-opacity duration-150`}
        alt="Head"
        loading="lazy"
      />
      <img src="/arrowUp.png" loading="lazy" className="size-30 rotate-z-5" />
      {isMouse && (
        <div className="absolute left-30 size-50">
          <p className="text-xl">
            My name is David.I 15 years old.I am a fullstack developer.
          </p>
        </div>
      )}
    </div>
  );
}
