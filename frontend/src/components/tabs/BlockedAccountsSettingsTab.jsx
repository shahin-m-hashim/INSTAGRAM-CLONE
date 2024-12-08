export default function BlockedAccountsSettingsTab() {
  return (
    <div className="flex flex-col gap-6 max-w-[650px] p-4 my-4 md:my-14 size-full">
      <h1 className="text-xl font-bold">Blocked accounts</h1>
      <h2 className="text-[rgb(168,168,168)]">
        You can block people anytime from their profiles.
      </h2>
      <div className="flex items-center justify-center size-full">
        <span className="text-sm text-[rgb(168,168,168)]">
          You haven&apos;t blocked anyone.
        </span>
      </div>
    </div>
  );
}
