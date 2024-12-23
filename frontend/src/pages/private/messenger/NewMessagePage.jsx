import Separator from "components/Separator";
import MessagesIcon from "icons/MessagesIcon";
import Button from "components/wrappers/Button";
import SearchField from "components/fields/SearchField";

export default function NewMessagePage() {
  return (
    <>
      <div className="items-center justify-center hidden md:flex size-full">
        <div className="flex flex-col items-center gap-4 text-center w-[200px]">
          <MessagesIcon className="size-24" />
          <div>
            <h1>Your Messages</h1>
            <p className="text-sm text-tertiary">
              Send a message to start a chat.
            </p>
          </div>
          <Button className="w-28">Send message</Button>
        </div>
      </div>

      <div className="flex flex-col md:hidden">
        <div className="flex items-center w-full px-4 h-[50px]">
          <span>To: </span>
          <SearchField className="bg-transparent" showIcon={false} />
        </div>
        <Separator straight={true} />

        <div className="h-[calc(100vh-110px)] w-full p-4 overflow-auto">
          <span className="text-sm text-tertiary">No account found.</span>
          {/* <AccountsList type="input" /> */}
        </div>
      </div>
    </>
  );
}
