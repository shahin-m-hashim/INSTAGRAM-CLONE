import { useRef } from "react";
import useStore from "store/_store";
import NewPostIcon from "icons/NewPostIcon";
import { useShallow } from "zustand/shallow";
import Button from "components/wrappers/Button";

export default function SelectNewPostsTab() {
  const fileRef = useRef();

  const handleFileInputChange = (e) => addNewPosts(Array.from(e.target.files));

  const [status, addNewPosts] = useStore(
    useShallow((state) => [state.newPost.status, state.addNewPosts])
  );

  return (
    <>
      {status === "selecting" && (
        <div className="flex flex-col items-center justify-center gap-6 p-5">
          <NewPostIcon />

          <h2 className="text-xl">Drag photos and videos here</h2>

          <Button onClick={() => fileRef.current.click()} className="p-3">
            Select from computer
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
