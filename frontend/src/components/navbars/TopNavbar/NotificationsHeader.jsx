import NavigateBackBtn from "components/NavigateBackBtn";

export default function NotificationsHeader() {
  return (
    <div className="relative flex items-center justify-center w-full">
      <div className="absolute left-0">
        <NavigateBackBtn />
      </div>

      <h1 className="font-semibold">Notifications</h1>
    </div>
  );
}
