import users from "mocks/users.json";
import HorizontalScroller from "components/wrappers/HorizontalScroller";
import Image from "components/Image";

export default function SuggestionCards() {
  return (
    <HorizontalScroller>
      <div className="flex items-center gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex min-w-[170px] flex-col border border-[rgb(54,54,54)]"
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-2 my-4">
              <div className="flex justify-center w-full">
                <Image
                  lazyLoad="true"
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

            <div className="text-center border-t border-t-[rgb(54,54,54)] py-2">
              <a className="text-[rgb(0,149,246)] font-semibold">Follow</a>
            </div>
          </div>
        ))}
      </div>
    </HorizontalScroller>
  );
}
