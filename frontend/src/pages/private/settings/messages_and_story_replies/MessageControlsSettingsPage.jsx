import GroupedOptions from "components/GroupedOptions";
import NavigateBackBtn from "components/NavigateBackBtn";

export default function MessageControlsSettingsPage() {
  return (
    <>
      <div className="items-center hidden gap-4 mb-5 -ml-2 md:flex">
        <NavigateBackBtn />
        <h1 className="text-xl font-bold">Message controls</h1>
      </div>
      <p className="text-xs  text-tertiary md:w-9/12">
        People you follow or have chatted with before can always message you
        unless you block them. When anyone else sends you a message, you can
        receive it as a message request that you can accept or delete.
      </p>
      <a className="text-xs text-white hover:underline">
        Learn more about who can message you
      </a>

      <div className="flex flex-col gap-2">
        <h1>Your followers on Instagram</h1>
        <p className="text-xs  text-tertiary ">
          Message requests from people who follow you on Instagram will be
          delivered to your Message requests folder unless you choose not to
          receive them.
        </p>

        <GroupedOptions
          options={[
            { title: "Message Requests" },
            { title: "Don't Receive Requests" },
          ]}
          needsBorder={true}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h1>Others on Instagram</h1>
        <p className="text-xs  text-tertiary">
          Message requests from other accounts on Instagram will be delivered to
          your Message requests folder unless you choose not to receive them.
        </p>
        <GroupedOptions
          options={[
            { title: "Message Requests" },
            { title: "Don't Receive Requests" },
          ]}
          needsBorder={true}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h1>Who can add you to group chats</h1>

        <GroupedOptions
          options={[
            {
              title: "Everyone on Instagram",
              description:
                "You can be added to group chats by everyone,except people you've blocked.",
            },
            {
              title: "Only people you follow on Instagram",
              description:
                "People you follow or have messaged before can add you to group chats.",
            },
          ]}
          needsBorder={true}
        />
      </div>
    </>
  );
}
