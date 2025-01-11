import NotificationsContent from "components/contents/NotificationsContent";

export default function NotificationsSidebar() {
  return (
    <div className="fixed inset-y-0 w-[420px] left-[80px] pointer-events-auto">
      <div className="flex flex-col p-5 overflow-y-auto border-r-2 text-primary bg-primary size-full border-r-tertiary">
        <div className="w-full">
          <h1 className="text-2xl font-bold">Notifications</h1>
        </div>

        <NotificationsContent />
      </div>
    </div>
  );
}
