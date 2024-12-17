import GroupedOptions from "components/GroupedOptions";
import NavigateBackBtn from "components/NavigateBackBtn";

const emailOptions = [
  {
    type: "on/off",
    title: "Feedback emails",
    example: "Give feedback on Instagram.",
  },
  {
    type: "on/off",
    title: "Reminder emails",
    example: "Get notifications you may have missed.",
  },
  {
    type: "on/off",
    title: "Product emails",
    example: "Get tips and resources about Instagram's tools.",
  },
  {
    type: "on/off",
    title: "News emails",
    example: "Learn about new Instagram features.",
  },
  {
    type: "on/off",
    title: "Support emails",
    example:
      "Get updates on reports and violations of our Community Standards.",
  },
];

export default function EmailNotificationSettingsPage() {
  return (
    <>
      <div className="items-center hidden gap-4 mb-5 -ml-2 md:flex">
        <NavigateBackBtn />
        <h1 className="text-xl font-bold">Email Notifications</h1>
      </div>

      <GroupedOptions options={emailOptions} type="advanced" />
    </>
  );
}
