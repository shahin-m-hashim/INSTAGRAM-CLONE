import Footer from "components/Footer";
import { Outlet } from "react-router-dom";

export default function NotificationSettingsLayout() {
  return (
    <div className="flex flex-col justify-between px-4 max-w-[600px] w-full">
      <div className="flex flex-col gap-4 mt-14">
        <Outlet />
      </div>

      <div className="hidden w-full px-5 my-5 md:flex md:my-10">
        <Footer />
      </div>
    </div>
  );
}
