import ToggleSwitch from "components/ToggleSwitch";

export default function LikeAndShareCountsSettingsPage() {
  return (
    <div className="flex flex-col gap-4 max-w-[650px] p-4 my-4 md:my-14 size-full">
      <h1 className="mb-6 text-xl font-bold">Like and share counts</h1>
      <div className="flex items-center justify-between">
        <span>Hide like & share counts</span>
        <ToggleSwitch />
      </div>

      <p className="text-xs text-[rgb(168,168,168)]">
        On Instagram, the number of likes on posts and reels from other accounts
        will be hidden. You can hide the number of likes on your own posts and
        reels by going to Advanced settings before sharing.
      </p>

      <p className="text-xs text-[rgb(168,168,168)]">
        On Threads, the number of likes, views, reposts and quotes on posts from
        other profiles will be hidden. You can hide these on your own posts from
        the menu for each post. <a className="text-white">Learn more</a>
      </p>
    </div>
  );
}
