import { Outlet } from "react-router-dom";
import InteractionsContent from "components/contents/InteractionsContent";

export default function InteractionsLayout() {
  return (
    <div className="flex flex-col flex-1">
      <div className="items-center justify-center hidden h-14 md:flex md:border-b md:border-b-primary">
        <div className="flex items-center gap-2 lg:gap-10">
          <InteractionsContent />
        </div>
      </div>

      <div className="flex justify-center flex-1">
        <Outlet />
      </div>
    </div>
  );
}
