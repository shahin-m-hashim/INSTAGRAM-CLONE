import users from "mocks/users.json";
import HorizontalScroller from "components/wrappers/HorizontalScroller";
import Image from "components/Image";

export default function StoriesList() {
  return (
    <HorizontalScroller>
      <ul className="flex items-center gap-4">
        {users.map((user) => (
          <li key={user.id}>
            <div className="rounded-full p-[2px] active-story-gradient">
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
