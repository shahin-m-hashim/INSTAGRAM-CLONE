/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import ArrowCircleLeft from "icons/ArrowCircleLeft";
import ArrowCircleRight from "icons/ArrowCircleRight";

export default function HorizontalScroller({
  children,
  duration = 1000,
  scrollAmount: manualScrollAmount,
}) {
  const scrollContainerRef = useRef(null);

  const [state, setState] = useState({
    scrollLeft: 0,
    isOverflowingToLeft: false,
    isOverflowingToRight: false,
  });

  const scrollTo = (direction) => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const scrollAmount = manualScrollAmount || scrollContainer.clientWidth;
    let newScrollLeft = state.scrollLeft;

    if (direction === "right") {
      newScrollLeft = Math.min(
        state.scrollLeft + scrollAmount,
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      );
    } else if (direction === "left") {
      newScrollLeft = Math.max(state.scrollLeft - scrollAmount, 0);
    }

    setState((prev) => ({
      ...prev,
      scrollLeft: newScrollLeft,
      isOverflowingToLeft: newScrollLeft > 0,
      isOverflowingToRight:
        newScrollLeft <
        scrollContainer.scrollWidth - scrollContainer.clientWidth,
    }));

    scrollContainer.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!window.matchMedia("(pointer: coarse)").matches) {
      const scrollContainer = scrollContainerRef.current;

      const checkOverflow = () => {
        if (scrollContainer) {
          setState((prev) => ({
            ...prev,
            isOverflowingToRight:
              scrollContainer.scrollWidth > scrollContainer.clientWidth,
            isOverflowingToLeft: prev.scrollLeft > 0,
          }));
        }
      };

      checkOverflow();

      window.addEventListener("resize", checkOverflow);
      return () => window.removeEventListener("resize", checkOverflow);
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 z-10 touch:hidden">
        <div className="flex items-center h-full">
          <button
            onClick={() => scrollTo("left")}
            className={state.isOverflowingToLeft ? "block" : "hidden"}
          >
            <ArrowCircleLeft className="h-6" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        style={{
          transition: `transform ${duration}ms`,
          transform: `translateX(-${state.scrollLeft}px)`,
        }}
        className="touch:overflow-x-auto scrollbar-hidden"
      >
        {children}
      </div>

      <div className="absolute inset-y-0 right-0 z-10 touch:hidden">
        <div className="flex items-center h-full">
          <button
            onClick={() => scrollTo("right")}
            className={state.isOverflowingToRight ? "block" : "hidden"}
          >
            <ArrowCircleRight className="h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
