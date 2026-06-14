import { useEffect, useState } from "react";

export function useView<T extends Element | null>(
  containerRef: React.RefObject<T>,
) {
  const [isView, setIsView] = useState(false);
  useEffect(() => {
    console.log(containerRef);
    if (!containerRef || !containerRef.current) return;

    const interesticObserver = new IntersectionObserver(
      (entries) => {
        entries.map((entry) => {
          if (entry.isIntersecting) {
            setIsView(true);
          } else {
            setIsView(false);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      },
    );

    const element = containerRef.current;
    interesticObserver.observe(element);
    return () => {
      interesticObserver.disconnect();
    };
  }, [containerRef]);
  return isView;
}
