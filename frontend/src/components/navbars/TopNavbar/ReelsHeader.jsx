import CreateIcon from "icons/CreateIcon";

export default function ReelsHeader() {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="font-semibold">Reels</h1>
      <a className="items-center gap-4">
        <CreateIcon />
      </a>
    </div>
  );
}
