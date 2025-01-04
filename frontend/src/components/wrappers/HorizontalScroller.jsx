import { cn } from "utils/cn";
import { useEffect, useRef, useState } from "react";
import ArrowCircleLeft from "icons/ArrowCircleLeft";
import ArrowCircleRight from "icons/ArrowCircleRight";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

export default function HorizontalScroller({
  children,
  dots = 0,
  duration = 1000,
  leftArrowStyle = "",
  rightArrowStyle = "",
  iconType = "extended",
  overrideTouchScreenBehavior = false,
  scrollAmount: manualScrollAmount = 0,
}) {
  const scrollContainerRef = useRef(null);

  const [state, setState] = useState({
    activeDot: 0,
    scrollLeft: 0,
    isOverflowingToLeft: false,
    isOverflowingToRight: false,
  });

  const scrollTo = (direction) => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
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
        activeDot: Math.round(newScrollLeft / scrollAmount),
        isOverflowingToLeft: newScrollLeft > 0,
        isOverflowingToRight:
          newScrollLeft <
          scrollContainer.scrollWidth - scrollContainer.clientWidth,
      }));

      scrollContainer.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (
      overrideTouchScreenBehavior ||
      !window.matchMedia("(pointer: coarse)").matches
    ) {
      const scrollContainer = scrollContainerRef.current;

      if (scrollContainer) {
        setState((prev) => ({
          ...prev,
          isOverflowingToRight:
            scrollContainer.scrollWidth > scrollContainer.clientWidth,
          isOverflowingToLeft: prev.scrollLeft > 0,
        }));
      }
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className={cn(
          "absolute inset-y-0 left-0 z-10",
          !overrideTouchScreenBehavior && "hide-onts",
          leftArrowStyle
        )}
      >
        <div className="flex items-center h-full">
          <button
            onClick={() => scrollTo("left")}
            className={state.isOverflowingToLeft ? "block" : "hidden"}
          >
            {iconType === "extended" ? (
              <ArrowCircleLeft className="size-6" />
            ) : (
              <div className="bg-[rgba(245,245,245,0.8)] p-1 rotate-90 rounded-full">
                <DropDownArrowIcon className="text-black size-3.5" />
              </div>
            )}
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        style={{
          transition: `transform ${duration}ms`,
          transform: `translateX(-${state.scrollLeft}px)`,
        }}
        className={cn(
          "scrollbar-hidden",
          !overrideTouchScreenBehavior && "overflow-x-auto-onts"
        )}
      >
        {children}
      </div>

      {overrideTouchScreenBehavior && dots > 0 && (
        <div className="absolute inset-x-0 z-10 flex items-center justify-center gap-2 px-10 bottom-2">
          {Array.from({ length: dots }).map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "size-2 flex-shrink-0 rounded-full",
                idx === state.activeDot
                  ? "bg-[rgb(245,245,245)]"
                  : "bg-[rgba(245,245,245,0.5)]"
              )}
            />
          ))}
        </div>
      )}

      <div
        className={cn(
          "absolute inset-y-0 right-0 z-10",
          !overrideTouchScreenBehavior && "hide-onts",
          rightArrowStyle
        )}
      >
        <div className="flex items-center h-full">
          <button
            onClick={() => scrollTo("right")}
            className={state.isOverflowingToRight ? "block" : "hidden"}
          >
            {iconType === "extended" ? (
              <ArrowCircleRight className="size-6" />
            ) : (
              <div className="bg-[rgba(245,245,245,0.8)] p-1 -rotate-90 rounded-full">
                <DropDownArrowIcon className="text-black size-3.5" />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
