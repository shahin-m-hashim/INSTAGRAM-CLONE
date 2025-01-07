import { cn } from "utils/cn";
import users from "mocks/users.json";
import Image from "components/Image";
import Button from "components/wrappers/Button";
import CheckboxInput from "components/CheckboxInput";

export default function Accounts({
  type = "normal",
  className = "",
  minCheckedInputs = 0,
  limit = users.length,
}) {
  return (
    <ul className={cn("flex flex-col w-full gap-3", className)}>
      {users.slice(0, limit).map((user, idx) => (
        <li key={user.id} className="flex items-center gap-3">
          <div className="h-full">
            <Image
              className={cn(
                "rounded-full",
                type === "follow" ? "size-14" : "size-12"
              )}
              iconStyles="w-5"
              imageId={`u-${user.id}`}
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

              <span className="text-sm text-tertiary">{user.fullName}</span>

              {type !== "following" && type !== "followers" && (
                <span className="text-xs text-tertiary">{user.tag}</span>
              )}
            </div>
          </div>

          <div className="flex justify-center h-full">
            {type === "input" ? (
              <CheckboxInput
                value={user.id}
                id={`checkbox-${user.id}`}
                checked={idx < minCheckedInputs}
              />
            ) : type === "notifications" ? (
              <Button className="xs:px-6">Follow</Button>
            ) : (
              <a className="text-xs font-semibold text-link-primary hover:text-link-primary-hover">
                Follow
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
