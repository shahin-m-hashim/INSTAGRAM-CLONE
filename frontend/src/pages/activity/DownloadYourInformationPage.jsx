import Button from "components/wrappers/Button";

export default function DownloadYourInformationPage() {
  return (
    <div className="flex flex-col flex-1 h-full gap-4 p-6 md:p-10 lg:px-32">
      <h1 className="text-2xl font-semibold">
        Download your information in Accounts Center
      </h1>
      <p className="text-sm text-[rgb(138,138,138)]">
        From now on, visit Accounts Center to manage this setting.{" "}
        <a className="text-white hover:underline">Learn more</a> about your
        settings in Accounts Center.
      </p>
      <Button className="w-24">Continue</Button>
    </div>
  );
}
