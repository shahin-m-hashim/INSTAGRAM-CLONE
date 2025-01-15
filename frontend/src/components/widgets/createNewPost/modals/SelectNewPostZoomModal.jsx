import useStore from "store/_store";
import { useShallow } from "zustand/shallow";

export default function SelectNewPostZoomModal({ id }) {
  const [setNewPostZoom, activeCropModal] = useStore(
    useShallow((state) => [state.setNewPostZoom, state.newPost.activeCropModal])
  );

  const zoom = useStore(
    (state) => state.newPost.files.find((f) => f.id === id).zoom
  );

  return (
    <>
      {activeCropModal === "zoom" && (
        <div className="absolute bottom-10">
          <div className="px-2.5 py-1 border rounded-md bg-widget opacity-90 border-tertiary">
            <input
              min={1}
              max={2}
              step={0.05}
              type="range"
              value={zoom}
              id={`zoom-new-post-${id}`}
              onChange={(e) => setNewPostZoom(id, parseFloat(e.target.value))}
            />
          </div>
        </div>
      )}
    </>
  );
}
