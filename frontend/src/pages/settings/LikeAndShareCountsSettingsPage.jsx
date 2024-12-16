import Footer from "components/Footer";
import ToggleSwitch from "components/ToggleSwitch";

export default function LikeAndShareCountsSettingsPage() {
  return (
    <div className="flex flex-col justify-between max-w-[650px] p-4 w-full">
      <div className="flex flex-col gap-4">
        <div className="hidden mb-8 mt-14 md:block">
          <h1 className="text-xl font-bold">Like and share counts</h1>
        </div>

        <div className="flex items-center justify-between">
          <span>Hide like & share counts</span>
          <ToggleSwitch />
        </div>

        <p className="text-xs text-[rgb(168,168,168)]">
          On Instagram, the number of likes on posts and reels from other
          accounts will be hidden. You can hide the number of likes on your own
          posts and reels by going to Advanced settings before sharing.
        </p>

        <p className="text-xs text-[rgb(168,168,168)]">
          On Threads, the number of likes, views, reposts and quotes on posts
          from other profiles will be hidden. You can hide these on your own
          posts from the menu for each post.{" "}
          <a className="text-white">Learn more</a>
        </p>
      </div>

      <div className="hidden w-full px-5 my-5 md:flex md:my-10">
        <Footer />
      </div>
    </div>
  );
}
