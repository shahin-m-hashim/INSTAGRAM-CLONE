import { cn } from "utils/cn";
import useStore from "store/_store";
import { Link } from "react-router-dom";
import StoriesList from "components/lists/Stories";

export default function MessengerContent() {
  const showMessage = useStore((state) => state.messenger.showMessage);

  return (
    <>
      <div className="px-4 my-5">
        <StoriesList />
      </div>

      <div className="flex items-center justify-between px-4">
        <div>
          <h1 className="font-bold">Messages</h1>
        </div>
        <div>
          <a className="text-sm font-semibold text-link-primary hover:text-link-primary-hover">
            Requests
          </a>
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col flex-1 ",
          showMessage ? "" : "items-center justify-center"
        )}
      >
        {showMessage ? (
          <Link to="/direct/virat.kohli" type="button">
            <div className="flex items-center gap-3 px-4 py-2 bg-widget hover:bg-widget-hover">
              <img
                className="rounded-full size-14"
                src="images/users/virat.kohli.webp"
              />
              <div className="flex flex-col">
                <h1>Virat Kohli</h1>
                {/* <p className="text-sm text-tertiary">Hello...</p> */}
              </div>
            </div>
          </Link>
        ) : (
          <p className="text-sm font-semibold text-tertiary">
            No messages found.
          </p>
        )}
      </div>
    </>
  );
}
