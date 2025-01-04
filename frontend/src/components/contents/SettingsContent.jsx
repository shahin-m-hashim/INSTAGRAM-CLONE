import { cn } from "utils/cn";
import MetaIcon from "icons/MetaIcon";
import HelpIcon from "icons/HelpIcon";
import MoreIcon from "icons/MoreIcon";
import ReportIcon from "icons/ReportIcon";
import QRCodeIcon from "icons/QRCodeIcon";
import PrivacyIcon from "icons/PrivacyIcon";
import BlockedIcon from "icons/BlockedIcon";
import CommentsIcon from "icons/CommentsIcon";
import LanguageIcon from "icons/LanguageIcon";
import { useLocation } from "react-router-dom";
import MessengerIcon from "icons/MessengerIcon";
import EditProfileIcon from "icons/EditProfileIcon";
import HiddenWordsIcon from "icons/HiddenWordsIcon";
import CloseFriendsIcon from "icons/CloseFriendsIcon";
import FamilyCenterIcon from "icons/FamilyCenterIcon";
import YourActivityIcon from "icons/YourActivityIcon";
import TransitionLink from "components/TransitionLink";
import MutedAccountsIcon from "icons/MutedAccountsIcon";
import PrivacyCenterIcon from "icons/PrivacyCenterIcon";
import AccountStatusIcon from "icons/AccountStatusIcon";
import TagsAndMentionsIcon from "icons/TagsAndMentionsIcon";
import SharingAndReuseIcon from "icons/SharingAndReuseIcon";
import CurrentThemeImage from "components/CurrentThemeImage";
import BellNotificationIcon from "icons/BellNotificationIcon";
import HideStoryAndLiveIcon from "icons/HideStoryAndLiveIcon";
import RestrictedAccountsIcon from "icons/RestrictedAccountsIcon";
import ContentPreferencesIcon from "icons/ContentPreferencesIcon";
import LikeAndShareCountsIcon from "icons/LikeAndShareCountsIcon";
import WebsitePermissionsIcon from "icons/WebsitePermissionsIcon";
import AccountTypeAndToolsIcon from "icons/AccountTypeAndToolsIcon";
import ArchivingAndDownloadingIcon from "icons/ArchivingAndDownloadingIcon";

export default function SettingsContent() {
  const activeTab = useLocation().pathname.split("/")[2];

  return (
    <>
      <div className="flex flex-col gap-3 p-5 mx-5 shadow-sm rounded-xl bg-widget">
        <MetaIcon />

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Accounts Center</h2>
          <p className="text-xs text-tertiary">
            Manage your connected experiences and account settings across Meta
            technologies.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <img src="icons/profile.svg" alt="profile" />
            <span className="text-xs text-tertiary">Personal details</span>
          </div>

          <div className="flex gap-3">
            <img src="icons/security.svg" alt="security" />
            <span className="text-xs text-tertiary">Password and security</span>
          </div>

          <div className="flex gap-3">
            <img src="icons/ads.svg" alt="ads" />
            <span className="text-xs text-tertiary">Ad preferences</span>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold text-link-primary hover:text-link-primary-hover">
            See more in Accounts Center
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-5 py-5 mx-5">
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-tertiary">
            How you use Instagram
          </h3>

          <div className="flex flex-col gap-1">
            <TransitionLink
              to="edit_profile"
              className={cn(
                activeTab === "edit_profile" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <EditProfileIcon />
              <span className="text-sm">Edit profile</span>
            </TransitionLink>

            <TransitionLink
              to="/your_activity"
              className={cn(
                activeTab === "edit_profile" && "bg-widget",
                "flex md:hidden items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <YourActivityIcon className="size-6" />
              <span className="text-sm">Your Activity</span>
            </TransitionLink>

            <TransitionLink
              to="notifications"
              className={cn(
                activeTab === "notifications" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <BellNotificationIcon />
              <span className="text-sm">Notifications</span>
            </TransitionLink>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-tertiary">
            Who can see your content
          </h3>

          <div className="flex flex-col gap-1">
            <TransitionLink
              to="account_privacy"
              className={cn(
                activeTab === "account_privacy" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <PrivacyIcon />
              <span className="text-sm">Account privacy</span>
            </TransitionLink>

            <TransitionLink
              to="close_friends"
              className={cn(
                activeTab === "close_friends" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <CloseFriendsIcon />
              <span className="text-sm">Close Friends</span>
            </TransitionLink>

            <TransitionLink
              to="blocked_accounts"
              className={cn(
                activeTab === "blocked_accounts" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <BlockedIcon />
              <span className="text-sm">Blocked</span>
            </TransitionLink>

            <TransitionLink
              to="story_and_live"
              className={cn(
                activeTab === "story_and_live" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <HideStoryAndLiveIcon />
              <span className="text-sm">Hide story and live</span>
            </TransitionLink>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-tertiary">
            How others can interact with you
          </h3>

          <div className="flex flex-col gap-1">
            <TransitionLink
              to="messages_and_story_replies"
              className={cn(
                activeTab === "messages_and_story_replies" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <MessengerIcon />
              <span className="text-sm">Messages and story replies</span>
            </TransitionLink>

            <TransitionLink
              to="tags_and_mentions"
              className={cn(
                activeTab === "tags_and_mentions" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <TagsAndMentionsIcon />
              <span className="text-sm">Tags and mentions</span>
            </TransitionLink>

            <TransitionLink
              to="comments"
              className={cn(
                activeTab === "comments" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <CommentsIcon />
              <span className="text-sm">Comments</span>
            </TransitionLink>

            <TransitionLink
              to="sharing_and_reuse"
              className={cn(
                activeTab === "sharing_and_reuse" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <SharingAndReuseIcon />
              <span className="text-sm">Sharing and reuse</span>
            </TransitionLink>

            <TransitionLink
              to="restricted_accounts"
              className={cn(
                activeTab === "restricted_accounts" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <RestrictedAccountsIcon />
              <span className="text-sm">Restricted accounts</span>
            </TransitionLink>

            <TransitionLink
              to="hidden_words"
              className={cn(
                activeTab === "hidden_words" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <HiddenWordsIcon />
              <span className="text-sm">Hidden Words</span>
            </TransitionLink>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-tertiary">What you see</h3>

          <div className="flex flex-col gap-1">
            <TransitionLink
              to="muted_accounts"
              className={cn(
                activeTab === "muted_accounts" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <MutedAccountsIcon />
              <span className="text-sm">Muted accounts</span>
            </TransitionLink>

            <TransitionLink
              to="content_preferences"
              className={cn(
                activeTab === "content_preferences" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <ContentPreferencesIcon />
              <span className="text-sm">Content preferences</span>
            </TransitionLink>

            <TransitionLink
              to="like_and_share_counts"
              className={cn(
                activeTab === "like_and_share_counts" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <LikeAndShareCountsIcon />
              <span className="text-sm">Like and share counts</span>
            </TransitionLink>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-tertiary">
            Your app and media
          </h3>

          <div className="flex flex-col gap-1">
            <TransitionLink
              to="archiving_and_downloading"
              className={cn(
                activeTab === "archiving_and_downloading" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <ArchivingAndDownloadingIcon />
              <span className="text-sm">Archiving and downloading</span>
            </TransitionLink>

            <TransitionLink
              to="switch_appearance"
              className={cn(
                activeTab === "archiving_and_downloading" && "bg-widget",
                "flex md:hidden items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <CurrentThemeImage />
              <span className="text-sm">Switch Appearance</span>
            </TransitionLink>

            <TransitionLink
              to="language"
              className={cn(
                activeTab === "language" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <LanguageIcon />
              <span className="text-sm">Language</span>
            </TransitionLink>

            <TransitionLink
              to="website_permissions"
              className={cn(
                activeTab === "website_permissions" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <WebsitePermissionsIcon />
              <span className="text-sm">Website permissions</span>
            </TransitionLink>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-tertiary">For families</h3>

          <div className="flex items-center gap-3 p-3 rounded-md hover:bg-sidebar-hover">
            <FamilyCenterIcon />
            <span className="text-sm">Family Center</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-tertiary">
            For professionals
          </h3>

          <TransitionLink
            to="account_type_and_tools"
            className={cn(
              activeTab === "account_type_and_tools" && "bg-widget",
              "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
            )}
          >
            <AccountTypeAndToolsIcon />
            <span className="text-sm">Account type and tools</span>
          </TransitionLink>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-tertiary">
            More info and support
          </h3>

          <div className="flex flex-col gap-1">
            <TransitionLink
              to="switch_appearance"
              className={cn(
                activeTab === "archiving_and_downloading" && "bg-widget",
                "flex md:hidden items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <QRCodeIcon />
              <span className="text-sm">QR Code</span>
            </TransitionLink>

            <TransitionLink
              to="help"
              className={cn(
                activeTab === "help" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <HelpIcon />
              <span className="text-sm">Help</span>
            </TransitionLink>

            <div className="items-center hidden gap-3 p-3 rounded-md md:flex hover:bg-sidebar-hover">
              <PrivacyCenterIcon />
              <span className="text-sm">Privacy Center</span>
            </div>

            <TransitionLink
              to="account_status"
              className={cn(
                activeTab === "account_status" && "bg-widget",
                "flex items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <AccountStatusIcon />
              <span className="text-sm">Account Status</span>
            </TransitionLink>

            <button
              type="button"
              className="flex items-center gap-3 p-3 rounded-md md:hidden hover:bg-sidebar-hover"
            >
              <ReportIcon className="size-6" />
              <span className="text-sm">Report a problem</span>
            </button>

            <TransitionLink
              to="more"
              className={cn(
                activeTab === "archiving_and_downloading" && "bg-widget",
                "flex md:hidden items-center gap-3 p-3 hover:bg-sidebar-hover rounded-md"
              )}
            >
              <MoreIcon />
              <span className="text-sm">More</span>
            </TransitionLink>
          </div>
        </div>

        <div className="px-2 md:hidden">
          <span className="font-semibold text-red-500">Log Out</span>
        </div>
      </div>
    </>
  );
}
