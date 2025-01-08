import { cn } from "utils/cn";
import users from "mocks/users.json";
import Image from "components/Image";
import { useLocation } from "react-router-dom";
import ProfilePicture from "components/ProfilePicture";
import HorizontalScroller from "components/wrappers/HorizontalScroller";

export default function Stories() {
  const pathname = useLocation().pathname.split("/")[1];

  return (
    <HorizontalScroller>
      <ul
        className={cn(
          "flex items-center gap-4",
          pathname === "direct" && "h-[120px]"
        )}
      >
        <li>
          <ProfilePicture
            storyPadding="0px"
            className="size-16"
            noteInputClassName="left-1 -top-7"
            showNote={pathname === "direct" ? true : false}
            requireNoteInput={pathname === "direct" ? true : false}
          />
        </li>

        {users.map((user) => (
          <li key={user.id}>
            <div
              className={cn(
                "rounded-full p-[2px]",
                user.hasStory ? "active-story" : "inactive-story"
              )}
            >
              <Image
                id={user.id}
                lazyLoad={true}
                iconStyles="w-4"
                alt={user.username}
                className="rounded-full min-w-14 size-14"
                src={user.profilePic || "images/default_dp.webp"}
              />
            </div>
          </li>
        ))}
      </ul>
    </HorizontalScroller>
  );
}
