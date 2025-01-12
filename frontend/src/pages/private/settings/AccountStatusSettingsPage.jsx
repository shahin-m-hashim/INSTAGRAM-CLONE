import EyeIcon from "icons/EyeIcon";
import ImageIcon from "icons/ImageIcon";
import CommentsIcon from "icons/CommentsIcon";
import SelectedIcon from "icons/SelectedIcon";
import ProfilePicture from "components/ProfilePicture";
import TransitionLink from "components/TransitionLink";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

export default function AccountStatusSettingsPage() {
  return (
    <>
      <div className="hidden mb-5 md:block">
        <h1 className="text-xl font-bold">Account Status</h1>
      </div>

      <div className="flex items-center justify-between gap-2 p-4 rounded-xl bg-tertiary">
        <div className="flex items-center flex-1 gap-5">
          <ProfilePicture id="account-status-profile-pic" storyPadding="0px" />
          <span className="font-semibold">username</span>
        </div>
      </div>

      <p className="text-sm">
        See any actions Instagram has taken when your account or content
        don&apos;t follow our standards. Learn more about Account Status
      </p>

      <div className="flex flex-col gap-6">
        <TransitionLink
          to="removed_content"
          className="flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <ImageIcon className="min-w-5" />
            <span>Removed content and messaging issues</span>
          </div>
          <div className="flex items-center gap-2">
            <SelectedIcon className="text-success size-4" />
            <div className="transform -rotate-90">
              <DropDownArrowIcon />
            </div>
          </div>
        </TransitionLink>

        <TransitionLink
          to="content_lowered"
          className="flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <EyeIcon className="min-w-5" />
            <span>Content lowered in feed</span>
          </div>
          <div className="flex items-center gap-2">
            <SelectedIcon className="text-success size-4" />
            <div className="transform -rotate-90">
              <DropDownArrowIcon />
            </div>
          </div>
        </TransitionLink>

        <TransitionLink
          to="hidden_features"
          className="flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <CommentsIcon className="min-w-5" />
            <span>Features you can&apos;t use</span>
          </div>
          <div className="flex items-center gap-2">
            <SelectedIcon className="text-success size-4" />
            <div className="transform -rotate-90">
              <DropDownArrowIcon />
            </div>
          </div>
        </TransitionLink>
      </div>
    </>
  );
}
