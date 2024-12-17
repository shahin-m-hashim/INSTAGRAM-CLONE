import { Outlet } from "react-router-dom";
import SettingsSidebar from "components/sidebars/SettingsSidebar";

export default function SettingsLayout() {
  return (
    <main className="md:flex min-w-[320px] h-screen overflow-auto md:h-auto md:overflow-hidden md:pt-0 pb-[50px] pt-[60px] md:pb-0 md:pl-[80px] xl:pl-[250px]">
      <div className="justify-center flex-shrink-0 hidden md:flex md:h-screen md:overflow-auto">
        <SettingsSidebar />
      </div>

      <div className="flex flex-col w-full md:h-screen md:overflow-auto">
        <div className="flex justify-center flex-1">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
