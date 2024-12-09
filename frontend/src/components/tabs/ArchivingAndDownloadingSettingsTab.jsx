import ToggleSwitch from "components/ToggleSwitch";

export default function ArchivingAndDownloadingSettingsTab() {
  return (
    <div className="flex flex-col gap-4 max-w-[650px] p-4 my-4 md:my-14 size-full">
      <h1 className="mb-6 text-xl font-bold">Archiving and downloading</h1>

      <h2 className="my-2 font-bold">Saving to archive</h2>

      <div className="rounded-2xl border border-[rgb(54,54,54,0.7)] px-5 py-6">
        <div className="flex flex-col gap-2">
          <h1>Save story to archive</h1>
          <div className="flex items-center justify-between">
            <p className="text-xs text-[rgb(168,168,168)]">
              Automatically save photos and videos to your archive so you
              don&apos;t have to save them to your phone. Only you can see your
              archive.
            </p>
            <ToggleSwitch />
          </div>
        </div>
      </div>
    </div>
  );
}
