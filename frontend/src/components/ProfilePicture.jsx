import { cn } from "utils/cn";
import { useRef } from "react";
import useStore from "store/_store";
import Image from "components/Image";
import CameraIcon from "icons/CameraIcon";

const theme = localStorage.getItem("theme") || "dark";

export default function ProfilePicture({
  className = "",
  showNote = false,
  hasStory = false,
  fileType = "story",
  storyPadding = "2px",
  noteInputClassName = "",
  requireNoteInput = false,
  requireFileInput = false,
  src = `images/default_dp_${theme}.webp`,
}) {
  const fileInputRef = useRef();

  const setSecondaryWidget = useStore((state) => state.setSecondaryWidget);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <div className={cn("relative size-14 rounded-full", className)}>
      <div className="absolute inset-0 z-10">
        <div
          style={{ padding: hasStory ? storyPadding : 0 }}
          className="rounded-full active-story size-full"
        >
          <Image
            src={src}
            id="profile-pic"
            alt="profile pic"
            className="rounded-full size-full"
          />
        </div>
        {showNote && <span className="w-full text-xs">Your note ...</span>}
      </div>

      {requireFileInput && (
        <>
          <div className="absolute inset-0 z-20">
            <div
              style={{ padding: hasStory ? storyPadding : 0 }}
              className="flex items-center justify-center size-full"
            >
              <div className="rounded-full bg-tertiary size-full opacity-70"></div>
            </div>
          </div>

          <div className="absolute inset-0 z-30">
            <div className="flex items-center justify-center size-full">
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
              >
                <CameraIcon className="size-10" />
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
            onClick={() => setSecondaryWidget("note")}
            className="p-2 text-xs rounded-lg bg-note text-tertiary"
          >
            Note...
          </button>
          <div className="absolute left-5 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-note"></div>
        </div>
      )}
    </div>
  );
}
