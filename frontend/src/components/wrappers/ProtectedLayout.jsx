import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import TopNavbar from "components/navbars/TopNavbar";
import GlobalContext from "providers/GlobalProvider";
import MoreWidget from "components/widgets/MoreWidget";
import MainSidebar from "components/sidebars/MainSidebar";
import BottomNavbar from "components/navbars/BottomNavbar";
import SplashScreen from "components/wrappers/SplashScreen";
import SettingsWidget from "components/widgets/SettingsWidget";
import CreateNewPostWidget from "components/widgets/CreateNewPostWidget";
import CreateNewNoteWidget from "components/widgets/CreateNewNoteWidget";
import ReportAProblemWidget from "components/widgets/ReportAProblemWidget";

const isAuthenticated = true;

export default function ProtectedLayout() {
  const { activeWidget, isPending } = useContext(GlobalContext);

  return isAuthenticated ? (
    <SplashScreen>
      <section className="min-h-screen min-w-[320px] bg-black text-white scrollbar-dark pointer-events-none">
        <div className="fixed bg-transparent inset-0 z-50 h-screen min-w-[320px] overflow-hidden">
          <MainSidebar />
          <TopNavbar />
          <BottomNavbar />

          {activeWidget === "createNewPost" ? (
            <CreateNewPostWidget />
          ) : activeWidget === "more" ? (
            <MoreWidget />
          ) : activeWidget === "settings" ? (
            <SettingsWidget />
          ) : activeWidget === "createNewNote" ? (
            <CreateNewNoteWidget />
          ) : activeWidget === "report" ? (
            <ReportAProblemWidget />
          ) : null}
        </div>

        {isPending && <div className="navigation-transition" />}

        <div id="main" className="absolute inset-0 z-0 pointer-events-auto">
          <Outlet />
        </div>
      </section>
    </SplashScreen>
  ) : (
    <Navigate to="accounts/login" replace />
  );
}
