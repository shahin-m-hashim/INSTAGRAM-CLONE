import NavigateBackBtn from "components/NavigateBackBtn";

export default function ViolationsSettingsPage() {
  return (
    <>
      <div className="items-center hidden gap-2 mb-5 md:flex">
        <NavigateBackBtn />
        <h1 className="text-2xl font-semibold">Reports</h1>
      </div>
      <p className="text-xl">You don&apos;t have any violations</p>
      <p className="text-sm text-[rgb(138,138,138)]">
        Read our Community Standards to learn what we allow on Instagram and how
        you can help us report and remove what we don&apos;t.
      </p>
      <span className="text-sm">See Community Standards</span>
    </>
  );
}
