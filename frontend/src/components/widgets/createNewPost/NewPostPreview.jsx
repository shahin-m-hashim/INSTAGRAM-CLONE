import "./../../../filters.css";
import NewPostsCropControls from "components/widgets/createNewPost/NewPostsCropControls";

export default function NewPostPreview({ id, src, type, zoom, crop, filter }) {
  return (
    <div className="relative flex items-center justify-center flex-shrink-0 size-full">
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
      </div>

      <NewPostsCropControls id={id} />
    </div>
  );
}
