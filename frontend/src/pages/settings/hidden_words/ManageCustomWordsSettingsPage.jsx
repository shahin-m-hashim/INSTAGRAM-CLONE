import Button from "components/wrappers/Button";
import ToggleSwitch from "components/ToggleSwitch";
import NavigateBackBtn from "components/NavigateBackBtn";

export default function ManageCustomWordsSettingsPage() {
  return (
    <>
      <div className="flex items-center gap-4 mt-14">
        <NavigateBackBtn />
        <h1 className="text-xl font-bold">Comment filtering</h1>
      </div>

      <div className="flex flex-col gap-6 h-[60%]">
        <h1>Keyword filters</h1>

        <p className="text-sm">
          Hide comments that contain any of the words or phrases you type above
          from your posts.
        </p>

        <form className="flex flex-col gap-4">
          <textarea
            placeholder="Add keywords separated by commas"
            className="h-36 rounded-md bg-transparent p-2 border border-[rgb(38,38,38)] placeholder:text-[rgb(168,168,168)]"
          ></textarea>

          <Button className="w-20" type="submit" disabled={true}>
            Submit
          </Button>
        </form>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span>Hide Comments</span>
          <ToggleSwitch />
        </div>

        <p className="text-xs text-[rgb(168,168,168)]">
          Hide comments that contain commonly reported keywords from your posts.
        </p>
      </div>
    </>
  );
}
