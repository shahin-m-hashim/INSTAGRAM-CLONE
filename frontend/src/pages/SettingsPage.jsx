import HomeLayout from "components/wrappers/HomeLayout";
import SettingsSidebar from "components/sidebars/SettingsSidebar";

export default function SettingsPage() {
  return (
    <HomeLayout>
      <div className="flex min-h-screen">
        <SettingsSidebar />

        <div className="flex-col flex-1 p-5"></div>
      </div>
    </HomeLayout>
  );
}
