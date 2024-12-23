import IIcon from "icons/IIcon";
import NewMessageIcon from "icons/NewMessageIcon";
import ProfilePicture from "components/ProfilePicture";
import NavigateBackBtn from "components/NavigateBackBtn";
import TransitionLink from "components/TransitionLink";

const showDetails = false; // special case

export default function MessengerHeader({ page }) {
  return (
    <div className="relative flex items-center w-full">
      <div className="absolute left-0">
        <div className="mt-1.5">
          <NavigateBackBtn type="extended" />
        </div>
      </div>

      {showDetails ? (
        <h1 className="mx-auto text-lg font-semibold">Details</h1>
      ) : page[1] === "new" ? (
        <h1 className="mx-auto font-semibold">New Message</h1>
      ) : (
        <>
          <div className="flex items-center gap-2 mx-auto">
            {page.length === 2 && (
              <ProfilePicture storyPadding="0px" className="size-6" />
            )}
            <span className="font-bold">Username</span>
          </div>

          <div className="absolute right-0">
            {page.length === 2 ? (
              <IIcon className="size-6" />
            ) : (
              <TransitionLink to="direct/inbox/new">
                <NewMessageIcon />
              </TransitionLink>
            )}
          </div>
        </>
      )}
    </div>
  );
}
