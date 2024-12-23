import Separator from "components/Separator";
import SearchField from "components/fields/SearchField";
import NotFoundContent from "components/contents/NotFoundContent";

export default function NewMessagePage() {
  return (
    <>
      {window.innerWidth >= 768 ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <NotFoundContent />
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex items-center w-full px-4 h-[50px]">
            <span>To: </span>
            <SearchField className="bg-transparent" showIcon={false} />
          </div>
          <Separator straight={true} />

          <div className="h-[calc(100vh-110px)] w-full p-4 overflow-auto">
            <span className="text-sm text-tertiary">No account found.</span>
            {/* <AccountsList type="input" /> */}
          </div>
        </div>
      )}
    </>
  );
}
