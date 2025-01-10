import { cn } from "utils/cn";
import useStore from "store/_store";
import Image from "components/Image";
import { useEffect, useRef } from "react";
import { useShallow } from "zustand/shallow";

const images = [
  "images/home/screenshot1.webp",
  "images/home/screenshot2.webp",
  "images/home/screenshot3.webp",
  "images/home/screenshot4.webp",
];

export default function PhoneFrame() {
  const intervalRef = useRef(null);

  const [loginPagePhoneFrameIdx, cycleLoginPageFrameImages] = useStore(
    useShallow((state) => [
      state.loginPagePhoneFrameIdx,
      state.cycleLoginPageFrameImages,
    ])
  );

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      cycleLoginPageFrameImages();
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="relative hidden lg:flex">
      <Image
        id="phone-frame"
        alt="phone-frame"
        showSkeleton={false}
        className="w-[465px] h-[635px]"
        src="images/home/phone_frame.webp"
      />

      {images.map((src, idx) => (
        <Image
          id={idx}
          src={src}
          key={idx}
          alt={`ss-${idx}`}
          showSkeleton={false}
          className={cn(
            idx === loginPagePhoneFrameIdx ? "opacity-100" : "opacity-0",
            "absolute top-7 left-[156px] transition-opacity duration-[2s] ease-in"
          )}
        />
      ))}
    </div>
  );
}
