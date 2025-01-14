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
        <Carousal
          gap="0"
          duration={500}
          showDots={true}
          trackItemInView={true}
          leftArrowStyle="left-3"
          rightArrowStyle="right-3"
          id="preview-new-posts-carousal"
          extendScrollBehaviorFn={() => setActiveCropModal(null)}
          overrideTouchScreenBehavior={true}
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
              adjustments={file.adjustments}
              type={file.type.split("/")[0]}
            />
          ))}
        </Carousal>
      )}
    </>
  );
}
