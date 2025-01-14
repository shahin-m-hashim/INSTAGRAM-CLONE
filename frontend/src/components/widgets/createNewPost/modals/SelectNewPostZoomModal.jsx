import useStore from "store/_store";
import { useShallow } from "zustand/shallow";

export default function SelectNewPostZoomModal({ id }) {
  const [getPostFile, setNewPostZoom, activeCropModal] = useStore(
    useShallow((state) => [
      state.getPostFile,
      state.setNewPostZoom,
      state.newPost.activeCropModal,
    ])
  );

  const zoom = getPostFile(id).zoom;

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
