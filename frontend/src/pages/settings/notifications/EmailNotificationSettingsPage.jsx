import GroupedOptions from "components/GroupedOptions";
import NavigateBackBtn from "components/NavigateBackBtn";

const emailOptions = [
  {
    type: "on/off",
    heading: "Feedback emails",
    example: "Give feedback on Instagram.",
  },
  {
    type: "on/off",
    heading: "Reminder emails",
    example: "Get notifications you may have missed.",
  },
  {
    type: "on/off",
    heading: "Product emails",
    example: "Get tips and resources about Instagram's tools.",
  },
  {
    type: "on/off",
    heading: "News emails",
    example: "Learn about new Instagram features.",
  },
  {
    type: "on/off",
    heading: "Support emails",
    example:
      "Get updates on reports and violations of our Community Standards.",
  },
];

export default function EmailNotificationSettingsPage() {
  return (
    <>
      <div className="flex items-center gap-4 mb-5 -ml-2">
        <NavigateBackBtn />
        <h1 className="text-xl font-bold">Email Notifications</h1>
      </div>

      <GroupedOptions options={emailOptions} type="advanced" />
    </>
  );
}
