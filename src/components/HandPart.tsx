import { useState } from "react";

export default function HandPart({
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
        transition: "0.5s linear",
      }}
      className="flex items-center absolute right-0 max-sm:-right-50 justify-center gap-2 flex-col">
      {" "}
      <img src="/arrowUp.png" loading="lazy" className="size-30 rotate-z-180" />
      {isMouse && (
        <div className="absolute left-30 size-50">
          <p className="text-xl">I love supernatural.I am live in Russia.</p>
        </div>
      )}
      <img
        src="/hand.png"
        className={`${isMouse ? "opacity-20" : ""} w-50 transition-opacity duration-150`}
        alt="Hand"
        loading="lazy"
      />
    </div>
  );
}
