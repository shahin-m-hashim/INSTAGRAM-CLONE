import Messenger from "components/Messenger";
import MessagesIcon from "icons/MessagesIcon";
import Button from "components/wrappers/Button";
import AppLayout from "components/wrappers/AppLayout";

export default function MessengerPage() {
  return (
    <AppLayout hideTopNavbar={true}>
      <main className="min-w-[320px] md:flex h-screen overflow-hidden bg-black text-white pb-[50px] md:pb-0 md:pl-[80px]">
        <Messenger />
        <div className="items-center justify-center hidden w-full p-4 md:flex">
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
      </main>
    </AppLayout>
  );
}
