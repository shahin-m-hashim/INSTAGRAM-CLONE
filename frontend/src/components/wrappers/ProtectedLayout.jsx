import { useContext } from "react";
import TopNavbar from "components/navbars/TopNavbar";
import GlobalContext from "providers/GlobalProvider";
import MoreWidget from "components/widgets/MoreWidget";
import MainSidebar from "components/sidebars/MainSidebar";
import BottomNavbar from "components/navbars/BottomNavbar";
import SettingsWidget from "components/widgets/SettingsWidget";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import CreateNewPostWidget from "components/widgets/CreateNewPostWidget";
import CreateNewNoteWidget from "components/widgets/CreateNewNoteWidget";
import ReportAProblemWidget from "components/widgets/ReportAProblemWidget";

const isAuthenticated = true;

export default function ProtectedLayout() {
  const { pathname } = useLocation();
  const { activeWidget, isPending } = useContext(GlobalContext);

  return isAuthenticated ? (
    <section className="bg-primary text-primary min-h-screen min-w-[320px] pointer-events-none">
      <div className="fixed bg-transparent inset-0 z-50 h-screen min-w-[320px] overflow-hidden">
        <MainSidebar />
        <TopNavbar />
        {pathname.split("/")[1] !== "direct" && <BottomNavbar />}

        {/* <InstagramTextDropDownWidget /> */}
        {/* <CreateStoryOrPostWidget /> */}
        {/* <NewMessageWidget /> */}

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

      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Outlet />
      </div>
    </section>
  ) : (
    <Navigate to="accounts/login" replace />
  );
}
