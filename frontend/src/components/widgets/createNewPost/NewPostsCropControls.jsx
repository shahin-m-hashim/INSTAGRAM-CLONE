import { cn } from "utils/cn";
import useStore from "store/_store";
import MutedIcon from "icons/MutedIcon";
import UnmutedIcon from "icons/UnmutedIcon";
import { useShallow } from "zustand/shallow";
import SelectCropIcon from "icons/SelectCropIcon";
import AdjustZoomIcon from "icons/AdjustZoomIcon";
import GroupedPostsIcon from "icons/GroupedPostsIcon";
import SelectNewPostCropModal from "components/widgets/createNewPost/modals/SelectNewPostCropModal";
import SelectNewPostZoomModal from "components/widgets/createNewPost/modals/SelectNewPostZoomModal";
import AddOrRemoveNewPostsModal from "components/widgets/createNewPost/modals/AddOrRemoveNewPostsModal";

export default function NewPostsCropControls({ id = "", type = "", isMuted }) {
  const [
    status,
    activeCropModal,
    toggleVideoSound,
    toggleNewPostActiveCropModal,
  ] = useStore(
    useShallow((state) => [
      state.newPost.status,
      state.newPost.activeCropModal,
      state.toggleVideoSound,
      state.toggleNewPostActiveCropModal,
    ])
  );

  return (
    <>
      {status === "cropping" && (
        <div className="absolute inset-x-0 z-20 flex items-center justify-between px-3 bottom-3">
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleNewPostActiveCropModal("crop")}
                disabled={activeCropModal && activeCropModal !== "crop"}
                className={cn(
                  "p-2 rounded-full bg-widget",
                  activeCropModal
                    ? activeCropModal === "crop"
                      ? "opacity-100"
                      : "opacity-60"
                    : "opacity-100"
                )}
              >
                <SelectCropIcon
                  className={cn(
                    "size-4",
                    activeCropModal === "crop"
                      ? "text-link-primary"
                      : "text-primary"
                  )}
                />
              </button>

              <SelectNewPostCropModal />
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => toggleNewPostActiveCropModal("zoom")}
                disabled={activeCropModal && activeCropModal !== "zoom"}
                className={cn(
                  "p-2 rounded-full bg-widget",
                  activeCropModal
                    ? activeCropModal === "zoom"
                      ? "opacity-100"
                      : "opacity-60"
                    : "opacity-100"
                )}
              >
                <AdjustZoomIcon
                  className={cn(
                    "size-4",
                    activeCropModal === "zoom"
                      ? "text-link-primary"
                      : "text-primary"
                  )}
                />
              </button>

              <SelectNewPostZoomModal id={id} />
            </div>
          </div>

          <div className="relative">
            {type === "image" ? (
              <>
                <button
                  type="button"
                  onClick={() => toggleNewPostActiveCropModal("group")}
                  disabled={activeCropModal && activeCropModal !== "group"}
                  className={cn(
                    "p-2 rounded-full bg-widget",
                    activeCropModal
                      ? activeCropModal === "group"
                        ? "opacity-100"
                        : "opacity-60"
                      : "opacity-100"
                  )}
                >
                  <GroupedPostsIcon
                    type="hollow"
                    className={cn(
                      "size-4",
                      activeCropModal === "group"
                        ? "text-link-primary"
                        : "text-primary"
                    )}
                  />
                </button>

                <AddOrRemoveNewPostsModal id={id} />
              </>
            ) : (
              <button
                type="button"
                onClick={() => toggleVideoSound(id)}
                className="p-2 rounded-full bg-widget"
              >
                {isMuted ? <MutedIcon /> : <UnmutedIcon />}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
