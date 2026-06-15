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
      onFocus={() => setIsMouse(true)}
      onBlur={() => setIsMouse(false)}
      tabIndex={0}
      aria-haspopup="true"
      aria-expanded={isMouse ? "true" : "false"}
      style={{
        transform: `translate(${parallaxX}px, ${parallaxY}px)`,
        willChange: "transform",
        transition: "2s linear",
      }}
      className="flex items-center max-sm:-left-50 absolute left-0 justify-center gap-2 flex-col focus:outline-2 focus:outline-blue-500 focus:rounded">
      <img
        src="/head.png"
        className={`${isMouse ? "opacity-20" : ""} w-50 transition-opacity duration-150`}
        alt="Head — decoration element"
        loading="lazy"
      />
      <img
        src="/arrowUp.png"
        loading="lazy"
        className="size-30 rotate-z-5"
        aria-hidden="true"
      />
      {isMouse && (
        <div
          className="absolute left-30 size-50"
          role="region"
          aria-label="Information about user"
          aria-live="polite">
          <p className="text-xl">
            My name is David. I am 15 years old. I am a fullstack developer.
          </p>
        </div>
      )}
    </div>
  );
}
