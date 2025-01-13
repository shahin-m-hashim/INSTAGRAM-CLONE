import { cn } from "utils/cn";
import useStore from "store/_store";
import { useShallow } from "zustand/shallow";
import ArrowCircleLeft from "icons/ArrowCircleLeft";
import ArrowCircleRight from "icons/ArrowCircleRight";
import DropDownArrowIcon from "icons/DropDownArrowIcon";
import { Children, useCallback, useEffect, useRef } from "react";

export default function Carousal({
  children,
  gap = "1rem",
  id = "carousal",
  duration = 1000,
  showDots = false,
  iconSize = "size-6",
  leftArrowStyle = "",
  rightArrowStyle = "",
  iconType = "extended",
  carousalStyles = "size-full",
  overrideTouchScreenBehavior = false,
  scrollAmount: manualScrollAmount = 0,
}) {
  const scrollContainerRef = useRef(null);
  const length = Children.count(children);

  const [
    carousal,
    handleScroll,
    updateCarousal,
    removeCarousal,
    initializeCarousal,
  ] = useStore(
    useShallow((state) => [
      state.carousals[id],
      state.handleScroll,
      state.updateCarousal,
      state.removeCarousal,
      state.initializeCarousal,
    ])
  );

  const scrollTo = useCallback(
    (direction) => {
      const scrollContainer = scrollContainerRef.current;

      if (scrollContainer) {
        const scrollAmount = manualScrollAmount || scrollContainer.clientWidth;
        let newScrollLeft = carousal?.scrollLeft;

        if (direction === "right") {
          newScrollLeft = Math.min(
            carousal?.scrollLeft + scrollAmount,
            scrollContainer.scrollWidth - scrollContainer.clientWidth
          );
        } else if (direction === "left") {
          newScrollLeft = Math.max(carousal?.scrollLeft - scrollAmount, 0);
        }

        handleScroll(
          id,
          scrollAmount,
          newScrollLeft,
          scrollContainer.clientWidth,
          scrollContainer.scrollWidth
        );

        scrollContainer.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        });
      }
    },
    [carousal?.scrollLeft]
  );

  useEffect(() => {
    initializeCarousal(id);

    if (
      overrideTouchScreenBehavior ||
      !window.matchMedia("(pointer: coarse)").matches
    ) {
      const scrollContainer = scrollContainerRef.current;

      if (scrollContainer) {
        requestAnimationFrame(() => {
          console.log(scrollContainer.clientWidth, scrollContainer.scrollWidth);

          updateCarousal(
            id,
            scrollContainer.clientWidth,
            scrollContainer.scrollWidth
          );
        });
      }
    }

    return () => {
      removeCarousal(id);
    };
  }, [length]);

  return (
    <div className={cn("relative overflow-hidden", carousalStyles)}>
      {/* Left Control */}
      <button
        onClick={() => scrollTo("left")}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 left-0 z-10",
          carousal?.overflowingTo.left ? "block" : "hidden",
          !overrideTouchScreenBehavior && "hide-onts",
          leftArrowStyle
        )}
      >
        {iconType === "extended" ? (
          <ArrowCircleLeft className={iconSize} />
        ) : (
          <div className="bg-[rgba(245,245,245,0.8)] p-1 rotate-90 rounded-full">
            <DropDownArrowIcon className="text-black size-3.5" />
          </div>
        )}
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        style={{
          gap,
          transition: `transform ${duration}ms`,
          transform: `translateX(-${carousal?.scrollLeft}px)`,
        }}
        className={cn(
          "scrollbar-hidden flex items-center size-full",
          !overrideTouchScreenBehavior && "overflow-x-auto-onts"
        )}
      >
        {children}
      </div>

      {/* Dots */}
      {overrideTouchScreenBehavior && length > 1 && showDots && (
        <div className="absolute inset-x-0 z-10 flex items-center justify-center gap-2 px-10 bottom-2">
          {Array.from({ length }).map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "size-2 flex-shrink-0 rounded-full",
                idx === carousal?.activeDot
                  ? "bg-[rgb(245,245,245)]"
                  : "bg-[rgba(245,245,245,0.5)]"
              )}
            />
          ))}
        </div>
      )}

      {/* Right Control */}
      <button
        onClick={() => scrollTo("right")}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 right-0 z-10",
          carousal?.overflowingTo.right ? "block" : "hidden",
          !overrideTouchScreenBehavior && "hide-onts",
          rightArrowStyle
        )}
      >
        {iconType === "extended" ? (
          <ArrowCircleRight className={iconSize} />
        ) : (
          <div className="bg-[rgba(245,245,245,0.8)] p-1 -rotate-90 rounded-full">
            <DropDownArrowIcon className="text-black size-3.5" />
          </div>
        )}
      </button>
    </div>
  );
}
