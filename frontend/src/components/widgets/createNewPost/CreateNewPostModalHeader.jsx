import useStore from "store/_store";
import { useShallow } from "zustand/shallow";
import BackArrowIcon from "icons/BackArrowIcon";

export default function CreateNewPostModalHeader() {
  const [error, status, setNewPostStatus, setShowDiscardNewPostModal] =
    useStore(
      useShallow((state) => [
        state.newPost.error,
        state.newPost.status,
        state.setNewPostStatus,
        state.setShowDiscardNewPostModal,
      ])
    );

  return (
    <div className="relative flex items-center justify-center h-[40px] p-3 text-sm rounded-t-lg bg-tertiary">
      {status !== "selecting" && !error && (
        <div className="absolute inset-y-0 flex items-center left-3">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              if (status === "cropping") setShowDiscardNewPostModal(true);
              if (status === "editing") setNewPostStatus("cropping");
              if (status === "finishing") setNewPostStatus("editing");
            }}
          >
            <BackArrowIcon className="size-5" />
          </button>
        </div>
      )}

      <h1 className="font-semibold">
        {error ? (
          <>
            {error === "fileSizeError"
              ? "File Too Large"
              : error === "videoLengthError"
              ? "Too Many Videos"
              : error === "invalidFileError"
              ? "Invalid File Uploaded"
              : "Something Went Wrong"}
          </>
        ) : status === "cropping" ? (
          "Crop"
        ) : status === "editing" ? (
          "Edit"
        ) : (
          "Create new post"
        )}
      </h1>

      {!error && (
        <div className="absolute inset-y-0 flex items-center right-3">
          {status === "finishing" ? (
            <button
              type="submit"
              className="font-semibold text-link-primary hover:text-link-primary-hover"
            >
              Share
            </button>
          ) : status === "cropping" || status === "editing" ? (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                if (status === "cropping") setNewPostStatus("editing");
                if (status === "editing") setNewPostStatus("finishing");
              }}
              className="font-semibold text-link-primary hover:text-link-primary-hover"
            >
              Next
            </button>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}
