import { Navigate } from "react-router-dom";
import InteractionsContent from "components/contents/InteractionsContent";

export default function InteractionsPage() {
  if (window.innerWidth >= 768)
    return <Navigate to="/your_activity/interactions/likes" replace />;

  return (
    <div className="flex flex-col items-center w-full my-5 md:hidden">
      <InteractionsContent />
    </div>
  );
}
