import { useState } from "react";
import Separator from "components/Separator";
import BackArrowIcon from "icons/BackArrowIcon";
import DropDownArrowIcon from "icons/DropDownArrowIcon";
import NavigateBackBtn from "components/NavigateBackBtn";

const Reports = ({ setActiveTab }) => {
  return (
    <div className="flex flex-col gap-4 text-center md:mt-14">
      <div className="flex items-center gap-2 mb-5">
        <button
          type="button"
          onClick={() => setActiveTab(null)}
          className="transform "
        >
          <BackArrowIcon className="size-6" />
        </button>
        <h1 className="text-2xl font-semibold">Reports</h1>
      </div>

      <p className="text-xl">You haven&apos;t reported anything</p>
      <p className="text-sm text-[rgb(138,138,138)]">
        Read our Community Standards to learn what we allow on Instagram and how
        you can help us report and remove what we don&apos;t.
      </p>
      <span className="text-sm">See Community Standards</span>
    </div>
  );
};

const SafetyNotices = ({ setActiveTab }) => {
  return (
    <div className="flex flex-col gap-4 text-center md:mt-14">
      <div className="flex items-center gap-2 mb-5">
        <button
          type="button"
          onClick={() => setActiveTab(null)}
          className="transform rotate-90"
        >
          <DropDownArrowIcon className="size-6" />
        </button>
        <h1 className="text-2xl font-semibold">Safety Notices</h1>
      </div>
      <p className="text-xl">
        You don&apos;t have any safety notices available now
      </p>
    </div>
  );
};

const Violations = ({ setActiveTab }) => {
  return (
    <div className="flex flex-col gap-4 text-center md:mt-14">
      <div className="flex items-center gap-2 mb-5">
        <button
          type="button"
          onClick={() => setActiveTab(null)}
          className="transform rotate-90"
        >
          <DropDownArrowIcon className="size-6" />
        </button>
        <h1 className="text-2xl font-semibold">Reports</h1>
      </div>
      <p className="text-xl">You don&apos;t have any violations</p>
      <p className="text-sm text-[rgb(138,138,138)]">
        Read our Community Standards to learn what we allow on Instagram and how
        you can help us report and remove what we don&apos;t.
      </p>
      <span className="text-sm">See Community Standards</span>
    </div>
  );
};

export default function SupportRequestsPage() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <>
      {activeTab === "reports" && <Reports setActiveTab={setActiveTab} />}

      {activeTab === "violations" && <Violations setActiveTab={setActiveTab} />}

      {activeTab === "safetyNotices" && (
        <SafetyNotices setActiveTab={setActiveTab} />
      )}

      {!activeTab && (
        <div className="flex flex-col gap-4 md:mt-14">
          <div className="items-center hidden gap-4 mb-5 -ml-2 md:flex">
            <NavigateBackBtn />
            <h1 className="text-2xl font-semibold">Support Requests</h1>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="flex items-center justify-between text-left"
              onClick={() => setActiveTab("reports")}
            >
              <div className="flex flex-col items-start gap-2">
                <h2>Reports</h2>
                <p className="text-sm text-[rgb(138,138,138)]">
                  These are reports you&apos;ve submitted.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-blue-500 rounded-full size-2" />
                <span className="text-[rgb(138,138,138)]">0</span>
                <div className="transform -rotate-90">
                  <DropDownArrowIcon className="text-[rgb(138,138,138)]" />
                </div>
              </div>
            </button>

            <Separator straight={true} />
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="flex items-center justify-between text-left"
              onClick={() => setActiveTab("safetyNotices")}
            >
              <div className="flex flex-col items-start gap-2">
                <h2>Safety Notices</h2>
                <p className="text-sm text-[rgb(138,138,138)]">
                  Find resources to help you recover from a difficult
                  experience.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-500 rounded-full size-2" />
                <span className="text-[rgb(138,138,138)]">0</span>

                <div className="transform -rotate-90">
                  <DropDownArrowIcon className="text-[rgb(138,138,138)]" />
                </div>
              </div>
            </button>

            <Separator straight={true} />
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setActiveTab("violations")}
              className="flex items-center justify-between"
            >
              <div className="flex flex-col items-start gap-2 text-left">
                <h2>Violations</h2>
                <p className="text-sm text-[rgb(138,138,138)]">
                  These are posts you&apos;ve shared that go against our
                  guidelines.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-blue-500 rounded-full size-2" />
                <span className="text-[rgb(138,138,138)]">0</span>

                <div className="transform -rotate-90">
                  <DropDownArrowIcon className="text-[rgb(138,138,138)]" />
                </div>
              </div>
            </button>

            <Separator straight={true} />
          </div>
        </div>
      )}
    </>
  );
}
