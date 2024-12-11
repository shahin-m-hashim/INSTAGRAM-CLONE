import { useState } from "react";
import Footer from "components/Footer";
import AppLayout from "components/wrappers/AppLayout";
import EditProfileForm from "components/forms/EditProfileForm";
import MutedAccountsTab from "components/tabs/MutedAccountsTab";
import SettingsSidebar from "components/sidebars/SettingsSidebar";
import CommentsSettingsTab from "components/tabs/CommentsSettingsTab";
import LikeAndShareCountsTab from "components/tabs/LikeAndShareCountsTab";
import HiddenWordsSettingsTab from "components/tabs/HiddenWordsSettingsTab";
import NotificationSettingsTab from "components/tabs/NotificationSettingsTab";
import CloseFriendsSettingsTab from "components/tabs/CloseFriendsSettingsTab";
import AccountStatusSettingsTab from "components/tabs/AccountStatusSettingsTab";
import AccountPrivacySettingsTab from "components/tabs/AccountPrivacySettingsTab";
import BlockedAccountsSettingsTab from "components/tabs/BlockedAccountsSettingsTab";
import TagsAndMentionsSettingsTab from "components/tabs/TagsAndMentionsSettingsTab";
import SharingAndReuseSettingsTab from "components/tabs/SharingAndReuseSettingsTab";
import HideStoryAndLiveSettingsTab from "components/tabs/HideStoryAndLiveSettingsTab";
import RestrictedAccountsSettingsTab from "components/tabs/RestrictedAccountsSettingsTab";
import ContentPreferencesSettingsTab from "components/tabs/ContentPreferencesSettingsTab";
import AccountTypeAndToolsSettingsTab from "components/tabs/AccountTypeAndToolsSettingsTab";
import MessagesAndStoryRepliesSettingsTab from "components/tabs/MessagesAndStoryRepliesSettingsTab";
import ArchivingAndDownloadingSettingsTab from "components/tabs/ArchivingAndDownloadingSettingsTab";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profileSettingsTab");

  return (
    <AppLayout>
      <main className="scrollbar-dark md:flex min-w-[320px] h-screen overflow-auto md:h-auto md:overflow-hidden md:pt-0 pb-[50px] md:pb-0 pt-[60px] bg-black text-white md:pl-[80px] xl:pl-[250px]">
        <div className="flex justify-center md:block w-full md:w-[310px] xl:w-[330px]">
          <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className="flex-col justify-between hidden w-full md:flex md:h-screen md:overflow-auto">
          <div className="flex justify-center w-full">
            {activeTab === "profileSettingsTab" ? (
              <EditProfileForm />
            ) : activeTab === "notificationSettingsTab" ? (
              <NotificationSettingsTab />
            ) : activeTab === "accountPrivacySettingsTab" ? (
              <AccountPrivacySettingsTab />
            ) : activeTab == "closeFriendsSettingsTab" ? (
              <CloseFriendsSettingsTab />
            ) : activeTab === "blockedAccountsSettingsTab" ? (
              <BlockedAccountsSettingsTab />
            ) : activeTab === "hideStoryAndLiveSettingsTab" ? (
              <HideStoryAndLiveSettingsTab />
            ) : activeTab === "restrictedAccountsSettingsTab" ? (
              <RestrictedAccountsSettingsTab />
            ) : activeTab === "mutedAccountsSettingsTab" ? (
              <MutedAccountsTab />
            ) : activeTab === "likeAndShareCountSettingsTab" ? (
              <LikeAndShareCountsTab />
            ) : activeTab === "messagesAndStoryRepliesSettingsTab" ? (
              <MessagesAndStoryRepliesSettingsTab />
            ) : activeTab === "tagsAndMentionsSettingsTab" ? (
              <TagsAndMentionsSettingsTab />
            ) : activeTab === "commentsSettingsTab" ? (
              <CommentsSettingsTab />
            ) : activeTab === "sharingAndReuseSettingsTab" ? (
              <SharingAndReuseSettingsTab />
            ) : activeTab === "hiddenWordsSettingsTab" ? (
              <HiddenWordsSettingsTab />
            ) : activeTab === "contentPreferencesSettingsTab" ? (
              <ContentPreferencesSettingsTab />
            ) : activeTab === "archivingAndDownloadingSettingsTab" ? (
              <ArchivingAndDownloadingSettingsTab />
            ) : activeTab === "accountTypeAndToolsSettingsTab" ? (
              <AccountTypeAndToolsSettingsTab />
            ) : activeTab === "accountStatusSettingsTab" ? (
              <AccountStatusSettingsTab />
            ) : null}
          </div>

          <div className="flex justify-center w-full px-5 my-10">
            <Footer />
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
