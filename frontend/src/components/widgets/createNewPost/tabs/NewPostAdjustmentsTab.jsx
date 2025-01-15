import useStore from "store/_store";
import { useShallow } from "zustand/shallow";
import { firstCharToUpperCase } from "utils/casing";

const adjustmentDefaults = {
  brightness: [50, 100, 200],
  contrast: [50, 100, 200],
  fade: [0, 0, 100],
  saturation: [0, 100, 200],
  temperature: [0, 0, 100],
};

export default function NewPostAdjustmentsTab() {
  const [
    files,
    isAdjusting,
    currentlyInView,
    resetAllAdjustments,
    setNewPostAdjustments,
  ] = useStore(
    useShallow((state) => [
      state.newPost.files,
      state.newPost.isAdjusting,
      state.newPost.currentlyInView,
      state.resetAllAdjustments,
      state.setNewPostAdjustments,
    ])
  );

  const { adjustments } = files.find((f) => f.id === currentlyInView);

  return (
    <div className="relative flex flex-col gap-6 py-4">
      {isAdjusting && (
        <button
          type="button"
          onClick={resetAllAdjustments}
          className="absolute inset-x-0 font-semibold md:text-xs -top-1"
        >
          Reset All
        </button>
      )}

      {Object.keys(adjustments).map((adjustment) => (
        <div key={adjustment} className="flex flex-col gap-2">
          <label
            htmlFor={adjustment}
            className="flex items-center justify-between"
          >
            <div>
              {firstCharToUpperCase(adjustment)}{" "}
              <span className="text-xs">({adjustments[adjustment]})</span>
            </div>

            {adjustments[adjustment] !== adjustmentDefaults[adjustment][1] && (
              <button
                type="button"
                onClick={() =>
                  setNewPostAdjustments(
                    adjustment,
                    adjustmentDefaults[adjustment][1]
                  )
                }
                className="text-sm font-semibold text-link-primary hover:text-link-primary-hover"
              >
                Reset
              </button>
            )}
          </label>

          <input
            step="1"
            type="range"
            id={adjustment}
            name={adjustment}
            className="w-full"
            value={adjustments[adjustment]}
            min={adjustmentDefaults[adjustment][0]}
            max={adjustmentDefaults[adjustment][2]}
            onChange={(e) => setNewPostAdjustments(adjustment, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}
