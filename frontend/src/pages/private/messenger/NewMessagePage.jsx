import { Navigate } from "react-router-dom";
import Separator from "components/Separator";
import SearchField from "components/fields/SearchField";
import Accounts from "components/lists/Accounts";

export default function NewMessagePage() {
  if (window.innerWidth >= 768) return <Navigate to="/direct/inbox" />;

  return (
    <div className="flex flex-col md:hidden">
      <div className="flex items-center w-full px-4 h-[50px]">
        <span>To: </span>
        <SearchField className="bg-transparent" showIcon={false} />
      </div>
      <Separator straight={true} />

      <div className="h-[calc(100vh-110px)] w-full p-4 overflow-auto">
        {/* <span className="text-sm text-tertiary">No account found.</span> */}
        <Accounts type="input" specialCase={true} />
      </div>
    </div>
  );
}
