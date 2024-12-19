import { Outlet } from "react-router-dom";
import InteractionsContent from "components/contents/InteractionsContent";

export default function InteractionsLayout() {
  return (
    <div className="flex flex-col flex-1 px-6">
      <div className="hidden h-14 justify-center md:flex items-center md:border-b md:border-b-tertiary">
        <div className="flex items-center gap-4 lg:gap-14">
          <InteractionsContent />
        </div>
      </div>

      <div className="flex justify-center flex-1">
        <Outlet />
      </div>
    </div>
  );
}
