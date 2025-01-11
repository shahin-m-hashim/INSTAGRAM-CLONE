import { useRef } from "react";
import useStore from "store/_store";
import { useShallow } from "zustand/shallow";
import Button from "components/wrappers/Button";
import ToggleSwitch from "components/ToggleSwitch";
import ProfilePicture from "components/ProfilePicture";
import DropDownArrowIcon from "icons/DropDownArrowIcon";
import GenderSelectionDropDownMenu from "components/widgets/GenderSelectionDropDownMenu";

export default function EditProfileForm() {
  const imageInputRef = useRef(null);

  const [
    error,
    fields,
    isChanged,
    isSubmitting,
    setNewProfilePic,
    showAccountSuggestions,
    showGenderSelectionMenu,
    toggleGenderSelectionMenu,
    setEditProfileFormFieldValue,
    toggleShowAccountSuggestions,
  ] = useStore(
    useShallow((state) => [
      state.forms.editProfile.error,
      state.forms.editProfile.fields,
      state.forms.editProfile.isChanged,
      state.forms.editProfile.isSubmitting,
      state.setNewProfilePic,
      state.forms.editProfile.showAccountSuggestions,
      state.forms.editProfile.showGenderSelectionMenu,
      state.toggleGenderSelectionMenu,
      state.setEditProfileFormFieldValue,
      state.toggleShowAccountSuggestions,
    ])
  );

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setNewProfilePic(file);
  };

  return (
    <form className="flex flex-col gap-10 p-4">
      <div className="flex items-center justify-between gap-2 p-4 rounded-xl bg-widget">
        <div className="flex items-center flex-1 gap-2 md:gap-5">
          <ProfilePicture storyPadding="0px" />
          <span className="font-semibold">username</span>
        </div>

        <input
          type="file"
          accept="image/*"
          ref={imageInputRef}
          className="sr-only"
          onChange={handleFileChange}
        />

        <Button
          onClick={() => imageInputRef.current.click()}
          className="text-xs xs:text-sm w-[100px] h-6 xs:h-8 md:px-3 xs:w-[120px]"
        >
          Change Photo
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="website" className="font-bold">
          Website
        </label>
        <input
          disabled
          type="text"
          id="website"
          name="website"
          placeholder="Website"
          className="px-4 py-3 text-sm rounded-lg cursor-not-allowed bg-widget"
        />

        <p className="text-xs text-tertiary">
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
            value={fields.bio}
            onChange={(e) =>
              setEditProfileFormFieldValue("bio", e.target.value)
            }
            className="w-full p-3 text-sm bg-transparent border rounded-lg border-tertiary"
          />
          <div className="absolute bottom-4 right-4">
            <span className="text-xs text-tertiary">
              {fields.bio.length}/150
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="font-bold">Gender</h2>

        <div className="relative">
          <div
            id="gender"
            name="gender"
            className="flex items-center justify-between px-3 bg-transparent border rounded-lg hover:bg-sidebar-hover hover:cursor-pointer border-tertiary"
          >
            Prefer not to say
            <button
              type="button"
              className="py-3"
              onClick={toggleGenderSelectionMenu}
            >
              <DropDownArrowIcon className="size-5" />
            </button>
          </div>

          {showGenderSelectionMenu && <GenderSelectionDropDownMenu />}
        </div>
        <p className="text-xs text-tertiary">
          This won&apos;t be part of your public profile.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="font-bold">Show account suggestions on profiles</h2>

        <div className="p-4 border rounded-xl border-tertiary">
          <div className="flex justify-between">
            <div className="flex flex-col flex-1 gap-2">
              <div className="flex items-center justify-between gap-4">
                <h3>Show account suggestions on profiles</h3>
                <ToggleSwitch
                  id="suggestion"
                  isChecked={showAccountSuggestions}
                  handleChange={toggleShowAccountSuggestions}
                />
              </div>

              <p className="pr-12 text-xs text-tertiary">
                Choose whether people can see similar account suggestions on
                your profile, and whether your account can be suggested on other
                profiles.
              </p>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-center text-semibold text-error">
          <p>Something went wrong, please try again after some time.</p>
        </div>
      )}

      <div className="flex justify-end">
        <Button
          type="submit"
          className="md:w-24"
          disabled={!isChanged || isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}
