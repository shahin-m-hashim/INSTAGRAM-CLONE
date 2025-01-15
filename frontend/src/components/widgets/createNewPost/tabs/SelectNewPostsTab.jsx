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
                  : ""}
              </>
            ) : (
              "Drag photos and videos here"
            )}
          </h2>

          {error && (
            <p className="w-2/3 text-center text-error">
              {error === "fileSizeError" ? (
                "File is too large. To continue, choose a file that's 1GB or less."
              ) : error === "videoLengthError" ? (
                "You can only post one video at a time."
              ) : (
                <></>
              )}
            </p>
          )}

          <Button onClick={() => fileRef.current.click()} className="p-3 w-fit">
            Select {error ? "other files" : "from computer"}
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
      )}
    </>
  );
}
