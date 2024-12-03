import SearchField from "components/fields/SearchField";

export default function SearchSidebar() {
  return (
    <div className="fixed inset-y-0 w-[400px] left-[80px] pointer-events-auto">
      <div className="flex flex-col text-white bg-black size-full border-r border-r-[rgb(54,54,54,0.7)]">
        <div className="flex flex-col w-full gap-6 px-4 py-8  border-b border-b-[rgb(54,54,54,0.7)]">
          <h1 className="mb-4 ml-2 text-2xl font-semibold">Search</h1>
          <div className="h-10">
            <SearchField />
          </div>
        </div>
        <div className="flex-1 p-4">
          <h2>Recent</h2>
          <div className="flex items-center justify-center h-full">
            <p className="text-sm text-[rgb(168,168,168)]">
              No recent searches.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
