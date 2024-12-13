import SettingsContent from "components/contents/SettingsContent";

export default function SettingsSidebar({ activeTab, setActiveTab }) {
  return (
    <div className="flex flex-col gap-3 w-[310px] xl:w-[330px] border-r border-r-[rgb(54,54,54,0.7)]">
      <div className="px-5 mt-10 mb-5">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <SettingsContent activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
