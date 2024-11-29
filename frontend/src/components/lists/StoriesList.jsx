import users from "mocks/users.json";
import HorizontalScroller from "components/wrappers/HorizontalScroller";

export default function StoriesList() {
  return (
    <HorizontalScroller>
      <ul className="flex items-center gap-4">
        {users.map((user) => (
          <li key={user.id}>
            <div
              className="rounded-full p-[2px]"
              style={{
                background: `conic-gradient(#FFD600, #FF7A00, #FF0069, #D300C5, #7638FA, #FFD600)`,
              }}
            >
              <img
                alt={`${user.username}`}
                src={user.profilePic || "images/default_dp.webp"}
                className="border-2 border-black rounded-full min-w-14 size-14"
              />
            </div>
          </li>
        ))}
      </ul>
    </HorizontalScroller>
  );
}
