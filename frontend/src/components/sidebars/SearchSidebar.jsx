import SearchField from "components/fields/SearchField";

export default function SearchSidebar() {
  return (
    <div className="fixed inset-y-0 w-[420px] left-[80px] pointer-events-auto">
      <div className="flex flex-col border-r-2 text-primary bg-primary size-full border-tertiary">
        <div className="flex flex-col w-full gap-6 px-4 py-8 border-b border-tertiary">
          <h1 className="mb-4 ml-2 text-2xl font-semibold">Search</h1>
          <div className="h-10">
            <SearchField />
          </div>
        </div>
        <div className="flex-1 p-4">
          <h2>Recent</h2>
          <div className="flex items-center justify-center h-full">
            <p className="text-sm text-tertiary">No recent searches.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
