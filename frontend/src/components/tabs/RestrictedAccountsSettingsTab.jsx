export default function RestrictedAccountsSettingsTab() {
  return (
    <div className="flex flex-col gap-6 max-w-[650px] p-4 my-4 md:my-14 size-full">
      <h1 className="text-xl font-bold">Restricted accounts</h1>
      <p className="text-[rgb(168,168,168)]">
        Protect yourself from unwanted interactions without having to block or
        unfollow people you know. You can restrict them anytime from their
        profiles. <a className="text-white">Learn how it works</a>
      </p>
      <div className="flex items-center justify-center size-full">
        <span className="text-sm text-[rgb(168,168,168)]">
          You haven&apos;t restricted anyone.
        </span>
      </div>
    </div>
  );
}
