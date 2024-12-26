import IIcon from "icons/IIcon";
import NewMessageIcon from "icons/NewMessageIcon";
import ProfilePicture from "components/ProfilePicture";
import TransitionLink from "components/TransitionLink";
import NavigateBackBtn from "components/NavigateBackBtn";

export default function MessengerHeader({ page }) {
  return (
    <div className="relative flex items-center w-full">
      <div className="absolute left-0">
        <div className="mt-1.5">
          <NavigateBackBtn type="extended" />
        </div>
      </div>

      {page[1] === "new" ? (
        <h1 className="mx-auto font-semibold">New Message</h1>
      ) : page[2] === "details" ? (
        <h1 className="mx-auto text-lg font-semibold">Details</h1>
      ) : (
        <>
          <div className="flex items-center gap-4 mx-auto">
            {page.length === 2 && (
              <ProfilePicture storyPadding="0px" className="size-6" />
            )}
            <span className="font-bold">Username</span>
          </div>

          <div className="absolute right-0">
            {page.length === 2 ? (
              <IIcon className="size-6" />
            ) : (
              <TransitionLink to="direct/new">
                <NewMessageIcon />
              </TransitionLink>
            )}
          </div>
        </>
      )}
    </div>
  );
}
