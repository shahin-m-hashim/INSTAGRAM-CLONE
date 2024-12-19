import Button from "components/wrappers/Button";
import ToggleSwitch from "components/ToggleSwitch";
import ProfilePicture from "components/ProfilePicture";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

export default function EditProfileForm() {
  return (
    <form className="flex flex-col gap-10 p-4">
      <div className="flex items-center justify-between gap-2 p-4 rounded-xl bg-widget">
        <div className="flex items-center flex-1 gap-2 md:gap-5">
          <ProfilePicture storyPadding="0px" />
          <span className="font-semibold">username</span>
        </div>
        <Button className="text-xs xs:text-sm w-[100px] h-6 xs:h-8 md:px-3 xs:w-[120px]">
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
          className="px-4 py-3 text-sm rounded-lg bg-widget"
        />
        <p className="text-xs text-secondary">
          Editing your links is only available on mobile. Visit the Instagram
          app and edit your profile to change the websites in your bio.
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
            className="w-full p-3 text-sm bg-transparent border rounded-lg border-secondary"
          />
          <div className="absolute bottom-4 right-4">
            <span className="text-xs text-secondary">0/150</span>
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
            className="flex items-center justify-between p-3 bg-transparent border rounded-lg hover:bg-widget-hover hover:cursor-pointer border-secondary"
          >
            Prefer not to say
            <DropDownArrowIcon />
          </div>
          {/* <GenderFormWidget /> */}
        </div>
        <p className="text-xs text-secondary">
          This won’t be part of your public profile.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="font-bold">Show account suggestions on profiles</h2>

        <div className="p-4 border rounded-xl border-secondary">
          <div className="flex justify-between">
            <div className="flex flex-col flex-1 gap-2">
              <div className="flex items-center justify-between gap-4">
                <h3>Show account suggestions on profiles</h3>
                <ToggleSwitch id="suggestion" />
              </div>

              <p className="pr-12 text-xs text-secondary">
                Choose whether people can see similar account suggestions on
                your profile, and whether your account can be suggested on other
                profiles.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" className="md:w-24">
          Submit
        </Button>
      </div>
    </form>
  );
}
