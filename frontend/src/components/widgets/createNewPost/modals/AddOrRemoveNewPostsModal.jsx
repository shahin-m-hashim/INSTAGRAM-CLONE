import { useRef } from "react";
import useStore from "store/_store";
import CloseIcon from "icons/CloseIcon";
import { useShallow } from "zustand/shallow";
import Carousal from "components/wrappers/Carousal";

export default function AddOrRemoveNewPostsModal({ id }) {
  const fileInputRef = useRef(null);

  const [
    files,
    addNewPosts,
    removeNewPost,
    activeCropModal,
    setShowDiscardNewPostModal,
  ] = useStore(
    useShallow((state) => [
      state.newPost.files,
      state.addNewPosts,
      state.removeNewPost,
      state.newPost.activeCropModal,
      state.setShowDiscardNewPostModal,
    ])
  );

  const handleRemove = () => {
    if (files.length > 1) {
      removeNewPost(id);
    } else {
      setShowDiscardNewPostModal(true);
    }
  };

  const handleFileInputChange = (e) => addNewPosts(Array.from(e.target.files));

  return (
    <>
      {activeCropModal === "group" && (
        <div className="absolute right-0 bottom-10">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-widget opacity-90">
            <Carousal
              gap="0.5rem"
              duration={500}
              iconSize="size-4"
              leftArrowStyle="left-2"
              rightArrowStyle="right-2"
              carousalStyles="max-w-[188px]"
              id="add-remove-new-posts-carousal"
            >
              {files.map((file) => (
                <div key={file.id} className="relative min-w-[90px]">
                  {file.type === "image" ? (
                    <img
                      src={file.src}
                      className="object-cover w-full rounded-md aspect-square"
                    />
                  ) : (
                    <video
                      src={file.src}
                      className="object-cover w-full rounded-md aspect-square"
                    />
                  )}

                  <button
                    type="button"
                    onClick={handleRemove}
                    className="absolute top-1 right-1"
                  >
                    <CloseIcon className="size-4" />
                  </button>
                </div>
              ))}
            </Carousal>

            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="p-1 rounded-full min-w-7 size-7 bg-button"
            >
              <img alt="add" src="icons/add.svg" />
            </button>

            <input
              type="file"
              multiple={true}
              id="file-input-2"
              ref={fileInputRef}
              className="sr-only"
              accept="image/*,video/*"
              onChange={handleFileInputChange}
            />
          </div>
        </div>
      )}
    </>
  );
}
