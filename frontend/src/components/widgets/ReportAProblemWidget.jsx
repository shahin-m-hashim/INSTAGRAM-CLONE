import { useRef } from "react";
import useStore from "store/_store";
import CloseIcon from "icons/CloseIcon";
import Separator from "components/Separator";
import Button from "components/wrappers/Button";

export default function ReportAProblemWidget() {
  const fileInputRef = useRef();
  const setSecondaryWidget = useStore((state) => state.setSecondaryWidget);

  const handleAddFileClick = () => fileInputRef.current.click();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) console.log("Selected file:", file);
  };

  return (
    <div className="absolute inset-0 z-[100] backdrop-brightness-50 pointer-events-auto">
      <div className="flex items-center justify-center size-full">
        <div className="relative flex flex-col rounded-lg w-[400px] h-[300px] bg-widget">
          <div className="flex justify-center w-full p-3">
            <h1 className="font-semibold ">Report A Problem</h1>
          </div>

          <Separator straight={true} />

          <form className="flex flex-col flex-1 gap-4 p-4">
            <textarea
              className="w-full h-full p-2 bg-transparent border-2 rounded-lg border-tertiary focus:outline-none placeholder:text-tertiary"
              placeholder="Please include as much info as possible..."
            ></textarea>
            <div className="flex justify-between w-full">
              <Button type="submit" className="w-28">
                Send Report
              </Button>
              <button
                type="button"
                onClick={handleAddFileClick}
                className="px-4 py-1 text-sm font-semibold rounded-lg bg-button hover:bg-button-hover"
              >
                Add File
              </button>

              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            <p className="text-xs text-tertiary">
              Your Instagram username and browser information will be
              automatically included in your report.
            </p>
          </form>

          <button
            type="button"
            className="absolute top-3 right-3"
            onClick={() => setSecondaryWidget(null)}
          >
            <CloseIcon className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
