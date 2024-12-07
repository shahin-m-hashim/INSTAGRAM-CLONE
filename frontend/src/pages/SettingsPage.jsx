import { useState } from "react";
import Footer from "components/Footer";
import Button from "components/wrappers/Button";
import ToggleSwitch from "components/ToggleSwitch";
import AppLayout from "components/wrappers/AppLayout";
import ProfilePicture from "components/ProfilePicture";
import DropDownArrowIcon from "icons/DropDownArrowIcon";
import EditProfileForm from "components/forms/EditProfileForm";
import SettingsSidebar from "components/sidebars/SettingsSidebar";
import GenderFormWidget from "components/widgets/GenderFormWidget";
import NotificationSettingsTab from "components/tabs/NotificationSettingsTab";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("editProfile");

  return (
    <AppLayout hideFooter={true}>
      <main className="scrollbar-dark md:flex min-w-[320px] h-screen overflow-auto md:h-auto md:overflow-hidden md:pt-0 pb-[50px] md:pb-0 pt-[60px] bg-black text-white md:pl-[80px] xl:pl-[250px]">
        <div className="flex justify-center md:block w-full md:w-[310px] xl:w-[330px]">
          <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className="hidden w-full md:block md:h-screen md:overflow-auto">
          <div className="flex flex-col items-center size-full">
            {activeTab === "editProfile" ? (
              <EditProfileForm />
            ) : activeTab === "notificationSettings" ? (
              <NotificationSettingsTab />
            ) : null}

            <div className="px-5 my-10">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
