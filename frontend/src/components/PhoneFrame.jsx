import { cn } from "utils/cn";
import { useEffect, useState } from "react";
import Image from "components/Image";

const images = [
  "images/home/screenshot1.webp",
  "images/home/screenshot2.webp",
  "images/home/screenshot3.webp",
  "images/home/screenshot4.webp",
];

export default function PhoneFrame() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative hidden lg:flex">
      <Image
        alt="phone-frame"
        showSkeleton={false}
        className="w-[465px] h-[635px]"
        src="images/home/phone_frame.webp"
      />

      {images.map((src, idx) => (
        <img
          src={src}
          key={idx}
          alt={`screenshot-${idx}`}
          className={cn(
            "absolute top-7 left-[156px] transition-opacity duration-[2s] ease-in",
            idx === currentIdx ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
    </div>
  );
}
