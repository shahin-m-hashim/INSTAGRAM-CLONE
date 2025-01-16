import useStore from "store/_store";
import CloseIcon from "icons/CloseIcon";
import Separator from "components/Separator";
import Button from "components/wrappers/Button";
import Accounts from "components/lists/Accounts";
import SearchField from "components/fields/SearchField";

export default function NewMessageWidget() {
  const setSecondaryWidget = useStore((state) => state.setSecondaryWidget);

  return (
    <div className="absolute inset-0 z-10 backdrop-brightness-[0.4] pointer-events-auto">
      <div className="flex items-center justify-center text-primary size-full">
        <div className="flex text-primary flex-col bg-widget w-[300px] xs:w-[500px] rounded-lg">
          <div className="relative flex items-center justify-center p-3 rounded-t-lg">
            <h1 className="font-semibold">New Message</h1>

            <div className="absolute -top-1 -right-2">
              <button
                type="button"
                onClick={() => setSecondaryWidget(null)}
                className="flex items-center justify-end p-5"
              >
                <CloseIcon className="text-primary size-5" />
              </button>
            </div>
          </div>

          <Separator straight={true} />

          <div className="h-[320px] flex flex-col rounded-b-lg">
            <div className="flex items-center w-full px-4">
              <span>To: </span>
              <SearchField className="bg-transparent" showIcon={false} />
            </div>
            <Separator straight={true} />

            <div className="flex-1 w-full p-4 overflow-auto">
              <Accounts specialCase={true} type="input" />
            </div>

            <div className="w-full p-4">
              <Button>Chat</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
