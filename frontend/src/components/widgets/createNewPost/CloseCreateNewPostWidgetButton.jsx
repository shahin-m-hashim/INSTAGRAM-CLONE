import { cn } from "utils/cn";
import useStore from "store/_store";
import CloseIcon from "icons/CloseIcon";
import { useShallow } from "zustand/shallow";

export default function CloseCreateNewPostWidgetButton() {
  const [status, setSecondaryWidget, setShowDiscardNewPostModal] = useStore(
    useShallow((state) => [
      state.newPost.status,
      state.setSecondaryWidget,
      state.setShowDiscardNewPostModal,
    ])
  );

  return (
    <div
      className={cn(
        status !== "selecting" && "hidden md:flex",
        "absolute top-2 right-2 md:top-5 md:right-8"
      )}
    >
      <button
        type="button"
        onClick={() => {
          if (status !== "selecting") {
            setShowDiscardNewPostModal(true);
          } else {
            setSecondaryWidget(null);
          }
        }}
      >
        <CloseIcon className="text-primary size-6" />
      </button>
    </div>
  );
}
