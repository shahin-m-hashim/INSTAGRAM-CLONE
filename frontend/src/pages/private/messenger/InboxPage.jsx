import MessagesIcon from "icons/MessagesIcon";
import Button from "components/wrappers/Button";

export default function InboxPage() {
  return (
    <div className="items-center justify-center hidden md:flex size-full">
      <div className="flex flex-col items-center gap-4 text-center w-[200px]">
        <MessagesIcon className="size-24" />
        <div>
          <h1>Your Messages</h1>
          <p className="text-sm text-tertiary">
            Send a message to start a chat.
          </p>
        </div>
        {/* TODO: Open New Message Popup on click */}
        <Button className="w-28">Send message</Button>
      </div>
    </div>
  );
}
