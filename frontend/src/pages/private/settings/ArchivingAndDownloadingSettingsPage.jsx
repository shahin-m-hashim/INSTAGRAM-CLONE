import Footer from "components/Footer";
import ToggleSwitch from "components/ToggleSwitch";

export default function ArchivingAndDownloadingSettingsPage() {
  return (
    <div className="flex flex-col justify-between max-w-[650px] p-4 w-full">
      <div className="flex flex-col w-full gap-4">
        <div className="hidden mb-5 mt-14 md:block">
          <h1 className="text-xl font-bold">Archiving and downloading</h1>
        </div>

        <h2 className="my-2 font-bold">Saving to archive</h2>

        <div className="rounded-2xl border border-tertiary px-5 py-6">
          <div className="flex flex-col gap-2">
            <h1>Save story to archive</h1>
            <div className="flex items-center justify-between">
              <p className="text-xs  text-tertiary">
                Automatically save photos and videos to your archive so you
                don&apos;t have to save them to your phone. Only you can see
                your archive.
              </p>
              <ToggleSwitch />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden w-full px-5 my-5 md:flex md:my-10">
        <Footer />
      </div>
    </div>
  );
}
