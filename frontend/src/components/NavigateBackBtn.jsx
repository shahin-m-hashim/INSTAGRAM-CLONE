import { useNavigate } from "react-router-dom";
import DropDownArrowIcon from "icons/DropDownArrowIcon";
import BackArrowIcon from "icons/BackArrowIcon";

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
