import { useState } from "react";
import Sidebar from "components/Sidebar";
import TopNavbar from "components/navbars/TopNavbar";
import MoreWidget from "components/widgets/MoreWidget";
import BottomNavbar from "components/navbars/BottomNavbar";
import SplashScreen from "components/wrappers/SplashScreen";
import SettingsWidget from "components/widgets/SettingsWidget";
import CreateNewPostWidget from "components/widgets/CreateNewPostWidget";
import CreateNewNoteWidget from "components/widgets/CreateNewNoteWidget";
import ReportAProblemWidget from "components/widgets/ReportAProblemWidget";

export default function AppLayout({ children, hideTopNavbar = false }) {
  const [activeWidget, setActiveWidget] = useState(null);
  const [showReportWidget, setShowReportWidget] = useState(false);

  return (
    <SplashScreen>
      <section className="min-h-screen min-w-[320px]">
        <div className="fixed inset-0 z-10 h-screen min-w-[320px] overflow-hidden pointer-events-none">
          <Sidebar setActiveWidget={setActiveWidget} />
          {!hideTopNavbar && <TopNavbar />}
          <BottomNavbar />

          {activeWidget === "more" && (
            <MoreWidget setShowReportWidget={setShowReportWidget} />
          )}

          {activeWidget === "createNewPost" && (
            <CreateNewPostWidget setActiveWidget={setActiveWidget} />
          )}

          {activeWidget === "settings" && <SettingsWidget />}

          {activeWidget === "createNewNote" && (
            <CreateNewNoteWidget setActiveWidget={setActiveWidget} />
          )}

          {showReportWidget && (
            <ReportAProblemWidget setShowReportWidget={setShowReportWidget} />
          )}
        </div>

        <div className="absolute inset-0 z-0">{children}</div>
      </section>
    </SplashScreen>
  );
}
