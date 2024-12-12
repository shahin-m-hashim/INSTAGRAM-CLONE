import AppLayout from "components/wrappers/AppLayout";
import SettingsContent from "components/SettingsContent";
import EditProfilePage from "pages/settings/EditProfilePage";
import SettingsSidebar from "components/sidebars/SettingsSidebar";

export default function SettingsPage() {
  const url = "settings/edit_profile";

  return (
    <AppLayout>
      <main className="md:flex min-w-[320px] h-screen overflow-auto md:h-auto md:overflow-hidden md:pt-0 pb-[50px] pt-[60px] md:pb-0 md:pl-[80px] xl:pl-[250px]">
        <div className="md:flex hidden justify-center mt-5 md:mt-0 md:h-screen md:overflow-auto flex-shrink-0 md:border-r border-r-[rgb(54,54,54,0.7)]">
          <SettingsSidebar />
        </div>

        <div className="w-full md:h-screen md:overflow-auto">
          <div className="flex justify-center w-full my-5 md:my-0">
            {url === "settings" ? (
              <div className="w-full xs:w-[486px] md:hidden">
                <SettingsContent />
              </div>
            ) : (
              <EditProfilePage />
            )}
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
