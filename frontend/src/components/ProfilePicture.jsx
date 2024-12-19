import { cn } from "utils/cn";
import { useRef } from "react";

export default function ProfilePicture({
  className = "",
  fileType = "story",
  storyPadding = "3px",
  noteInputClassName = "",
  requireNoteInput = false,
  requireFileInput = false,
  cameraIconClassName = "",
}) {
  const hasStory = true;
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      console.log("Selected file:", file);
      // Add logic for handling the selected file (e.g., preview or upload)
    }
  };

  return (
    <div className={cn("relative size-14 rounded-full", className)}>
      <div className="absolute inset-0 z-10">
        <img
          alt="profile pic"
          src="images/default_dp_dark.webp"
          style={{ padding: hasStory ? storyPadding : 0 }}
          className="rounded-full size-full active-story-gradient"
        />
      </div>

      {requireFileInput && (
        <>
          <div className="absolute inset-0 z-20">
            <div
              style={{ padding: hasStory ? storyPadding : 0 }}
              className="flex items-center justify-center size-full"
            >
              <div className="bg-[rgb(85,85,85)] rounded-full size-full opacity-70"></div>
            </div>
          </div>

          <div className="absolute inset-0 z-30">
            <div className="flex items-center justify-center size-full">
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
              >
                <img
                  alt="camera"
                  src="icons/camera.svg"
                  className={cn("size-6 md:size-10", cameraIconClassName)}
                />
              </button>
            </div>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
            accept={fileType === "story" ? "image/*,video/*" : "image/*"}
          />
        </>
      )}

      {requireNoteInput && (
        <div className={cn("absolute z-30 -top-6 left-11", noteInputClassName)}>
          <button
            type="button"
            className="p-2 text-xs border rounded-lg bg-primary border-primary shadow-primary text-secondary"
          >
            Note...
          </button>
          <div className="absolute left-5 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-tertiary"></div>
        </div>
      )}
    </div>
  );
}
