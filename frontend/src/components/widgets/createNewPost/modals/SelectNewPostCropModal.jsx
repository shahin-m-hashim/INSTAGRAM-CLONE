import { cn } from "utils/cn";
import useStore from "store/_store";
import { useShallow } from "zustand/shallow";
import SquareAspectRatioIcon from "icons/SquareAspectRatioIcon";
import LandscapeAspectRatioIcon from "icons/LandscapeAspectRatioIcon";

export default function SelectNewPostCropModal() {
  const [crop, setNewPostCrop, activeCropModal] = useStore(
    useShallow((state) => [
      state.newPost.crop,
      state.setNewPostCrop,
      state.newPost.activeCropModal,
    ])
  );

  return (
    <>
      {activeCropModal === "crop" && (
        <div className="absolute flex flex-col rounded-lg shadow-md bottom-10 bg-widget opacity-90">
          <button
            type="button"
            onClick={() => setNewPostCrop("square")}
            className={cn(
              "flex items-center gap-3 p-3 font-semibold",
              crop === "square" ? "opacity-100" : "opacity-60"
            )}
          >
            <span>1:1</span>
            <SquareAspectRatioIcon />
          </button>

          <button
            type="button"
            onClick={() => setNewPostCrop("landscape")}
            className={cn(
              "flex items-center gap-3 p-3 font-semibold",
              crop === "landscape" ? "opacity-100" : "opacity-60"
            )}
          >
            <span>16:9</span>
            <LandscapeAspectRatioIcon />
          </button>
        </div>
      )}
    </>
  );
}
