import { useState } from "react";
import Footer from "components/Footer";
import Sidebar from "components/Sidebar";
import TopNavbar from "components/navbars/TopNavbar";
import MoreWidget from "components/widgets/MoreWidget";
import BottomNavbar from "components/navbars/BottomNavbar";
import SplashScreen from "components/wrappers/SplashScreen";
import SettingsWidget from "components/widgets/SettingsWidget";
import CreateNewPostWidget from "components/widgets/CreateNewPostWidget";
import CreateNewNoteWidget from "components/widgets/CreateNewNoteWidget";

export default function HomeLayout({ children }) {
  const [activeWidget, setActiveWidget] = useState(null);

  return (
    <SplashScreen>
      <section>
        <div className="fixed inset-0 z-10 h-screen min-w-[320px] pointer-events-none">
          <Sidebar setActiveWidget={setActiveWidget} />
          <TopNavbar />
          <BottomNavbar />

          {activeWidget === "more" && <MoreWidget />}
          {activeWidget === "createNewPost" && (
            <CreateNewPostWidget setActiveWidget={setActiveWidget} />
          )}
          {activeWidget === "settings" && <SettingsWidget />}

          {activeWidget === "createNewNote" && (
            <CreateNewNoteWidget setActiveWidget={setActiveWidget} />
          )}
        </div>

        <main className="absolute inset-x-0 top-0 z-0 min-h-screen min-w-[320px]">
          <div className="flex flex-col size-full text-white bg-black md:pt-0 pb-[50px] md:pb-0 md:pl-[80px] xl:pl-[250px] pt-[60px]">
            {children}
            <div className="hidden my-10 md:block">
              <Footer />
            </div>
          </div>
        </main>
      </section>
    </SplashScreen>
  );
}
