import useStore from "store/_store";
import Separator from "components/Separator";
import TransitionLink from "components/TransitionLink";

export default function SettingsWidget() {
  const setPrimaryWidget = useStore((state) => state.setPrimaryWidget);
  const setSecondaryWidget = useStore((state) => state.setSecondaryWidget);

  return (
    <div className="absolute inset-0 z-[100] pointer-events-auto backdrop-brightness-50">
      <div className="flex items-center justify-center size-full">
        <div className="flex flex-col rounded-lg bg-widget shadow-primary w-[400px]">
          <TransitionLink
            to="/settings/website_permissions"
            className="flex justify-center p-3 text-sm rounded-t-lg hover:bg-widget-hover"
          >
            Apps and Websites
          </TransitionLink>

          <Separator straight={true} />

          <a className="flex justify-center p-3 text-sm hover:bg-widget-hover">
            QR Code
          </a>

          <Separator straight={true} />

          <TransitionLink
            to="/settings/notifications"
            className="flex justify-center p-3 text-sm hover:bg-widget-hover"
          >
            Notifications
          </TransitionLink>

          <Separator straight={true} />

          <TransitionLink
            to="/settings/edit_profile"
            className="flex justify-center p-3 text-sm hover:bg-widget-hover"
          >
            Settings and privacy
          </TransitionLink>

          <Separator straight={true} />

          <a className="flex justify-center p-3 text-sm hover:bg-widget-hover">
            Supervision
          </a>

          <Separator straight={true} />

          <a className="flex justify-center p-3 text-sm hover:bg-widget-hover">
            Login Activity
          </a>
          <Separator straight={true} />

          <button
            type="button"
            className="p-3 text-sm hover:bg-widget-hover"
            onClick={() => {
              setPrimaryWidget(null);
              setSecondaryWidget("logout");
            }}
          >
            Log Out
          </button>

          <Separator straight={true} />

          <button
            type="button"
            onClick={() => setPrimaryWidget(null)}
            className="flex justify-center p-3 text-sm rounded-b-lg hover:bg-widget-hover"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
