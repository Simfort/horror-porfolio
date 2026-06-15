import { useRef } from "react";
import { useView } from "../lib/hooks/useView";
import ImageItem from "./ImageItem";

const paths = [
  "/3d.png",
  "/nextcobec.png",
  "/pac.png",
  "kegel.png",
  "kegel2.png",
  "booksS.png",
  "chat.png",
];

export default function ProjectScreen() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const isView = useView(titleRef);

  return (
    <section
      id="projects"
      className="flex-col overflow-hidden w-screen py-10 flex items-center pt-30 bg-black/90 shadow-2xl">
      <div ref={titleRef} className="relative flex items-center justify-center">
        <img
          src="/hands.png"
          alt="Hands - decoration element"
          className={`${isView ? "opacity-100" : "opacity-0"} max-sm:max-w-80 transition-opacity duration-1000 delay-150 absolute max-w-100 z-0`}
        />
        <h2 className="text-white text-4xl relative z-1">My projects</h2>
      </div>
      <p
        className={`text-white mt-20 max-sm:w-80 w-1/2 ${isView ? "opacity-100" : "opacity-0"} delay-1000 duration-300 transition-opacity  text-center`}>
        I have been programming for 4 years. During this time, I have created
        many websites, from landing pages to websites with AI and PWA
        implementations.
      </p>
      <div className="w-full relative  h-100 bg-black items-center   flex mt-5">
        <div
          ref={carouselRef}
          className="flex gap-5 items-center absolute slide-projects ">
          {paths.map((path, index) => (
            <ImageItem key={index} path={path} />
          ))}
        </div>{" "}
        <div
          ref={carouselRef}
          className="flex gap-5 left-5 items-center absolute slide-projects ">
          {paths.map((path, index) => (
            <ImageItem key={index} path={path} />
          ))}
        </div>
      </div>
      <div className="flex gap-2 items-center mt-5">
        <p className="text-white mt-5">This all in my github</p>

        <a
          href="https://github.com/Simfort"
          aria-label="Github link Simfort"
          className="block">
          {" "}
          <img
            src="/github.png"
            width={50}
            loading="lazy"
            alt="Github icon"
            className=" bg-white rounded-full"
          />
        </a>
      </div>
    </section>
  );
}
