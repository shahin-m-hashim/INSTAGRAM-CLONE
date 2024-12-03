/* eslint-disable react/prop-types */

import { cn } from "utils/cn";
import users from "mocks/users.json";
import Image from "components/Image";
import Button from "components/wrappers/Button";
import NotSelectedIcon from "icons/NotSelectedIcon";

export default function AccountsList({
  type = "normal",
  limit = users.length,
}) {
  return (
    <ul className="flex flex-col w-full gap-3">
      {users.slice(0, limit).map((user) => (
        <li key={user.id} className="flex items-center gap-3">
          <div className="h-full">
            <Image
              className={cn(
                "rounded-full",
                type === "follow" ? "size-14" : "size-12"
              )}
              iconClassName="w-5"
              alt={`${user.username}`}
              src={user.profilePic || "images/default_dp_dark.webp"}
            />
          </div>

          <div className="flex flex-1 h-full">
            <div className="flex flex-col size-full">
              <div className="flex gap-1">
                <span className="text-sm font-semibold">{user.username}</span>
                {user.isVerified && (
                  <img src="icons/verified.svg" alt="verified" />
                )}
              </div>

              <span className="text-sm text-[rgb(168,168,168)]">
                {user.fullName}
              </span>

              {type !== "following" && type !== "followers" && (
                <span className="text-xs text-[rgb(168,168,168)]">
                  {user.tag}
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-center h-full">
            {type === "home" ? (
              <NotSelectedIcon className="size-6" />
            ) : type === "notifications" ? (
              <Button className="h-8 px-6">Follow</Button>
            ) : (
              <a className="text-xs text-[rgb(0,149,246)] hover:text-white font-semibold">
                Follow
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
