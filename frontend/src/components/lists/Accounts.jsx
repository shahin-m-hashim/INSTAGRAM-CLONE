import { cn } from "utils/cn";
import useStore from "store/_store";
import users from "mocks/users.json";
import Image from "components/Image";
import Button from "components/wrappers/Button";
import CheckboxInput from "components/CheckboxInput";
import { useNavigate } from "react-router-dom";

export default function Accounts({
  className = "",
  type = "normal",
  specialCase = false,
  minCheckedInputs = 0,
  limit = users.length,
}) {
  const navigate = useNavigate();

  const theme = useStore((state) => state.theme);
  const setShowMessage = useStore((state) => state.setShowMessage);
  const showMessage = useStore((state) => state.messenger.showMessage);
  const setSecondaryWidget = useStore((state) => state.setSecondaryWidget);

  const handleChange = (username) => {
    if (username === "virat.kohli") {
      setShowMessage(!showMessage);
      setSecondaryWidget(null);
      navigate("/direct/virat.kohli");
    }
  };

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
              id={user.id}
              iconStyles="w-5"
              alt={`${user.username}`}
              src={user.profilePic || `images/default_dp_${theme}.webp`}
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
              <>
                {specialCase ? (
                  <CheckboxInput
                    value={user.id}
                    id={`checkbox-${user.id}`}
                    handleChange={() => handleChange(user.username)}
                    isChecked={user.username === "virat.kohli" && showMessage}
                  />
                ) : (
                  <CheckboxInput
                    value={user.id}
                    id={`checkbox-${user.id}`}
                    isChecked={idx < minCheckedInputs}
                  />
                )}
              </>
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
