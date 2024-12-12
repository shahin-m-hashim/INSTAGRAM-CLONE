import { useRef } from "react";
import CloseIcon from "icons/CloseIcon";
import Separator from "components/Separator";
import Button from "components/wrappers/Button";

export default function ReportAProblemWidget({ setActiveWidget }) {
  const fileInputRef = useRef();

  const handleAddFileClick = () => fileInputRef.current.click();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) console.log("Selected file:", file);
  };

  return (
    <div className="absolute inset-0 z-10 backdrop-brightness-[0.4] pointer-events-auto">
      <div className="flex items-center justify-center size-full">
        <div className="relative flex flex-col rounded-lg w-[400px] h-[300px] bg-[rgb(38,38,38)] text-[rgb(245,245,245)]">
          <div className="flex justify-center w-full p-3">
            <h1>Report A Problem</h1>
          </div>

          <Separator straight={true} className="w-full bg-[rgb(54,54,54)]" />

          <form className="flex flex-col flex-1 gap-4 p-4">
            <textarea
              className="w-full focus:outline-none h-full p-2 bg-transparent rounded-lg border-2 border-[rgb(54,54,54)] placeholder:text-[rgb(168,168,168)]"
              placeholder="Please include as much info as possible..."
            ></textarea>
            <div className="flex justify-between w-full">
              <Button type="submit" className="w-28">
                Send Report
              </Button>
              <button
                type="button"
                onClick={handleAddFileClick}
                className="px-4 py-1 text-sm font-semibold rounded-lg bg-[rgb(68,68,68)]"
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
            <p className="text-xs text-[rgb(168,168,168)]">
              Your Instagram username and browser information will be
              automatically included in your report.
            </p>
          </form>

          <button
            type="button"
            className="absolute top-3 right-3"
            onClick={() => setActiveWidget(false)}
          >
            <CloseIcon className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
