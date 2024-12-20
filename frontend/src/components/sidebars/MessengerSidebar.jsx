import MessengerContent from "components/contents/MessengerContent";

export default function MessengerSidebar() {
  return (
    <div className="flex flex-col w-[320px] lg:w-[400px] gap-3 border-r border-primary">
      <MessengerContent />
    </div>
  );
}
