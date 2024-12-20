import { Navigate } from "react-router-dom";
import ActivityContent from "components/contents/ActivityContent";

export default function ActivityPage() {
  if (window.innerWidth >= 768)
    return <Navigate to="/your_activity/interactions" replace />;

  return (
    <div className="flex flex-col w-full md:hidden">
      <ActivityContent />
    </div>
  );
}
