/* eslint-disable react/prop-types */

import Footer from "components/Footer";
import Sidebar from "components/Sidebar";
import TopNavbar from "components/navbars/TopNavbar";
import MoreWidget from "components/widgets/MoreWidget";
import BottomNavbar from "components/navbars/BottomNavbar";
import SplashScreen from "components/wrappers/SplashScreen";
import CreateNewPost from "components/widgets/CreateNewPost";

export default function HomeLayout({ children }) {
  return (
    <SplashScreen>
      <section>
        <div className="fixed inset-0 z-10 h-screen pointer-events-none">
          <Sidebar />
          <TopNavbar />
          <BottomNavbar />

          <MoreWidget />
          <CreateNewPost />
        </div>

        <main className="absolute inset-x-0 z-0 min-h-screen">
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
