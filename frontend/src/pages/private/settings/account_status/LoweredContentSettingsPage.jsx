import Image from "components/Image";
import NavigateBackBtn from "components/NavigateBackBtn";

export default function LoweredContentSettingsPage() {
  return (
    <>
      <div className="items-center hidden gap-4 mb-5 -ml-2 md:flex">
        <NavigateBackBtn />
        <h1 className="text-lg font-bold">Content lowered in feed</h1>
      </div>

      <div className="flex gap-2 items-center justify-between rounded-xl p-4 bg-tertiary">
        <div className="flex items-center flex-1 gap-2 md:gap-5">
          <Image
            alt="tick"
            src="images/tick.webp"
            className="hidden xs:block size-14"
          />
          <div className="flex flex-col gap-2">
            <p className="font-bold">Your posts are not lowered in feed.</p>
            <p className="text-tertiary">
              Thank you for following our{" "}
              <span className="text-link-primary hover:text-link-primary-hover">
                Community Standards
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="font-bold">What this means</h2>
        <p className="text-sm  text-tertiary">
          Followers do not need to scroll lower in feed to find your posts.
        </p>
      </div>
    </>
  );
}
