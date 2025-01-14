import useStore from "store/_store";
import { useShallow } from "zustand/shallow";

export default function DiscardNewPostModal() {
  const [showDiscardModal, resetNewPostSlice, setShowDiscardNewPostModal] =
    useStore(
      useShallow((state) => [
        state.newPost.showDiscardModal,
        state.resetNewPostSlice,
        state.setShowDiscardNewPostModal,
      ])
    );

  return (
    <>
      {showDiscardModal && (
        <div className="absolute z-20 pointer-events-auto inset-0 flex items-center justify-center size-full backdrop-brightness-[0.4]">
          <div className="flex text-primary flex-col bg-widget w-[300px] xs:w-[400px] rounded-lg">
            <div className="flex flex-col">
              <div className="px-10 py-5 text-center">
                <h1 className="mb-2.5 text-xl">Discard post?</h1>
                <p className="text-sm text-tertiary">
                  If you leave, your edits won&apos;t be saved.
                </p>
              </div>

              <button
                type="button"
                onClick={() => resetNewPostSlice()}
                className="p-2.5 text-error font-semibold border-y-2 border-y-tertiary hover:bg-widget-hover"
              >
                Discard
              </button>

              <button
                type="button"
                className="p-2.5 font-semibold rounded-b-lg hover:bg-widget-hover"
                onClick={() => setShowDiscardNewPostModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
