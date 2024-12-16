import EyeIcon from "icons/EyeIcon";
import ImageIcon from "icons/ImageIcon";
import CommentsIcon from "icons/CommentsIcon";
import SelectedIcon from "icons/SelectedIcon";
import ProfilePicture from "components/ProfilePicture";
import DropDownArrowIcon from "icons/DropDownArrowIcon";
import Footer from "components/Footer";

export default function AccountStatusSettingsPage() {
  return (
    <div className="flex flex-col justify-between max-w-[650px] p-4 w-full">
      <div className="flex flex-col gap-6">
        <div className="hidden mb-3 mt-14 md:block">
          <h1 className="text-xl font-bold">Account Status</h1>
        </div>

        <div className="flex gap-2 items-center justify-between rounded-xl p-4 bg-[rgb(18,18,18)]">
          <div className="flex items-center flex-1 gap-2 md:gap-5">
            <ProfilePicture />
            <span className="font-semibold">username</span>
          </div>
        </div>

        <p className="text-sm">
          See any actions Instagram has taken when your account or content
          don&apos;t follow our standards. Learn more about Account Status
        </p>

        <div className="flex flex-col gap-6">
          <a className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ImageIcon />
              <span>Removed content and messaging issues</span>
            </div>
            <div className="flex items-center gap-2">
              <SelectedIcon className="text-[rgb(88,195,34)] size-4" />
              <div className="transform -rotate-90">
                <DropDownArrowIcon />
              </div>
            </div>
          </a>

          <a className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <EyeIcon />
              <span>Content lowered in feed</span>
            </div>
            <div className="flex items-center gap-2">
              <SelectedIcon className="text-[rgb(88,195,34)] size-4" />
              <div className="transform -rotate-90">
                <DropDownArrowIcon />
              </div>
            </div>
          </a>

          <a className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <CommentsIcon />
              <span>Features you can&apos;t use</span>
            </div>
            <div className="flex items-center gap-2">
              <SelectedIcon className="text-[rgb(88,195,34)] size-4" />
              <div className="transform -rotate-90">
                <DropDownArrowIcon />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="hidden w-full px-5 my-5 md:flex md:my-10">
        <Footer />
      </div>
    </div>
  );
}
