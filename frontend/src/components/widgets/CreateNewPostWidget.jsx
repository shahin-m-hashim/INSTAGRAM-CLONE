import useStore from "store/_store";
import CloseIcon from "icons/CloseIcon";
import NewPostIcon from "icons/NewPostIcon";
import Button from "components/wrappers/Button";

export default function CreateNewPostWidget() {
  const setSecondaryWidget = useStore((state) => state.setSecondaryWidget);

  return (
    <div className="absolute inset-0 z-20 backdrop-brightness-[0.4] pointer-events-none">
      <div className="flex items-center justify-center text-primary size-full">
        <div className="flex text-primary flex-col shadow-primary bg-widget w-[500px] pointer-events-auto rounded-lg">
          <div className="relative flex items-center justify-center p-3 border-b-2 rounded-t-lg bg-tertiary border-tertiary">
            <h1 className="font-semibold">Create new post</h1>

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

          <div className="h-[500px] flex items-center rounded-b-lg justify-center p-5">
            <div className="flex flex-col items-center gap-6">
              <NewPostIcon />
              <h2 className="text-xl">Drag photos and videos here</h2>
              <Button className="p-3">Select from computer</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
