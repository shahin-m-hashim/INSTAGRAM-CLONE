import IIcon from "icons/IIcon";
import Image from "components/Image";
import DropDownArrowIcon from "icons/DropDownArrowIcon";
import NavigateBackBtn from "components/NavigateBackBtn";
import CommunityStandardsLockIcon from "icons/CommunityStandardsLockIcon";

export default function RemovedContentSettingsPage() {
  return (
    <>
      <div className="items-center hidden mb-5 -ml-2 md:flex">
        <div className="flex items-center flex-1 gap-4">
          <NavigateBackBtn />
          <h1 className="text-lg font-bold">
            Removed content and messaging issues
          </h1>
        </div>
        <IIcon className="size-6" />
      </div>

      <div className="flex gap-2 items-center justify-between rounded-xl p-4 bg-tertiary">
        <div className="flex items-center flex-1 gap-2 md:gap-5">
          <Image
            alt="tick"
            src="images/tick.webp"
            className="hidden xs:block size-14"
          />
          <div className="flex flex-col gap-2">
            <p className="font-bold">Your account is not affected right now.</p>
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
          You are not at risk of losing access to your account right now.
        </p>
        <p className="text-sm  text-tertiary">
          We may still take down your account without warning if something you
          post is a risk to the Instagram community.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="font-bold">More information</h2>
        <div className="flex items-center">
          <div className="flex items-center flex-1 gap-4">
            <CommunityStandardsLockIcon />
            <p className="text-sm">Learn more about our Community Standards</p>
          </div>
          <div className="transform -rotate-90">
            <DropDownArrowIcon className="size-5" />
          </div>
        </div>
      </div>
    </>
  );
}
