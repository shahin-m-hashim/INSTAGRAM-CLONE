import SettingsContent from "components/SettingsContent";

export default function SettingsSidebar({ activeTab, setActiveTab }) {
  return (
    <div className="w-[310px] xl:w-[330px]">
      <SettingsContent activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
