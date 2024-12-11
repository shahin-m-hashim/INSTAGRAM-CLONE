import { cn } from "utils/cn";
import users from "mocks/users.json";
import Image from "components/Image";
import ProfilePicture from "components/ProfilePicture";
import HorizontalScroller from "components/wrappers/HorizontalScroller";

export default function StoriesList({ showOwnStory = false }) {
  return (
    <HorizontalScroller>
      <ul
        className={cn(
          "flex items-center gap-4",
          showOwnStory ? "h-[120px]" : "h-auto"
        )}
      >
        {showOwnStory && (
          <li>
            <ProfilePicture
              requireNoteInput={true}
              className="size-16"
              noteInputClassName="left-1 -top-7"
            />
          </li>
        )}

        {users.map((user) => (
          <li key={user.id}>
            <div className="rounded-full p-[2px] active-story-gradient border-2 border-[rgb(54,54,54)]">
              <Image
                lazyLoad={true}
                alt={user.username}
                iconClassName="w-5"
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
