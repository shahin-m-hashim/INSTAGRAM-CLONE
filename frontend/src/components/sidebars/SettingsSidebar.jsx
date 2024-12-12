import SettingsContent from "components/SettingsContent";

export default function SettingsSidebar({ activeTab, setActiveTab }) {
  return (
    <div className="w-full xs:w-[486px] md:w-[310px] xl:w-[330px] border-r border-r-[rgb(54,54,54,0.7)]">
      <SettingsContent activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
