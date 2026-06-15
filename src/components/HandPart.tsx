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
      className="flex items-center absolute right-0 max-sm:-right-50 justify-center gap-2 flex-col"
      onFocus={() => setIsMouse(true)}
      onBlur={() => setIsMouse(false)}
      tabIndex={0}
      aria-haspopup="true"
      aria-expanded={isMouse ? "true" : "false"}>
      {" "}
      <img
        src="/arrowUp.png"
        loading="lazy"
        className="size-30 rotate-z-180"
        aria-hidden
      />
      {isMouse && (
        <div
          aria-live="polite"
          aria-label="What user is like"
          className="absolute left-30 size-50">
          <p className="text-xl">I love supernatural.I am live in Russia.</p>
        </div>
      )}
      <img
        src="/hand.png"
        className={`${isMouse ? "opacity-20" : ""} w-50 transition-opacity duration-150`}
        loading="lazy"
        alt="Hand — decoration element"
      />
    </div>
  );
}
