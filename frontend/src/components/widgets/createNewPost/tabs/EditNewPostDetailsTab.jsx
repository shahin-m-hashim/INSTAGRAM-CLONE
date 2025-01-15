import useStore from "store/_store";
import { useShallow } from "zustand/shallow";
import LocationIcon from "icons/LocationIcon";
import ToggleSwitch from "components/ToggleSwitch";
import CollaboratorsIcon from "icons/CollaboratorsIcon";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

export default function EditNewPostDetailsTab() {
  const [
    status,
    details,
    setNewPostDetails,
    showAdvancedDetailsMenu,
    toggleNewPostAdvancedSettings,
    toggleShowNewPostAdvancedSettingsTab,
  ] = useStore(
    useShallow((store) => [
      store.newPost.status,
      store.newPost.details,
      store.setNewPostDetails,
      store.newPost.showAdvancedSettingsTab,
      store.toggleNewPostAdvancedSettings,
      store.toggleShowNewPostAdvancedSettingsTab,
    ])
  );

  return (
    <>
      {status === "finishing" && (
        <div className="w-full h-full md:w-[320px] flex flex-col gap-6 p-3 md:h-[440px] border-l border-l-primary overflow-y-auto rounded-r-lg">
          <div className="flex items-center gap-2">
            <img
              src="images/users/ludacris.webp"
              className="rounded-full size-8"
            />
            <span>ludacris</span>
          </div>

          <div className="relative h-[30vh] md:h-[135px] flex-shrink-0">
            <textarea
              id="caption"
              maxLength={2200}
              value={details.caption}
              className="bg-transparent size-full"
              placeholder="caption for the post ...."
              onChange={(e) => setNewPostDetails("caption", e.target.value)}
            ></textarea>

            <div className="absolute right-0 -bottom-5">
              <span className="text-xs text-tertiary">
                {details.caption.length}/2,200
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3">
            <input
              type="text"
              id="location"
              value={details.location}
              placeholder="Add location"
              onChange={(e) => setNewPostDetails("location", e.target.value)}
              className="w-full pr-3 bg-transparent placeholder:text-tertiary"
            />
            <label htmlFor="location">
              <LocationIcon />
            </label>
          </div>

          <div className="flex items-center justify-between">
            <input
              type="text"
              id="collaborators"
              placeholder="Add collaborators"
              className="w-full pr-3 bg-transparent placeholder:text-tertiary"
            />
            <label htmlFor="collaborators">
              <CollaboratorsIcon />
            </label>
          </div>

          <button
            type="button"
            className="flex items-center justify-between"
            onClick={toggleShowNewPostAdvancedSettingsTab}
          >
            <span>Advanced Settings</span>
            <DropDownArrowIcon
              className={showAdvancedDetailsMenu ? "rotate-180" : ""}
            />
          </button>

          {showAdvancedDetailsMenu && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h2>Hide like and view counts on this post</h2>
                  <ToggleSwitch
                    id="hideNewPostLikeAndViewCounts"
                    isChecked={details.advancedSettings.hideLikeAndViewCounts}
                    handleChange={() =>
                      toggleNewPostAdvancedSettings("hideLikeAndViewCounts")
                    }
                  />
                </div>
                <p className="text-xs text-tertiary">
                  Only you will see the total number of likes and views on this
                  post. You can change this later by going to the ... menu at
                  the top of the post. To hide like counts on other
                  people&apos;s posts, go to your account settings.
                  <a className="text-link-secondary hover:text-link-secondary-hover">
                    Learn more
                  </a>
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h2>Turn off commenting</h2>
                  <ToggleSwitch
                    id="newPostTurnOffComments"
                    isChecked={details.advancedSettings.turnOffComments}
                    handleChange={() =>
                      toggleNewPostAdvancedSettings("turnOffComments")
                    }
                  />
                </div>
                <p className="text-xs text-tertiary">
                  You can change this later by going to the ··· menu at the top
                  of your post.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
