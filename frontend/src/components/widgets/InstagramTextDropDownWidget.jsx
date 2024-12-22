import PeoplesIcon from "icons/PeoplesIcon";
import StarIcon from "icons/StarIcon";

export default function InstagramTextDropDownWidget() {
  return (
    <div className="absolute top-[58px] left-4">
      <div className="flex flex-col rounded-lg bg-widget">
        <div className="flex items-center px-4 py-2">
          <span className="w-[78px] font-semibold">Following</span>
          <PeoplesIcon className="size-5" />
        </div>

        <div className="flex items-center px-4 py-2">
          <span className="w-[78px] font-semibold">Favorites</span>
          <StarIcon />
        </div>
      </div>
    </div>
  );
}
