import { Outlet } from "react-router-dom";

import MessengerSidebar from "components/sidebars/MessengerSidebar";

export default function MessengerLayout() {
  return (
    <div className="md:flex min-w-[320px] h-screen overflow-hidden md:pt-0 pt-[60px] md:pl-[80px]">
      <div className="justify-center flex-shrink-0 hidden md:flex md:h-screen md:overflow-y-auto">
        <MessengerSidebar />
      </div>

      <div className="size-full">
        <Outlet />
      </div>
    </div>
  );
}
