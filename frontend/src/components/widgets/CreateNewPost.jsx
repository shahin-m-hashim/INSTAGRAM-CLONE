import Button from "components/wrappers/Button";
import CloseIcon from "icons/CloseIcon";
import NewPostIcon from "icons/NewPostIcon";

export default function CreateNewPost() {
  return (
    <div className="absolute inset-0 z-10 backdrop-brightness-[0.4]">
      <div className="flex items-center justify-center size-full">
        <div className="flex flex-col w-[500px]">
          <div className="flex items-center justify-center p-3 bg-black">
            <h1 className="font-semibold text-white">Create new post</h1>
          </div>
          <div className="bg-[rgb(38,38,38)] h-[500px] flex items-center justify-center p-5">
            <div className="flex flex-col items-center gap-6">
              <NewPostIcon />
              <h2 className="text-xl text-white">
                Drag photos and videos here
              </h2>
              <Button className="p-3">Select from computer</Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <button className="flex items-center justify-end p-5">
            <CloseIcon className="text-white size-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
