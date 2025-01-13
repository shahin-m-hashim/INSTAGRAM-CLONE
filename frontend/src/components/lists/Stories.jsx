import { cn } from "utils/cn";
import users from "mocks/users.json";
import Image from "components/Image";
import { useLocation } from "react-router-dom";
import Carousal from "components/wrappers/Carousal";
import ProfilePicture from "components/ProfilePicture";

export default function Stories() {
  const pathname = useLocation().pathname.split("/")[1];

  return (
    <Carousal carousalStyles={pathname === "direct" && "h-[120px]"}>
      <ProfilePicture
        id="story-profile-pic"
        className="min-w-16 size-16"
        noteInputClassName="left-1 -top-7"
        showNote={pathname === "direct" ? true : false}
        requireNoteInput={pathname === "direct" ? true : false}
      />

      {users.map((user) => (
        <div
          key={user.id}
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
      ))}
    </Carousal>
  );
}
