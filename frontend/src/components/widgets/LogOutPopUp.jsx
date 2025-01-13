import useStore from "store/_store";

export default function LogOutPopUp() {
  const setIsAuthenticated = useStore((state) => state.setIsAuthenticated);
  const setSecondaryWidget = useStore((state) => state.setSecondaryWidget);

  return (
    <div className="absolute inset-0 backdrop-brightness-50 z-[100] pointer-events-auto">
      <div className="flex items-center justify-center text-primary size-full">
        <div className="flex text-primary flex-col bg-widget w-[300px] xs:w-[400px] rounded-lg">
          <div className="flex flex-col">
            <div className="px-10 py-5 text-center">
              <h1 className="mb-2.5 text-xl">Log Out?</h1>
              <p className="text-sm text-tertiary">
                Are you sure that you want to log out of your account?
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsAuthenticated(false)}
              className="p-2.5 font-semibold border-y-2 border-y-tertiary hover:bg-widget-hover"
            >
              Log Out
            </button>

            <button
              type="button"
              className="p-2.5 font-semibold rounded-b-lg hover:bg-widget-hover"
              onClick={() => setSecondaryWidget(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
