import Footer from "components/Footer";
import ToggleSwitch from "components/ToggleSwitch";

export default function AccountPrivacySettingsPage() {
  return (
    <div className="flex flex-col justify-between max-w-[650px] px-4 w-full">
      <div className="flex flex-col gap-10 my-5 md:mt-14">
        <div className="hidden px-4 md:block">
          <h1 className="text-xl font-bold">Account Privacy</h1>
        </div>

        <div className="rounded-2xl border border-[rgb(54,54,54,0.7)] px-5 py-6">
          <div className="flex flex-col gap-2">
            <h1>Private Account</h1>
            <div className="flex items-center gap-4">
              <div className="text-xs  text-secondary">
                <p>
                  When your account is public, your profile and posts can be
                  seen by anyone, on or off Instagram, even if they don&apos;t
                  have an Instagram account.
                </p>
                <p>
                  When your account is private, only the followers you approve
                  can see what you share, including your photos or videos on
                  hashtag and location pages, and your followers and following
                  lists. Certain info on your profile, like your profile picture
                  and username, is visible to everyone on and off Instagram.{" "}
                  <a className="text-white">Learn more</a>
                </p>
              </div>
              <ToggleSwitch />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden w-full px-5 my-5 md:flex md:my-10">
        <Footer />
      </div>
    </div>
  );
}
