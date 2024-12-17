import { Outlet } from "react-router-dom";

export default function SupportRequestsLayout() {
  return (
    <>
      <div className="flex flex-col gap-4 text-center md:mt-14">
        <Outlet />
      </div>
    </>
  );
}
