import { useState, useTransition } from "react";
import TopNavbar from "components/navbars/TopNavbar";
import MoreWidget from "components/widgets/MoreWidget";
import MainSidebar from "components/sidebars/MainSidebar";
import BottomNavbar from "components/navbars/BottomNavbar";
import SplashScreen from "components/wrappers/SplashScreen";
import SettingsWidget from "components/widgets/SettingsWidget";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import NavigationTransition from "components/NavigationTransition";
import CreateNewPostWidget from "components/widgets/CreateNewPostWidget";
import CreateNewNoteWidget from "components/widgets/CreateNewNoteWidget";
import ReportAProblemWidget from "components/widgets/ReportAProblemWidget";

export default function ProtectedLayout() {
  const location = useLocation();
  const [isPending, startTransition] = useTransition();
  const [activeWidget, setActiveWidget] = useState(null);

  const isAuthenticated = true;

  return isAuthenticated ? (
    <SplashScreen>
      <section className="min-h-screen min-w-[320px] bg-black text-white scrollbar-dark pointer-events-none">
        <div className="fixed bg-transparent inset-0 z-50 h-screen min-w-[320px] overflow-hidden">
          <MainSidebar setActiveWidget={setActiveWidget} />
          <TopNavbar />
          <BottomNavbar />

          {activeWidget === "createNewPost" ? (
            <CreateNewPostWidget setActiveWidget={setActiveWidget} />
          ) : activeWidget === "more" ? (
            <MoreWidget
              startTransition={startTransition}
              setActiveWidget={setActiveWidget}
            />
          ) : activeWidget === "settings" ? (
            <SettingsWidget startTransition={startTransition} />
          ) : activeWidget === "createNewNote" ? (
            <CreateNewNoteWidget setActiveWidget={setActiveWidget} />
          ) : activeWidget === "report" ? (
            <ReportAProblemWidget setActiveWidget={setActiveWidget} />
          ) : null}
        </div>

        {isPending && <NavigationTransition />}

        <div id="main" className="absolute inset-0 z-0">
          <Outlet key={location.key} />
        </div>
      </section>
    </SplashScreen>
  ) : (
    <Navigate to="accounts/login" replace />
  );
}
