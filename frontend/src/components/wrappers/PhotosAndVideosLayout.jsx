import { Outlet } from "react-router-dom";
import PhotosAndVideosContent from "components/contents/PhotosAndVideosContent";

export default function PhotosAndVideosLayout() {
  return (
    <div className="flex flex-col flex-1 px-6">
      <div className="hidden h-14 justify-center md:flex items-center md:border-b md:border-b-tertiary">
        <div className="flex items-center gap-14">
          <PhotosAndVideosContent />
        </div>
      </div>

      <div className="flex justify-center flex-1">
        <Outlet />
      </div>
    </div>
  );
}
