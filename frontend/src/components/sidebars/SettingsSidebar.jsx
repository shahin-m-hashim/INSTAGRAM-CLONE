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

export default function SettingsSidebar({ activeTab, setActiveTab }) {
  return (
    <div className="w-full xs:w-[486px] md:w-[310px] xl:w-[330px] md:h-screen md:overflow-auto p-5 flex-shrink-0 md:border-r border-r-[rgb(54,54,54,0.7)]">
      <div className="flex p-5">
        <h1 className="text-xl font-bold">Settings</h1>
      </div>

      <div className="flex flex-col gap-3 p-5 rounded-xl bg-[rgb(38,38,38)]">
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

      <div className="flex flex-col gap-5 p-2 py-5">
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-[rgb(168,168,168)]">
            How you use Instagram
          </h3>

          <div className="flex flex-col gap-1">
            <a
              onClick={() => setActiveTab("profileSettingsTab")}
              className={cn(
                activeTab === "profileSettingsTab" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <EditProfileIcon />
              <span className="text-sm">Edit profile</span>
            </a>

            <a
              onClick={() => setActiveTab("notificationSettingsTab")}
              className={cn(
                activeTab === "notificationSettingsTab" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <BellNotificationIcon />
              <span className="text-sm">Notifications</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-[rgb(168,168,168)]">
            Who can see your content
          </h3>

          <div className="flex flex-col gap-1">
            <a
              onClick={() => setActiveTab("accountPrivacySettingsTab")}
              className={cn(
                activeTab === "accountPrivacySettingsTab" &&
                  "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <PrivacyIcon />
              <span className="text-sm">Account privacy</span>
            </a>

            <a
              onClick={() => setActiveTab("closeFriendsSettingsTab")}
              className={cn(
                activeTab === "closeFriendsSettingsTab" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <CloseFriendsIcon />
              <span className="text-sm">Close Friends</span>
            </a>

            <a
              onClick={() => setActiveTab("blockedAccountsSettingsTab")}
              className={cn(
                activeTab === "blockedAccountsSettingsTab" &&
                  "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <BlockedIcon />
              <span className="text-sm">Blocked</span>
            </a>

            <a
              onClick={() => setActiveTab("hideStoryAndLiveSettingsTab")}
              className={cn(
                activeTab === "hideStoryAndLiveSettingsTab" &&
                  "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <HideStoryAndLiveIcon />
              <span className="text-sm">Hide story and live</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-[rgb(168,168,168)]">
            How others can interact with you
          </h3>

          <div className="flex flex-col gap-1">
            <a
              onClick={() => setActiveTab("messagesAndStoryRepliesSettingsTab")}
              className={cn(
                activeTab === "messagesAndStoryRepliesSettingsTab" &&
                  "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <MessengerIcon />
              <span className="text-sm">Messages and story replies</span>
            </a>

            <a
              onClick={() => setActiveTab("tagsAndMentionsSettingsTab")}
              className={cn(
                activeTab === "tagsAndMentionsSettingsTab" &&
                  "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <TagsAndMentionsIcon />
              <span className="text-sm">Tags and mentions</span>
            </a>

            <a
              onClick={() => setActiveTab("commentsSettingsTab")}
              className={cn(
                activeTab === "commentsSettingsTab" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <CommentsIcon />
              <span className="text-sm">Comments</span>
            </a>

            <a
              onClick={() => setActiveTab("sharingAndReuseSettingsTab")}
              className={cn(
                activeTab === "sharingAndReuseSettingsTab" &&
                  "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <SharingAndReuseIcon />
              <span className="text-sm">Sharing and reuse</span>
            </a>

            <a
              onClick={() => setActiveTab("restrictedAccountsSettingsTab")}
              className={cn(
                activeTab === "restrictedAccountsSettingsTab" &&
                  "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <RestrictedAccountsIcon />
              <span className="text-sm">Restricted accounts</span>
            </a>

            <a
              onClick={() => setActiveTab("hiddenWordsSettingsTab")}
              className={cn(
                activeTab === "hiddenWordsSettingsTab" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <HiddenWordsIcon />
              <span className="text-sm">Hidden Words</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-[rgb(168,168,168)]">
            What you see
          </h3>

          <div className="flex flex-col gap-1">
            <a
              onClick={() => setActiveTab("mutedAccountsSettingsTab")}
              className={cn(
                activeTab === "mutedAccountsSettingsTab" &&
                  "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <MutedAccountsIcon />
              <span className="text-sm">Muted accounts</span>
            </a>

            <a
              onClick={() => setActiveTab("contentPreferencesSettingsTab")}
              className={cn(
                activeTab === "ContentPreferencesSettingsTab" &&
                  "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <ContentPreferencesIcon />
              <span className="text-sm">Content preferences</span>
            </a>

            <button
              onClick={() => setActiveTab("likeAndShareCountSettingsTab")}
              className={cn(
                activeTab === "likeAndShareCountSettingsTab" &&
                  "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <LikeAndShareCountsIcon />
              <span className="text-sm">Like and share counts</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-[rgb(168,168,168)]">
            Your app and media
          </h3>

          <div className="flex flex-col gap-1">
            <a
              onClick={() => setActiveTab("archivingAndDownloadingSettingsTab")}
              className={cn(
                activeTab === "archivingAndDownloadingSettingsTab" &&
                  "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <ArchivingAndDownloadingIcon />
              <span className="text-sm">Archiving and downloading</span>
            </a>

            <button
              className={cn(
                activeTab === "languageSettings" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <LanguageIcon />
              <span className="text-sm">Language</span>
            </button>

            <button
              className={cn(
                activeTab === "websitePermissionsSettings" &&
                  "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <WebsitePermissionsIcon />
              <span className="text-sm">Website permissions</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-[rgb(168,168,168)]">
            For families
          </h3>

          <button
            className={cn(
              activeTab === "familyCenterSettings" && "bg-[rgb(38,38,38)]",
              "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
            )}
          >
            <FamilyCenterIcon />
            <span className="text-sm">Family Center</span>
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-[rgb(168,168,168)]">
            For professionals
          </h3>

          <button
            className={cn(
              activeTab === "accountTypeAndToolsSettings" &&
                "bg-[rgb(38,38,38)]",
              "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
            )}
          >
            <AccountTypeAndToolsIcon />
            <span className="text-sm">Account type and tools</span>
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-[rgb(168,168,168)]">
            More info and support
          </h3>

          <div className="flex flex-col gap-1">
            <button
              className={cn(
                activeTab === "helpSettings" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <HelpIcon />
              <span className="text-sm">Help</span>
            </button>

            <button
              className={cn(
                activeTab === "privacyCenterSettings" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <PrivacyCenterIcon />
              <span className="text-sm">Privacy Center</span>
            </button>

            <button
              className={cn(
                activeTab === "accountStatusSettings" && "bg-[rgb(38,38,38)]",
                "flex items-center gap-3 p-3 hover:bg-[rgb(255,255,255,.1)] rounded-md"
              )}
            >
              <AccountStatusIcon />
              <span className="text-sm">Account Status</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
