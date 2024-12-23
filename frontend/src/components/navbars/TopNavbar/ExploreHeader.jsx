import SearchField from "components/fields/SearchField";

export default function ExploreHeader() {
  return (
    <div className="relative flex items-center w-full">
      <SearchField className="w-full h-8 border border-primary" />
    </div>
  );
}
