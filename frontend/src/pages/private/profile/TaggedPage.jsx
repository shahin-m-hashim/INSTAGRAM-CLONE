import PhotosOfYouIcon from "icons/PhotosOfYouIcon";

export default function TaggedPage() {
  return (
    <div className="flex justify-center flex-1 w-full px-5">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <PhotosOfYouIcon />
        <h1 className="text-4xl font-bold">Photos of you</h1>
        <p className="text-sm">
          When people tag you in photos, they&apos;ll appear here.
        </p>
      </div>
    </div>
  );
}
