import MessagesIcon from "icons/MessagesIcon";
import Button from "components/wrappers/Button";

export default function InboxPage() {
  return (
    <div className="flex items-center justify-center size-full">
      <div className="flex flex-col items-center gap-4 text-center w-[200px]">
        <MessagesIcon className="size-24" />
        <div>
          <h1>Your Messages</h1>
          <p className="text-sm text-[rgb(168,168,168)]">
            Send a message to start a chat.
          </p>
        </div>
        <Button className="w-28">Send message</Button>
      </div>
    </div>
  );
}
