import { cn } from "utils/cn";
import useStore from "store/_store";
import { useShallow } from "zustand/shallow";
import Carousal from "components/wrappers/Carousal";
import NewPostPreview from "components/widgets/createNewPost/NewPostPreview";

export default function CropNewPostsTab() {
  const [files, crop, status, setActiveCropModal] = useStore(
    useShallow((state) => [
      state.newPost.files,
      state.newPost.crop,
      state.newPost.status,
      state.setActiveCropModal,
    ])
  );

  return (
    <>
      {status !== "selecting" && (
        <div
          className={cn(
            status === "finishing" ? "hidden md:flex" : "flex",
            "w-full h-full items-center justify-center rounded-b-lg md:w-[400px] lg:w-[480px]"
          )}
        >
          <Carousal
            gap="0"
            duration={500}
            showDots={true}
            trackItemInView={true}
            leftArrowStyle="left-3"
            rightArrowStyle="right-3"
            id="preview-new-posts-carousal"
            overrideTouchScreenBehavior={true}
            extendScrollBehaviorFn={() => setActiveCropModal(null)}
            carousalStyles={cn(
              "size-full",
              status === "cropping" ? "rounded-b-lg" : "rounded-bl-lg"
            )}
          >
            {files.map((file) => (
              <NewPostPreview
                crop={crop}
                id={file.id}
                key={file.id}
                src={file.src}
                zoom={file.zoom}
                filter={file.filter}
                isMuted={file.isMuted}
                adjustments={file.adjustments}
                type={file.type.split("/")[0]}
              />
            ))}
          </Carousal>
        </div>
      )}
    </>
  );
}
