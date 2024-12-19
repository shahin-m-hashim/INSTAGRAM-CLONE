import Separator from "components/Separator";

export default function SettingsWidget() {
  return (
    <div className="absolute inset-0 z-10 backdrop-brightness-[0.4] pointer-events-auto">
      <div className="flex items-center justify-center bg-widget size-full">
        <div className="flex flex-col rounded-lg w-[400px]">
          <a className="flex justify-center p-3 text-sm bg-widget-hover">
            Apps and Websites
          </a>
          <Separator straight={true} />

          <a className="flex justify-center p-3 text-sm bg-widget-hover">
            QR Code
          </a>
          <Separator straight={true} />

          <a className="flex justify-center p-3 text-sm bg-widget-hover">
            Notifications
          </a>
          <Separator straight={true} />

          <a className="flex justify-center p-3 text-sm bg-widget-hover">
            Settings and privacy
          </a>
          <Separator straight={true} />

          <a className="flex justify-center p-3 text-sm bg-widget-hover">
            Supervision
          </a>
          <Separator straight={true} />

          <a className="flex justify-center p-3 text-sm bg-widget-hover">
            Login Activity
          </a>
          <Separator straight={true} />

          <a className="flex justify-center p-3 text-sm bg-widget-hover">
            Log Out
          </a>
          <Separator straight={true} />

          <a className="flex justify-center p-3 text-sm bg-widget-hover">
            Cancel
          </a>
        </div>
      </div>
    </div>
  );
}
