import { useNavigate } from "react-router-dom";
import BackArrowIcon from "icons/BackArrowIcon";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

export default function NavigateBackBtn({ type = "normal" }) {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate(-1)}>
      {type === "normal" ? (
        <div className="transform rotate-90">
          <DropDownArrowIcon className="size-6" />
        </div>
      ) : (
        <BackArrowIcon />
      )}
    </button>
  );
}
