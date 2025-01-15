import NewPostsCropControls from "components/widgets/createNewPost/NewPostsCropControls";

export default function NewPostPreview({
  id,
  src,
  type,
  zoom,
  crop,
  filter,
  isMuted,
  adjustments,
}) {
  return (
    <div
      id={id}
      className="relative flex items-center justify-center flex-shrink-0 size-full"
    >
      <div
        className="absolute overflow-hidden"
        style={{
          height: crop === "square" || crop === "portrait" ? "100%" : "auto",
        }}
      >
        {type === "image" ? (
          <img
            src={src}
            style={{
              height: "100%",
              objectFit: "cover",
              transform: `scale(${zoom})`,
              objectPosition: "center center",
              transformOrigin: "center center",
            }}
            className={`filter-${filter}`}
          />
        ) : (
          <video
            src={src}
            loop={true}
            muted={isMuted}
            autoPlay={true}
            style={{
              height: "100%",
              objectFit: "cover",
              transform: `scale(${zoom})`,
              objectPosition: "center center",
              transformOrigin: "center center",
            }}
            className={`filter-${filter}`}
          />
        )}

        <div
          className="absolute inset-0"
          style={{
            backdropFilter: `brightness(${adjustments.brightness}%) 
                contrast(${adjustments.contrast}%) 
                saturate(${adjustments.saturation}%) 
                grayscale(${adjustments.fade}%) 
                sepia(${adjustments.temperature}%)`,
          }}
        />
      </div>

      <NewPostsCropControls type={type} id={id} isMuted={isMuted} />
    </div>
  );
}
