import RoundedSavedIcon from "icons/RoundedSavedIcon";

export default function SavedPage() {
  return (
    <div className="flex flex-col flex-1 w-full gap-10 px-5">
      <div className="flex items-center justify-between w-full">
        <p className="flex-1 text-xs text-tertiary">
          Only you can see what you&apos;ve saved
        </p>

        <a className="text-xs font-semibold text-link-primary hover:text-link-primary-hover">
          + New Collection
        </a>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <RoundedSavedIcon />
          <h1 className="text-4xl font-bold">Save</h1>
          <p className="text-sm max-w-[230px] md:max-w-[350px]">
            Save photos and videos that you want to see again. No one is
            notified, and only you can see what you&apos;ve saved.
          </p>
        </div>
      </div>
    </div>
  );
}
