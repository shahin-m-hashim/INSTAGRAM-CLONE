export default function Separator() {
  return (
    <div className="flex items-center justify-center w-full space-x-4">
      <div className="flex-1 flex-grow h-[2px] bg-[rgb(38,38,38)]"></div>
      <span className="text-xs text-[rgb(168,168,168)] font-semibold">OR</span>
      <div className="flex-1 flex-grow h-[2px] bg-[rgb(38,38,38)]"></div>
    </div>
  );
}
