import { Navigate } from "react-router-dom";
import MessengerContent from "components/contents/MessengerContent";

export default function MessengerPage() {
  if (window.innerWidth >= 768) return <Navigate to="/direct/inbox" />;

  return (
    <div className="size-full flex flex-col xs:w-[486px] md:hidden">
      <MessengerContent />
    </div>
  );
}
