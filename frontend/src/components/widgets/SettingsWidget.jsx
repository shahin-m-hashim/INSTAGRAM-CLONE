import Separator from "components/Separator";

export default function SettingsWidget() {
  return (
    <div className="absolute inset-0 z-10 backdrop-brightness-[0.4] pointer-events-auto">
      <div className="flex items-center justify-center size-full">
        <div className="flex flex-col rounded-lg w-[400px] bg-[rgb(38,38,38)] text-[rgb(245,245,245)]">
          <a className="flex justify-center p-3 text-sm">Apps and Websites</a>
          <Separator straight={true} className="bg-[rgb(54,54,54)]" />

          <a className="flex justify-center p-3 text-sm">QR Code</a>
          <Separator straight={true} className="bg-[rgb(54,54,54)]" />

          <a className="flex justify-center p-3 text-sm">Notifications</a>
          <Separator straight={true} className="bg-[rgb(54,54,54)]" />

          <a className="flex justify-center p-3 text-sm">
            Settings and privacy
          </a>
          <Separator straight={true} className="bg-[rgb(54,54,54)]" />

          <a className="flex justify-center p-3 text-sm">Supervision</a>
          <Separator straight={true} className="bg-[rgb(54,54,54)]" />

          <a className="flex justify-center p-3 text-sm">Login Activity</a>
          <Separator straight={true} className="bg-[rgb(54,54,54)]" />

          <a className="flex justify-center p-3 text-sm">Log Out</a>
          <Separator straight={true} className="bg-[rgb(54,54,54)]" />

          <a className="flex justify-center p-3 text-sm">Cancel</a>
        </div>
      </div>
    </div>
  );
}
