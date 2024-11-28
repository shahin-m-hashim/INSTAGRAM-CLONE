/* eslint-disable react/prop-types */
import NotSelectedIcon from "icons/NotSelectedIcon";
import followSuggestions from "mocks/follow_suggestions.json";
import { cn } from "utils/cn";

export default function SuggestedAccountsList({
  type = "normal",
  limit = followSuggestions.length,
}) {
  return (
    <ul className="flex flex-col w-full gap-3">
      {followSuggestions
        .map((user) => (
          <li key={user.id} className="flex items-center gap-3">
            <div className="h-full">
              <img
                src={user.profilePic || "images/default_dp.webp"}
                className={cn(
                  "rounded-full",
                  type === "signup" ? "size-14" : "size-12"
                )}
                alt={`${user.username}`}
              />
            </div>

            <div className="flex flex-1 h-full">
              <div className="flex flex-col size-full">
                <div className="flex gap-1">
                  <span
                    className={cn(
                      "font-semibold",
                      type === "signup" ? "text-base" : "text-sm"
                    )}
                  >
                    {user.username}
                  </span>
                  {user.isVerified && (
                    <img src="icons/verified.svg" alt="verified" />
                  )}
                </div>

                <span
                  className={cn(
                    "text-sm text-[rgb(168,168,168)]",
                    type === "signup" ? "block" : "hidden"
                  )}
                >
                  {user.fullName}
                </span>

                <span className="text-xs text-[rgb(168,168,168)]">
                  {user.tag}
                </span>
              </div>
            </div>

            <div className="flex justify-center h-full">
              {type === "signup" ? (
                <NotSelectedIcon className="size-6" />
              ) : (
                <a className="text-xs text-[rgb(0,149,246)] hover:text-white font-semibold">
                  Follow
                </a>
              )}
            </div>
          </li>
        ))
        .slice(0, limit)}
    </ul>
  );
}
