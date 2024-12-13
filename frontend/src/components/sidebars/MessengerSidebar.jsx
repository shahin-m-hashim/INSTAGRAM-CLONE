import MessengerContent from "components/contents/MessengerContent";

export default function MessengerSidebar() {
  return (
    <div className="flex flex-col w-[320px] lg:w-[420px] gap-3 border-r border-r-[rgb(54,54,54,0.7)]">
      <MessengerContent />
    </div>
  );
}
