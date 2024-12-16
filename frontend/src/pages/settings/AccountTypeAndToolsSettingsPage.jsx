import Footer from "components/Footer";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

export default function AccountTypeAndToolsSettingsPage() {
  return (
    <div className="flex flex-col justify-between max-w-[650px] p-4 w-full">
      <div className="flex flex-col gap-4">
        <div className="hidden mb-6 mt-14 md:block">
          <h1 className="text-xl font-bold ">Account type and tools</h1>
        </div>

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

      <div className="hidden w-full px-5 my-5 md:flex md:my-10">
        <Footer />
      </div>
    </div>
  );
}
