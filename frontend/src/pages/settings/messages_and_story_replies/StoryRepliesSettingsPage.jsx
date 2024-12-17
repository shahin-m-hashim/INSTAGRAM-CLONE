import GroupedOptions from "components/GroupedOptions";
import NavigateBackBtn from "components/NavigateBackBtn";

export default function StoryRepliesSettingsPage() {
  return (
    <>
      <div className="items-center hidden gap-4 mb-5 -ml-2 md:flex">
        <NavigateBackBtn />
        <h1 className="text-xl font-bold ">Story replies</h1>
      </div>
      <h2 className="mb-2 font-bold">Who can reply to your stories</h2>
      <GroupedOptions
        type="simple-borderless"
        options={["Everyone", "People you follow", "Off"]}
      />
    </>
  );
}
