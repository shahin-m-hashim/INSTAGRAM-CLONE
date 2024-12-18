import { Navigate } from "react-router-dom";
import PhotosAndVideosContent from "components/contents/PhotosAndVideosContent";

export default function PhotosAndVideosPage() {
  if (window.innerWidth >= 768)
    return <Navigate to="/your_activity/photos_and_videos/posts" replace />;

  return (
    <div className="flex flex-col items-center w-full my-5 md:hidden">
      <PhotosAndVideosContent />
    </div>
  );
}
