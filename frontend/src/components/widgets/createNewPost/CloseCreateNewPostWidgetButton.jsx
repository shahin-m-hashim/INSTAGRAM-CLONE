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
    <div className="absolute top-5 right-8">
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
