import { useRef, useState } from "react";
import { cn } from "utils/cn";

export default function ProfilePicture({
  className,
  type = "plain",
  hasStory = false,
}) {
  const imgInputRef = useRef();
  const [note, setNote] = useState("");

  const handleNewProfilePic = (e) => {
    const file = e.target.files[0];

    if (file) {
      console.log("Selected file:", file);
      // Add logic for handling the selected file (e.g., preview or upload)
    }
  };

  return (
    <div className={cn("relative rounded-full", className)}>
      <div className="absolute inset-0 z-10">
        <img
          alt="profile pic"
          src="images/default_dp_dark.webp"
          className={cn("rounded-full size-full", hasStory && "p-1")}
        />
      </div>

      {hasStory && (
        <div className="absolute inset-0 z-0 rounded-full size-full active-story-gradient" />
      )}

      {type === "input" && (
        <>
          <div className="absolute inset-0 z-20">
            <div
              className={cn(
                hasStory && "p-1",
                "flex items-center justify-center size-full"
              )}
            >
              <div className="bg-[rgb(85,85,85)] rounded-full size-full opacity-70"></div>
            </div>
          </div>

          <div className="absolute inset-0 z-30">
            <div
              className={cn(
                hasStory && "p-1",
                "flex items-center justify-center size-full"
              )}
            >
              <img
                alt="camera"
                src="icons/camera.svg"
                className=" size-8 md:size-10"
              />
            </div>
          </div>

          <input
            type="file"
            accept="image/*"
            ref={imgInputRef}
            onChange={handleNewProfilePic}
            className="absolute inset-0 z-30 opacity-0 cursor-pointer"
          />

          <div className="absolute left-0 z-40 -top-5 md:-top-8 md:left-8">
            <button className="bg-[rgb(54,54,54)] text-[rgb(168,168,168)] text-xs px-2 py-3 rounded-lg flex items-center justify-center">
              Note...
            </button>
            <div className="absolute left-3 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-[rgb(54,54,54)]"></div>
          </div>
        </>
      )}
    </div>
  );
}
