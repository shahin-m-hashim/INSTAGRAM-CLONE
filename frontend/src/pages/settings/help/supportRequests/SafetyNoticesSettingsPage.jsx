import NavigateBackBtn from "components/NavigateBackBtn";

export default function SafetyNoticesSettingsPage() {
  return (
    <>
      <div className="items-center hidden gap-2 mb-5 md:flex">
        <NavigateBackBtn />
        <h1 className="text-2xl font-semibold">Safety Notices</h1>
      </div>
      <p className="text-xl">
        You don&apos;t have any safety notices available now
      </p>
    </>
  );
}
