import { useState } from "react";
import useStore from "store/_store";
import CloseIcon from "icons/CloseIcon";
import PeoplesIcon from "icons/PeoplesIcon";
import Separator from "components/Separator";
import RadioInput from "components/RadioInput";
import Button from "components/wrappers/Button";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

export default function CreateNewNoteWidget() {
  const { setSecondaryWidget } = useStore();

  const [state, setState] = useState({
    note: "",
    showDropDown: false,
    sharedWith: "followers",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ note: state.note, sharedWith: state.sharedWith });
  };

  const toggleDropDown = () =>
    setState((prev) => ({ ...prev, showDropDown: !prev.showDropDown }));

  const handleChecked = (e) =>
    setState({ ...state, showDropDown: false, sharedWith: e.target.value });

  return (
    <div className="absolute inset-0 z-20 backdrop-brightness-[0.4] pointer-events-auto">
      <div className="flex items-center justify-center size-full">
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col shadow-primary rounded-lg bg-widget w-[300px] md:w-[500px] h-[300px]"
        >
          <div className="relative flex justify-center w-full p-3">
            <button
              type="button"
              className="absolute left-4 top-4"
              onClick={() => setSecondaryWidget(null)}
            >
              <CloseIcon className="size-5" />
            </button>

            <h1 className="text-lg font-bold">New note</h1>

            <Button className="absolute w-16 right-4" type="submit">
              Share
            </Button>
          </div>

          <Separator straight={true} />

          <div className="flex-1 w-full p-4">
            <textarea
              value={state.note}
              placeholder="Share a thought..."
              onChange={(e) => setState({ ...state, note: e.target.value })}
              className="p-3 bg-transparent border rounded-md border-primary size-full focus:outline-none"
            />
          </div>

          <div className="flex justify-center w-full p-3">
            <div className="flex items-center gap-2">
              <PeoplesIcon />
              <p className="text-sm">
                Shared with{" "}
                <span>
                  {state.sharedWith === "followers"
                    ? "followers you follow back"
                    : "close friends"}
                </span>
              </p>
              <button type="button" onClick={toggleDropDown}>
                <DropDownArrowIcon />
              </button>
            </div>
          </div>

          {state.showDropDown && (
            <div className="absolute inset-x-0 -bottom-20">
              <div className="flex items-center justify-center size-full">
                <div className="flex flex-col justify-center gap-3 p-3 rounded-md bg-widget">
                  <div className="flex items-center gap-2">
                    <RadioInput
                      value="followers"
                      checked={state.sharedWith === "followers"}
                    />
                    <p>Followers you follow back</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <RadioInput
                      value="close-friends"
                      checked={state.sharedWith === "close-friends"}
                    />
                    <p>Close Friends</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
