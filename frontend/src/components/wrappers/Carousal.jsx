import { cn } from "utils/cn";
import ArrowCircleLeft from "icons/ArrowCircleLeft";
import ArrowCircleRight from "icons/ArrowCircleRight";
import DropDownArrowIcon from "icons/DropDownArrowIcon";
import { Children, useCallback, useEffect, useRef, useState } from "react";

const initial = {
  activeDot: 0,
  scrollLeft: 0,
  overflowingTo: {
    left: false,
    right: false,
  },
};

export default function Carousel({
  children,
  gap = "1rem",
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
  const [carousel, setCarousel] = useState(initial);

  const scrollTo = useCallback(
    (direction) => {
      const scrollContainer = scrollContainerRef.current;

      if (scrollContainer) {
        const scrollAmount = manualScrollAmount || scrollContainer.clientWidth;
        let newScrollLeft = carousel.scrollLeft;

        if (direction === "right") {
          newScrollLeft = Math.min(
            carousel.scrollLeft + scrollAmount,
            scrollContainer.scrollWidth - scrollContainer.clientWidth
          );
        } else if (direction === "left") {
          newScrollLeft = Math.max(carousel.scrollLeft - scrollAmount, 0);
        }

        setCarousel((prev) => ({
          ...prev,
          scrollLeft: newScrollLeft,
          activeDot: Math.round(newScrollLeft / scrollAmount),
          overflowingTo: {
            left: newScrollLeft > 0,
            right:
              newScrollLeft <
              scrollContainer.scrollWidth - scrollContainer.clientWidth,
          },
        }));

        scrollContainer.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        });
      }
    },
    [carousel.scrollLeft]
  );

  useEffect(() => {
    if (
      overrideTouchScreenBehavior ||
      !window.matchMedia("(pointer: coarse)").matches
    ) {
      const scrollContainer = scrollContainerRef.current;

      if (scrollContainer) {
        requestAnimationFrame(() => {
          setCarousel((prev) => ({
            ...prev,
            overflowingTo: {
              left: prev.scrollLeft > 0,
              right: scrollContainer.scrollWidth > scrollContainer.clientWidth,
            },
          }));
        });
      }
    }
  }, [length]);

  return (
    <div className={cn("relative overflow-hidden", carousalStyles)}>
      {/* Left Control */}
      <button
        onClick={() => scrollTo("left")}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 left-0 z-10",
          carousel.overflowingTo.left ? "block" : "hidden",
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
        id="test"
        ref={scrollContainerRef}
        style={{
          gap,
          transition: `transform ${duration}ms`,
          transform: `translateX(-${carousel.scrollLeft}px)`,
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
                idx === carousel.activeDot
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
          carousel.overflowingTo.right ? "block" : "hidden",
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
