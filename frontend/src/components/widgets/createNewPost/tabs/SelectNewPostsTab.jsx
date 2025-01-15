import { useRef } from "react";
import useStore from "store/_store";
import NewPostIcon from "icons/NewPostIcon";
import { useShallow } from "zustand/shallow";
import Button from "components/wrappers/Button";
import ExclamationIcon from "icons/ExclamationIcon";

export default function SelectNewPostsTab() {
  const fileRef = useRef();
  const dragDropContainerRef = useRef();

  const handleFileInputChange = (e) => addNewPosts(Array.from(e.target.files));

  const [error, status, addNewPosts] = useStore(
    useShallow((state) => [
      state.newPost.error,
      state.newPost.status,
      state.addNewPosts,
    ])
  );

  const handleDragOver = (e) => {
    e.preventDefault();
    dragDropContainerRef.current.classList.add("border", "border-link-primary");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    addNewPosts(Array.from(e.dataTransfer.files));
    dragDropContainerRef.current.classList.remove(
      "border",
      "border-link-primary"
    );
  };

  const handelDragLeave = (e) => {
    e.preventDefault();
    dragDropContainerRef.current.classList.remove(
      "border",
      "border-link-primary"
    );
  };

  return (
    <>
      {status === "selecting" && (
        <div className="flex w-full h-full items-center justify-center rounded-b-lg md:w-[400px] lg:w-[480px]">
          <div
            onDrop={handleDrop}
            ref={dragDropContainerRef}
            onDragOver={handleDragOver}
            onDragLeave={handelDragLeave}
            className="flex flex-col items-center justify-center gap-6 size-full"
          >
            {error ? <ExclamationIcon /> : <NewPostIcon />}

            <h2 className="text-xl">
              {error ? (
                <>
                  {error === "fileSizeError"
                    ? "File must be 1GB or less"
                    : error === "videoLengthError"
                    ? "Two or more videos were uploaded."
                    : error === "invalidFileError"
                    ? "This file is not supported"
                    : ""}
                </>
              ) : (
                <>
                  <span className="hidden md:inline">
                    Drag photos and videos here
                  </span>
                  <span className="md:hidden">
                    Select your photos and videos
                  </span>
                </>
              )}
            </h2>

            {error && (
              <p className="w-2/3 text-center text-error">
                {error === "fileSizeError" ? (
                  "File is too large. To continue, choose a file that's 1GB or less."
                ) : error === "videoLengthError" ? (
                  "You can only post one video at a time."
                ) : error === "invalidFileError" ? (
                  "The file you selected is not supported. You can only post images and videos."
                ) : (
                  <></>
                )}
              </p>
            )}

            <Button
              className="p-3 w-fit"
              onClick={() => fileRef.current.click()}
            >
              {error ? (
                <span>Select another file</span>
              ) : (
                <>
                  <span className="hidden md:inline">Select from computer</span>
                  <span className="md:hidden">Select files</span>
                </>
              )}
            </Button>

            <input
              type="file"
              ref={fileRef}
              multiple={true}
              id="file-input-1"
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
