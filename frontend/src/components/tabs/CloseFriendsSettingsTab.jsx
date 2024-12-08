import SearchField from "components/fields/SearchField";

export default function CloseFriendsSettingsTab() {
  return (
    <div className="flex flex-col gap-6 max-w-[650px] p-4 my-4 md:my-14 size-full">
      <h1 className="text-xl font-bold">Close Friends</h1>
      <p className="text-sm text-[rgb(168,168,168)]">
        We don&apos;t send notifications when you edit your close friends
        list.&nbsp;
        <a className="text-[rgb(0,149,246)] hover:text-white">How it works.</a>
      </p>
      <div className="h-10">
        <SearchField />
      </div>
      <span className="font-bold text-[rgb(168,168,168)]">No users found.</span>
    </div>
  );
}
