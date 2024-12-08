import { useState } from "react";
import Footer from "components/Footer";
import AppLayout from "components/wrappers/AppLayout";
import EditProfileForm from "components/forms/EditProfileForm";
import SettingsSidebar from "components/sidebars/SettingsSidebar";
import NotificationSettingsTab from "components/tabs/NotificationSettingsTab";
import AccountPrivacyTab from "components/tabs/AccountPrivacyTab";
import CloseFriendsTab from "components/tabs/CloseFriendsTab";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("editProfile");

  return (
    <AppLayout hideFooter={true}>
      <main className="scrollbar-dark md:flex min-w-[320px] h-screen overflow-auto md:h-auto md:overflow-hidden md:pt-0 pb-[50px] md:pb-0 pt-[60px] bg-black text-white md:pl-[80px] xl:pl-[250px]">
        <div className="flex justify-center md:block w-full md:w-[310px] xl:w-[330px]">
          <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className="flex-col justify-between hidden w-full md:flex md:h-screen md:overflow-auto">
          <div className="flex justify-center w-full">
            {activeTab === "editProfile" ? (
              <EditProfileForm />
            ) : activeTab === "notificationSettings" ? (
              <NotificationSettingsTab />
            ) : activeTab === "accountPrivacySettings" ? (
              <AccountPrivacyTab />
            ) : activeTab == "closeFriendsTab" ? (
              <CloseFriendsTab />
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
