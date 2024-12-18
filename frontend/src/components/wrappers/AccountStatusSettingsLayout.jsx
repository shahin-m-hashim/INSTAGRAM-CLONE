import Footer from "components/Footer";
import { Outlet } from "react-router-dom";

export default function AccountStatusSettingsLayout() {
  return (
    <div className="flex flex-col justify-between max-w-[650px] p-4 w-full">
      <div className="flex flex-col gap-6 md:mt-14">
        <Outlet />
      </div>

      <div className="hidden w-full px-5 my-5 md:flex md:my-10">
        <Footer />
      </div>
    </div>
  );
}
