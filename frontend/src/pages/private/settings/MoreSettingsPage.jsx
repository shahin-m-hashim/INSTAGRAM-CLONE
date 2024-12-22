import TiltedArrowIcon from "icons/TiltedArrowIcon";

export default function MoreSettingsPage() {
  return (
    <div className="flex flex-col justify-between max-w-[650px] p-4 w-full">
      <div className="px-2 py-4 border rounded-2xl border-primary">
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-2">
            <span>Press</span>
            <TiltedArrowIcon />
          </div>

          <div className="flex items-center justify-between px-4 py-2">
            <span>API</span>
            <TiltedArrowIcon />
          </div>

          <div className="flex items-center justify-between px-4 py-2">
            <span>Jobs</span>
            <TiltedArrowIcon />
          </div>

          <div className="flex items-center justify-between px-4 py-2">
            <span>About</span>
            <TiltedArrowIcon />
          </div>

          <div className="flex items-center justify-between px-4 py-2">
            <span>Privacy Policy</span>
            <TiltedArrowIcon />
          </div>

          <div className="flex items-center justify-between px-4 py-2">
            <span>Terns</span>
            <TiltedArrowIcon />
          </div>

          <div className="flex items-center justify-between px-4 py-2">
            <span>Locations</span>
            <TiltedArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
