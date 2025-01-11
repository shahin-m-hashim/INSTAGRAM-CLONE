import users from "mocks/users.json";
import Image from "components/Image";
import CloseIcon from "icons/CloseIcon";
import HorizontalScroller from "components/wrappers/HorizontalScroller";

export default function SuggestionCards() {
  return (
    <HorizontalScroller>
      <div className="flex items-center gap-4 h-[15.5rem]">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex min-w-[170px] relative h-full flex-col border border-tertiary"
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-2 my-4">
              <div className="flex justify-center w-full">
                <Image
                  id={user.id}
                  lazyLoad={true}
                  alt={`${user.username}`}
                  className="rounded-full size-24"
                  src={user.profilePic || "images/default_dp.webp"}
                />
              </div>
              <div className="flex justify-center w-full gap-2">
                <span className="text-sm font-semibold">{user.fullName}</span>
                {user.isVerified && (
                  <img src="icons/verified.svg" alt="verified" />
                )}
              </div>
              <div className="flex justify-center w-full">
                <span className="text-sm">{user.tag}</span>
              </div>
            </div>

            <div className="py-2 text-center border-t border-t-tertiary">
              <a className="font-semibold text-link-primary hover:text-link-primary-hover">
                Follow
              </a>
            </div>

            <div className="absolute top-2 right-2">
              <div className="flex items-center justify-center">
                <CloseIcon className="text-[rgb(154,154,154)]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </HorizontalScroller>
  );
}
