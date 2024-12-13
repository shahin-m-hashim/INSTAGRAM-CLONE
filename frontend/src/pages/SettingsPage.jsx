import { Navigate } from "react-router-dom";
import SettingsContent from "components/contents/SettingsContent";

export default function SettingsPage() {
  if (window.innerWidth > 768) return <Navigate to="/settings/edit_profile" />;

  return (
    <div className="w-full xs:w-[486px] md:hidden">
      <SettingsContent />
    </div>
  );
}
