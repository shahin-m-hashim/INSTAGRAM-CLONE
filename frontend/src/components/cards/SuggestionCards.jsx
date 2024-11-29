import users from "mocks/users.json";
import HorizontalScroller from "components/wrappers/HorizontalScroller";

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
              <img
                alt={`${user.username}`}
                src={user.profilePic || "images/default_dp.webp"}
                className="w-3/5 border-2 border-black rounded-full"
              />
              <div className="flex gap-2">
                <span className="text-sm font-semibold">{user.fullName}</span>
                {user.isVerified && (
                  <img src="icons/verified.svg" alt="verified" />
                )}
              </div>
              <span className="text-sm">{user.tag}</span>
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
