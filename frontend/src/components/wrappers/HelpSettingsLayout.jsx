import Footer from "components/Footer";
import { Outlet } from "react-router-dom";

export default function HelpSettingsLayout() {
  return (
    <>
      <div className="flex flex-col justify-between p-4 max-w-[600px] w-full">
        <Outlet />

        <div className="hidden w-full px-5 my-5 md:flex md:my-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
