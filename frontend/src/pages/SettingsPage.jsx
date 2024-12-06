import Footer from "components/Footer";
import Button from "components/wrappers/Button";
import ToggleSwitch from "components/ToggleSwitch";
import ProfilePicture from "components/ProfilePicture";
import HomeLayout from "components/wrappers/AppLayout";
import SettingsSidebar from "components/sidebars/SettingsSidebar";
import RadioInput from "components/RadioInput";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

export default function SettingsPage() {
  return (
    <HomeLayout hideFooter={true}>
      <main className="scrollbar-dark flex min-w-[320px] bg-black text-white md:pl-[80px] xl:pl-[250px]">
        <SettingsSidebar />

        <div className="hidden md:block flex-1 h-screen overflow-auto md:pt-0 pb-[50px] md:pb-0 pt-[60px]">
          <div className="flex flex-col items-center">
            <form className="flex flex-col gap-10 p-4 max-w-[600px] my-4 md:my-14 size-full">
              <h1 className="text-xl font-bold">Edit Profile</h1>

              <div className="flex gap-2 items-center justify-between rounded-xl p-4 bg-[rgb(38,38,38)]">
                <div className="flex items-center flex-1 gap-2 md:gap-5">
                  <ProfilePicture />
                  <span className="font-semibold">username</span>
                </div>
                <Button className="text-xs xs:text-sm md:px-3 w-[120px]">
                  Change Photo
                </Button>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="website" className="font-bold">
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  placeholder="Website"
                  className="text-sm bg-[rgb(38,38,38)] px-4 py-3 rounded-lg"
                />
                <p className="text-xs text-[rgb(168,168,168)]">
                  Editing your links is only available on mobile. Visit the
                  Instagram app and edit your profile to change the websites in
                  your bio.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="bio" className="font-bold">
                  Bio
                </label>
                <div className="relative">
                  <textarea
                    id="bio"
                    name="bio"
                    placeholder="Bio"
                    className="text-sm w-full rounded-lg bg-transparent border border-[rgb(38,38,38)] p-3"
                  />
                  <div className="absolute bottom-4 right-4">
                    <span className="text-xs text-[rgb(168,168,168)]">
                      0/150
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="gender" className="font-bold">
                  Gender
                </label>
                <div className="relative">
                  <div
                    id="gender"
                    name="gender"
                    className="hover:bg-[rgb(18,18,18)] flex justify-between items-center hover:cursor-pointer rounded-lg bg-transparent border border-[rgb(38,38,38)] p-3"
                  >
                    Prefer not to say
                    <DropDownArrowIcon />
                  </div>
                  <div className="absolute right-0 z-20 top-14">
                    <div className="flex flex-col w-[320px] gap-2 p-3 bg-[rgb(38,38,38)] rounded-xl">
                      <div className="flex items-center justify-between gap-5 p-3 hover:bg-[rgb(68,68,68)] rounded-lg cursor-pointer">
                        <span>Female</span>
                        <RadioInput name="gender" value="female" />
                      </div>

                      <div className="flex items-center justify-between gap-5 p-3 hover:bg-[rgb(68,68,68)] rounded-lg cursor-pointer">
                        <span>Male</span>
                        <RadioInput name="gender" value="male" />
                      </div>

                      <div className="flex flex-col gap-5 p-3 hover:bg-[rgb(68,68,68)] rounded-lg cursor-pointer">
                        <div className="flex items-center justify-between gap-5">
                          <span>Custom</span>
                          <RadioInput name="gender" value="custom" />
                        </div>
                        <textarea className="w-full rounded-lg bg-[rgb(18,18,18)] p-3"></textarea>
                      </div>

                      <div className="flex items-center justify-between gap-5 p-3 hover:bg-[rgb(68,68,68)] rounded-lg cursor-pointer">
                        <span>Prefer not to say</span>
                        <RadioInput
                          name="gender"
                          isChecked={true}
                          value="prefer not to say"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[rgb(168,168,168)]">
                  This won’t be part of your public profile.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-bold">
                  Show account suggestions on profiles
                </h2>

                <div className="border rounded-xl border-[rgb(38,38,38)] p-4">
                  <div className="flex justify-between">
                    <div className="flex flex-col flex-1 gap-2">
                      <div className="flex items-center justify-between gap-4">
                        <h3>Show account suggestions on profiles</h3>
                        <ToggleSwitch id="suggestion" />
                      </div>

                      <p className="text-xs text-[rgb(168,168,168)] pr-12">
                        Choose whether people can see similar account
                        suggestions on your profile, and whether your account
                        can be suggested on other profiles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="w-24">
                  Submit
                </Button>
              </div>
            </form>

            <div className="px-5 my-10">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </HomeLayout>
  );
}
