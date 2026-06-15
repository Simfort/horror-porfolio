import { useState } from "react";

export default function EyePart({
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
        transition: "1s linear",
      }}
      className="flex items-center absolute max-sm:-top-20  left-[40%] -top-80 justify-center gap-2 "
      onFocus={() => setIsMouse(true)}
      onBlur={() => setIsMouse(false)}
      tabIndex={0}
      aria-haspopup="true"
      aria-expanded={isMouse ? "true" : "false"}>
      <img
        src="/arrowUp.png"
        loading="lazy"
        className="size-30 rotate-z-90"
        aria-hidden
      />
      {isMouse && (
        <div
          aria-live="polite"
          aria-label="How user rich money"
          className="absolute left-30 size-50">
          <p className="text-xl">I rich money with frilance</p>
        </div>
      )}
      <img
        src="/eye.png"
        className={`${isMouse ? "opacity-20" : ""} w-50 transition-opacity duration-150`}
        loading="lazy"
        alt="Eye — decoration element"
      />
    </div>
  );
}
