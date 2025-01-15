import useStore from "store/_store";
import CreateIcon from "icons/CreateIcon";
import MessengerIcon from "icons/MessengerIcon";
import TransitionLink from "components/TransitionLink";
import DropDownArrowIcon from "icons/DropDownArrowIcon";
import InstagramTextIcon from "icons/InstagramTextIcon";

export default function HomeHeader() {
  const toggleSecondaryWidget = useStore(
    (state) => state.toggleSecondaryWidget
  );

  return (
    <>
      <div className="relative flex items-center gap-2">
        <InstagramTextIcon />
        <button
          type="button"
          onClick={() => toggleSecondaryWidget("instagramTextDropdown")}
        >
          <DropDownArrowIcon />
        </button>
      </div>

      <div className="flex justify-end flex-1 h-full">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => toggleSecondaryWidget("create")}
            className="items-center gap-4"
          >
            <CreateIcon />
          </button>

          <TransitionLink to="direct" className="items-center gap-4">
            <MessengerIcon />
          </TransitionLink>
        </div>
      </div>
    </>
  );
}
