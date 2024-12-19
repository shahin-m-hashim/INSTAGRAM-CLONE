import SearchField from "components/fields/SearchField";
import Footer from "components/Footer";

export default function CloseFriendsSettingsPage() {
  return (
    <div className="flex flex-col justify-between max-w-[650px] p-4 w-full">
      <div className="flex flex-col w-full gap-6">
        <div className="hidden mb-5 mt-14 md:block">
          <h1 className="text-xl font-bold">Close Friends</h1>
        </div>

        <p className="text-sm  text-secondary">
          We don&apos;t send notifications when you edit your close friends
          list.&nbsp;
          <a className="text-link hover:text-link-hover hover:text-white">
            How it works.
          </a>
        </p>
        <div className="h-10">
          <SearchField />
        </div>
        <span className="font-bold  text-secondary">No users found.</span>
      </div>

      <div className="hidden w-full px-5 my-5 md:flex md:my-10">
        <Footer />
      </div>
    </div>
  );
}
