const adjustments = {
  Brightness: 0,
  Contrast: 0,
  Fade: 0,
  Saturation: 0,
  Temperature: 0,
  Vignette: 0,
};

export default function NewPostAdjustmentsTab() {
  return (
    <div className="flex flex-col gap-6 py-6">
      {Object.keys(adjustments).map((adjustment) => (
        <div key={adjustment} className="flex flex-col gap-2">
          <label htmlFor={adjustment}>{adjustment}</label>

          <input
            max={100}
            value={0}
            step="0.01"
            type="range"
            id="brightness"
            name="brightness"
            className="w-full"
            min={adjustment !== "Vignette" ? -100 : 0}
          />
        </div>
      ))}
    </div>
  );
}
