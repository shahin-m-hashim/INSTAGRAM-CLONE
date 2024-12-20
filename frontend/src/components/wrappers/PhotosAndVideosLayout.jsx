import { Outlet } from "react-router-dom";
import PhotosAndVideosContent from "components/contents/PhotosAndVideosContent";

export default function PhotosAndVideosLayout() {
  return (
    <div className="flex flex-col flex-1">
      <div className="items-center justify-center hidden h-14 md:flex md:border-b md:border-b-primary">
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
