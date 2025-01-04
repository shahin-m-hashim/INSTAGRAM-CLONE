import Footer from "components/Footer";
import Accounts from "components/lists/Accounts";
import SearchField from "components/fields/SearchField";

export default function StoryAndLiveSettingsPage() {
  return (
    <div className="flex flex-col justify-between max-w-[650px] p-4 w-full">
      <div className="flex flex-col w-full gap-6">
        <div className="hidden mb-5 mt-14 md:block">
          <h1 className="text-xl font-bold">Hide story and live from</h1>
        </div>

        <p className="text-sm text-tertiary">
          Hide all photos and videos you add to your story from specific people.
          This also hides your live videos.
        </p>
        <div className="h-10">
          <SearchField />
        </div>
        <Accounts type="input" limit={1} />
      </div>

      <div className="hidden w-full px-5 my-5 md:flex md:my-10">
        <Footer />
      </div>
    </div>
  );
}
