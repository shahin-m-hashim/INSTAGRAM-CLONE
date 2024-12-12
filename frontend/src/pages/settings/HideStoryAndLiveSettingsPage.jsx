import SearchField from "components/fields/SearchField";
import AccountsList from "components/lists/AccountsList";

export default function HideStoryAndLiveSettingsPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[650px] p-4 my-4 md:my-14 size-full">
      <h1 className="text-xl font-bold">Hide story and live from</h1>
      <p className="text-sm text-[rgb(168,168,168)]">
        Hide all photos and videos you add to your story from specific people.
        This also hides your live videos.
      </p>
      <div className="h-10">
        <SearchField />
      </div>
      <AccountsList type="input" limit={1} />
    </div>
  );
}
