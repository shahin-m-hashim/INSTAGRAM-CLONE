/* eslint-disable react/prop-types */

import Footer from "components/Footer";
import Sidebar from "components/Sidebar";
import TopNavbar from "components/navbars/TopNavbar";
import BottomNavbar from "components/navbars/BottomNavbar";
import SplashScreen from "components/wrappers/SplashScreen";

export default function HomeLayout({ children }) {
  return (
    <SplashScreen>
      <section className="min-h-screen overflow-hidden flex flex-col text-white bg-black pt-[60px] md:pt-0 pb-[50px] md:pb-0 md:pl-[73px] xl:pl-[250px]">
        <div className="fixed inset-0 z-10 h-screen pointer-events-none">
          <Sidebar />
          <TopNavbar />
          <BottomNavbar />
        </div>
        <main className="size-full">
          {children}
          <div className="hidden my-10 md:block">
            <Footer />
          </div>
        </main>
      </section>
    </SplashScreen>
  );
}
