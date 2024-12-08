import ToggleSwitch from "components/ToggleSwitch";

export default function AccountPrivacyTab() {
  return (
    <div className="flex flex-col gap-6 max-w-[650px] p-4 my-4 md:my-14 size-full">
      <h1 className="text-xl font-bold">Account Privacy</h1>
      <div className="rounded-2xl border border-[rgb(54,54,54,0.7)] px-5 py-6">
        <div className="flex flex-col gap-2">
          <h1>Private Account</h1>
          <div className="flex items-center gap-4">
            <div className="text-xs text-[rgb(168,168,168)]">
              <p>
                When your account is public, your profile and posts can be seen
                by anyone, on or off Instagram, even if they don&apos;t have an
                Instagram account.
              </p>
              <p>
                When your account is private, only the followers you approve can
                see what you share, including your photos or videos on hashtag
                and location pages, and your followers and following lists.
                Certain info on your profile, like your profile picture and
                username, is visible to everyone on and off Instagram.{" "}
                <a className="text-white">Learn more</a>
              </p>
            </div>
            <ToggleSwitch />
          </div>
        </div>
      </div>
    </div>
  );
}
