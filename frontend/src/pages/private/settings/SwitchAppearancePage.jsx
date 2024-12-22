import ThemeSwitcher from "components/ThemeSwitcher";

export default function SwitchAppearancePage() {
  return (
    <div className="flex flex-col justify-between max-w-[650px] p-4 w-full">
      <div className="px-5 py-6 border rounded-2xl border-primary">
        <div className="flex items-center justify-between">
          <h1>Dark Mode</h1>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
