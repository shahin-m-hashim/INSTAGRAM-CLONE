import DropDownArrowIcon from "icons/DropDownArrowIcon";

export default function AccountTypeAndToolsSettingsTab() {
  return (
    <div className="flex flex-col gap-4 max-w-[650px] p-4 my-4 md:my-14 size-full">
      <h1 className="mb-6 text-xl font-bold">Account type and tools</h1>
      <div className="flex flex-col gap-6">
        <h1 className="font-bold">Account Type</h1>
        <div className="flex flex-col gap-6 px-4 py-5 rounded-2xl border border-[rgb(54,54,54,0.7)]">
          <a className="flex items-center justify-between gap-4">
            <span className="text-sm">Switch to professional account</span>
            <div className="transform -rotate-90">
              <DropDownArrowIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
