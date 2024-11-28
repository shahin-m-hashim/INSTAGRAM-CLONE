import NotSelectedIcon from "icons/NotSelectedIcon";
import followSuggestions from "mocks/follow_suggestions.json";

export default function SuggestedAccountsList() {
  return (
    <ul className="flex flex-col w-full gap-3">
      {followSuggestions.map((user) => (
        <li key={user.id} className="flex items-center gap-3">
          <div className="h-full">
            <img
              src={user.profilePic}
              className="rounded-full size-14"
              alt={`${user.username} profile`}
            />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex gap-1">
              <span className="text-base font-semibold">{user.username}</span>
              {user.isVerified && (
                <img src="icons/verified.svg" alt="verified" />
              )}
            </div>
            <span className="text-sm text-[rgb(168,168,168)]">
              {user.fullName}
            </span>
            <span className="text-xs text-[rgb(168,168,168)]">{user.tag}</span>
          </div>
          <div className="flex justify-center h-full">
            {<NotSelectedIcon className="size-6" />}
          </div>
        </li>
      ))}
    </ul>
  );
}
