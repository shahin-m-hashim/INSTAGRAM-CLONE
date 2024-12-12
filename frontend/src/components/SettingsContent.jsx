import { cn } from "utils/cn";
import MetaIcon from "icons/MetaIcon";
import HelpIcon from "icons/HelpIcon";
import PrivacyIcon from "icons/PrivacyIcon";
import BlockedIcon from "icons/BlockedIcon";
import CommentsIcon from "icons/CommentsIcon";
import LanguageIcon from "icons/LanguageIcon";
import MessengerIcon from "icons/MessengerIcon";
import EditProfileIcon from "icons/EditProfileIcon";
import HiddenWordsIcon from "icons/HiddenWordsIcon";
import { Link, useLocation } from "react-router-dom";
import CloseFriendsIcon from "icons/CloseFriendsIcon";
import FamilyCenterIcon from "icons/FamilyCenterIcon";
import MutedAccountsIcon from "icons/MutedAccountsIcon";
import PrivacyCenterIcon from "icons/PrivacyCenterIcon";
import AccountStatusIcon from "icons/AccountStatusIcon";
import TagsAndMentionsIcon from "icons/TagsAndMentionsIcon";
import SharingAndReuseIcon from "icons/SharingAndReuseIcon";
import BellNotificationIcon from "icons/BellNotificationIcon";
import HideStoryAndLiveIcon from "icons/HideStoryAndLiveIcon";
import RestrictedAccountsIcon from "icons/RestrictedAccountsIcon";
import ContentPreferencesIcon from "icons/ContentPreferencesIcon";
import LikeAndShareCountsIcon from "icons/LikeAndShareCountsIcon";
import WebsitePermissionsIcon from "icons/WebsitePermissionsIcon";
import AccountTypeAndToolsIcon from "icons/AccountTypeAndToolsIcon";
import ArchivingAndDownloadingIcon from "icons/ArchivingAndDownloadingIcon";

export default function SettingsContent() {
  const activeTab = useLocation().pathname.split("/")[1];

  return (
    <>
      <div className="hidden py-5 mx-5 md:flex">
        <h1 className="text-xl font-bold">Settings</h1>
      </div>

      <div className="flex flex-col gap-3 p-5 rounded-xl bg-[rgb(38,38,38)] mx-5">
        <MetaIcon />

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Accounts Center</h2>
          <p className="text-xs text-[rgb(168,168,168)]">
            Manage your connected experiences and account settings across Meta
            technologies.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <img src="icons/profile.svg" alt="profile" />
            <span className="text-xs text-[rgb(168,168,168)]">
              Personal details
            </span>
          </div>

          <div className="flex gap-3">
            <img src="icons/security.svg" alt="security" />
            <span className="text-xs text-[rgb(168,168,168)]">
              Password and security
            </span>
          </div>

          <div className="flex gap-3">
            <img src="icons/ads.svg" alt="ads" />
            <span className="text-xs text-[rgb(168,168,168)]">
              Ad preferences
            </span>
          </div>
        </div>

        <div>
          <span className="text-[rgb(0,149,246)] font-semibold text-xs">
            See more in Accounts Center
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-5 py-5 mx-5">
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-[rgb(168,168,168)]">
            How you use Instagram
          </h3>

          <div className="flex flex-col gap-1">
            <Link
              to="edit_profile"
              className={cn(
                activeTab === "edit_profile" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <EditProfileIcon />
              <span className="text-sm">Edit profile</span>
            </Link>

            <Link
              to="notifications"
              className={cn(
                activeTab === "notifications" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <BellNotificationIcon />
              <span className="text-sm">Notifications</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-[rgb(168,168,168)]">
            Who can see your content
          </h3>

          <div className="flex flex-col gap-1">
            <Link
              to="account_privacy"
              className={cn(
                activeTab === "account_privacy" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <PrivacyIcon />
              <span className="text-sm">Account privacy</span>
            </Link>

            <Link
              to="close_friends"
              className={cn(
                activeTab === "close_friends" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <CloseFriendsIcon />
              <span className="text-sm">Close Friends</span>
            </Link>

            <Link
              to="blocked_accounts"
              className={cn(
                activeTab === "blocked_accounts" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <BlockedIcon />
              <span className="text-sm">Blocked</span>
            </Link>

            <Link
              to="story_and_live"
              className={cn(
                activeTab === "story_and_live" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <HideStoryAndLiveIcon />
              <span className="text-sm">Hide story and live</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-[rgb(168,168,168)]">
            How others can interact with you
          </h3>

          <div className="flex flex-col gap-1">
            <Link
              to="settings/message_and_story_replies"
              className={cn(
                activeTab === "message_and_story_replies" &&
                  "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <MessengerIcon />
              <span className="text-sm">Messages and story replies</span>
            </Link>

            <Link
              to="tags_and_mentions"
              className={cn(
                activeTab === "tags_and_mentions" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <TagsAndMentionsIcon />
              <span className="text-sm">Tags and mentions</span>
            </Link>

            <Link
              to="comments"
              className={cn(
                activeTab === "comments" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <CommentsIcon />
              <span className="text-sm">Comments</span>
            </Link>

            <Link
              to="sharing_and_reuse"
              className={cn(
                activeTab === "sharing_and_reuse" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <SharingAndReuseIcon />
              <span className="text-sm">Sharing and reuse</span>
            </Link>

            <Link
              to="restricted_accounts"
              className={cn(
                activeTab === "restricted_accounts" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <RestrictedAccountsIcon />
              <span className="text-sm">Restricted accounts</span>
            </Link>

            <Link
              to="hidden_words"
              className={cn(
                activeTab === "hidden_words" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <HiddenWordsIcon />
              <span className="text-sm">Hidden Words</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-[rgb(168,168,168)]">
            What you see
          </h3>

          <div className="flex flex-col gap-1">
            <Link
              to="muted_accounts"
              className={cn(
                activeTab === "muted_accounts" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <MutedAccountsIcon />
              <span className="text-sm">Muted accounts</span>
            </Link>

            <Link
              to="content_preferences"
              className={cn(
                activeTab === "content_preferences" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <ContentPreferencesIcon />
              <span className="text-sm">Content preferences</span>
            </Link>

            <Link
              to="like_and_share_counts"
              className={cn(
                activeTab === "like_and_share_counts" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <LikeAndShareCountsIcon />
              <span className="text-sm">Like and share counts</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-[rgb(168,168,168)]">
            Your app and media
          </h3>

          <div className="flex flex-col gap-1">
            <Link
              to="archiving_and_downloading"
              className={cn(
                activeTab === "archiving_and_downloading" &&
                  "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <ArchivingAndDownloadingIcon />
              <span className="text-sm">Archiving and downloading</span>
            </Link>

            <Link
              to="language"
              className={cn(
                activeTab === "language" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <LanguageIcon />
              <span className="text-sm">Language</span>
            </Link>

            <Link
              to="website_permissions"
              className={cn(
                activeTab === "website_permissions" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <WebsitePermissionsIcon />
              <span className="text-sm">Website permissions</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-[rgb(168,168,168)]">
            For families
          </h3>

          <Link
            to="family_center"
            className={cn(
              activeTab === "family_center" && "bg-[rgb(38,38,38)]",
              "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
            )}
          >
            <FamilyCenterIcon />
            <span className="text-sm">Family Center</span>
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-[rgb(168,168,168)]">
            For professionals
          </h3>

          <Link
            to="account_type_and_tools"
            className={cn(
              activeTab === "account_type_and_tools" && "bg-[rgb(38,38,38)]",
              "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
            )}
          >
            <AccountTypeAndToolsIcon />
            <span className="text-sm">Account type and tools</span>
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-[rgb(168,168,168)]">
            More info and support
          </h3>

          <div className="flex flex-col gap-1">
            <Link
              to="help"
              className={cn(
                activeTab === "help" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <HelpIcon />
              <span className="text-sm">Help</span>
            </Link>

            <Link
              to="privacy_center"
              className={cn(
                activeTab === "privacy_center" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <PrivacyCenterIcon />
              <span className="text-sm">Privacy Center</span>
            </Link>

            <Link
              to="account_status"
              className={cn(
                activeTab === "account_status" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <AccountStatusIcon />
              <span className="text-sm">Account Status</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
