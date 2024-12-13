import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import TopNavbar from "components/navbars/TopNavbar";
import MoreWidget from "components/widgets/MoreWidget";
import MainSidebar from "components/sidebars/MainSidebar";
import BottomNavbar from "components/navbars/BottomNavbar";
import SplashScreen from "components/wrappers/SplashScreen";
import SettingsWidget from "components/widgets/SettingsWidget";
import CreateNewPostWidget from "components/widgets/CreateNewPostWidget";
import CreateNewNoteWidget from "components/widgets/CreateNewNoteWidget";
import ReportAProblemWidget from "components/widgets/ReportAProblemWidget";

export default function ProtectedLayout() {
  const [activeWidget, setActiveWidget] = useState(null);

  const isAuthenticated = true;

  return isAuthenticated ? (
    <SplashScreen>
      <section className="min-h-screen min-w-[320px] bg-black text-white scrollbar-dark">
        <div className="fixed bg-transparent inset-[1000] z-10 h-screen min-w-[320px] overflow-hidden pointer-events-none">
          <MainSidebar setActiveWidget={setActiveWidget} />
          <TopNavbar />
          <BottomNavbar />

          {activeWidget === "createNewPost" ? (
            <CreateNewPostWidget setActiveWidget={setActiveWidget} />
          ) : activeWidget === "more" ? (
            <MoreWidget setActiveWidget={setActiveWidget} />
          ) : activeWidget === "settings" ? (
            <SettingsWidget />
          ) : activeWidget === "createNewNote" ? (
            <CreateNewNoteWidget setActiveWidget={setActiveWidget} />
          ) : activeWidget === "report" ? (
            <ReportAProblemWidget setActiveWidget={setActiveWidget} />
          ) : null}
        </div>

        <div className="absolute inset-0 z-0">
          <Outlet />
        </div>
      </section>
    </SplashScreen>
  ) : (
    <Navigate to="accounts/login" replace />
  );
}
