import { useContext } from "react";
import useStore from "store/_store";
import { useShallow } from "zustand/shallow";
import TopNavbar from "components/navbars/TopNavbar";
import GlobalContext from "providers/GlobalProvider";
import MoreWidget from "components/widgets/MoreWidget";
import MainSidebar from "components/sidebars/MainSidebar";
import BottomNavbar from "components/navbars/BottomNavbar";
import SearchSidebar from "components/sidebars/SearchSidebar";
import SettingsWidget from "components/widgets/SettingsWidget";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import NewMessageWidget from "components/widgets/NewMessageWidget";
import CreateNewPostWidget from "components/widgets/CreateNewPostWidget";
import CreateNewNoteWidget from "components/widgets/CreateNewNoteWidget";
import ReportAProblemWidget from "components/widgets/ReportAProblemWidget";
import NotificationsSidebar from "components/sidebars/NotificationsSidebar";
import CreateStoryOrPostWidget from "components/widgets/CreateStoryOrPostWidget";
import InstagramTextDropDownWidget from "components/widgets/InstagramTextDropDownWidget";

export default function ProtectedLayout() {
  const { pathname } = useLocation();
  const { isPending } = useContext(GlobalContext);

  const [isAuthenticated, activeSidebar, primaryWidget, secondaryWidget] =
    useStore(
      useShallow((state) => [
        state.auth.isAuthenticated,
        state.activeSidebar,
        state.primaryWidget,
        state.secondaryWidget,
      ])
    );

  return isAuthenticated ? (
    <section className="bg-primary text-primary min-h-screen min-w-[320px] pointer-events-none">
      <div className="fixed bg-transparent inset-0 z-50 h-screen min-w-[320px] overflow-hidden">
        <MainSidebar />

        {activeSidebar === "notifications" ? (
          <NotificationsSidebar />
        ) : activeSidebar === "search" ? (
          <SearchSidebar />
        ) : (
          <></>
        )}

        <TopNavbar />

        {pathname.split("/")[1] !== "direct" && <BottomNavbar />}

        {secondaryWidget === "createNewPost" ? (
          <CreateNewPostWidget />
        ) : secondaryWidget === "report" ? (
          <ReportAProblemWidget />
        ) : secondaryWidget === "createNewNote" ? (
          <CreateNewNoteWidget />
        ) : secondaryWidget === "newMessage" ? (
          <NewMessageWidget />
        ) : secondaryWidget === "create" ? (
          <CreateStoryOrPostWidget />
        ) : secondaryWidget === "instagramTextDropdown" ? (
          <InstagramTextDropDownWidget />
        ) : (
          <></>
        )}

        {primaryWidget === "more" ? (
          <MoreWidget />
        ) : primaryWidget === "settings" ? (
          <SettingsWidget />
        ) : (
          <></>
        )}
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
