import { useState } from "react";
import Footer from "components/Footer";
import Separator from "components/Separator";
import DropDownArrowIcon from "icons/DropDownArrowIcon";

const PrivacyAndSecurityTab = () => {
  return (
    <div className="flex flex-col gap-10 my-14">
      <h1 className="text-xl font-semibold">Privacy and Security Help</h1>

      <div className="flex flex-col gap-6">
        <div>
          <h2 className="mb-3 font-bold">Managing your account</h2>
          <Separator straight={true} />
        </div>

        <span>Age requirements</span>
        <span>Account privacy</span>
        <span>Location sharing</span>
        <span>Two factor authentication</span>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h2 className="mb-3 font-bold">Customizing your experience</h2>
          <Separator straight={true} />
        </div>

        <span>Blocking accounts</span>
        <span>Removing followers</span>
        <span>Managing photos of you</span>
        <span>Filtering comments</span>
        <span>Turning comments off</span>
        <span>Deleting comments</span>
        <span>Choosing who can see your story</span>
        <span>Choosing who can reply to your story</span>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h2 className="mb-3 font-bold">
            Reporting content you don&apos;t like
          </h2>
          <Separator straight={true} />
        </div>

        <span>Reporting comments</span>
        <span>Reporting accounts or posts</span>
        <span>Reporting intimate images</span>
        <span>Removing contents from your explore</span>
        <span>Sensitive content screens</span>
      </div>
    </div>
  );
};

const Reports = () => {
  return (
    <div className="flex flex-col gap-4 text-center mt-14">
      <h1 className="text-2xl">You haven&apos;t reported anything</h1>
      <p className="text-sm text-[rgb(138,138,138)]">
        Read our Community Standards to learn what we allow on Instagram and how
        you can help us report and remove what we don&apos;t.
      </p>
      <span>See Community Standards</span>
    </div>
  );
};

const SafetyNotices = () => {
  return (
    <div className="flex flex-col gap-4 text-center mt-14">
      <h1 className="text-2xl">
        You don&apos;t have any safety notices available now
      </h1>
    </div>
  );
};

const Violations = () => {
  return (
    <div className="flex flex-col gap-4 text-center mt-14">
      <h1 className="text-2xl">You don&apos;t have any violations</h1>
      <p className="text-sm text-[rgb(138,138,138)]">
        Read our Community Standards to learn what we allow on Instagram and how
        you can help us report and remove what we don&apos;t.
      </p>
      <span>See Community Standards</span>
    </div>
  );
};

const SupportRequestsTab = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <>
      {activeTab === "reports" && <Reports />}
      {activeTab === "violations" && <Violations />}
      {activeTab === "safetyNotices" && <SafetyNotices />}

      {!activeTab && (
        <div className="flex flex-col gap-4 my-14">
          <h1 className="mb-6 text-xl font-semibold">Support Requests</h1>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="flex items-center justify-between"
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
              className="flex items-center justify-between"
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
              <div className="flex flex-col items-start gap-2">
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
};

export default function HelpSettingsPage() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <>
      <div className="flex flex-col justify-between p-4 max-w-[600px] w-full">
        {activeTab ? (
          <>
            {activeTab === "privacyAndSecurity" ? (
              <PrivacyAndSecurityTab setActiveTab={setActiveTab} />
            ) : (
              <SupportRequestsTab setActiveTab={setActiveTab} />
            )}
          </>
        ) : (
          <div className="flex flex-col w-full gap-6">
            <div className="hidden mb-5 mt-14 md:block">
              <h1 className="text-xl font-bold">Help</h1>
            </div>

            <button
              type="button"
              className="flex items-center justify-between gap-4"
            >
              <span>Help Center</span>
              <div className="transform -rotate-90">
                <DropDownArrowIcon />
              </div>
            </button>

            <button
              type="button"
              className="flex items-center justify-between gap-4"
            >
              <span>Account Status</span>
              <div className="transform -rotate-90">
                <DropDownArrowIcon />
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("privacyAndSecurity")}
              className="flex items-center justify-between gap-4"
            >
              <span>Privacy and Security Help</span>
              <div className="transform -rotate-90">
                <DropDownArrowIcon />
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("supportRequests")}
              className="flex items-center justify-between gap-4"
            >
              <span>Support Requests</span>
              <div className="transform -rotate-90">
                <DropDownArrowIcon />
              </div>
            </button>
          </div>
        )}

        <div className="hidden w-full px-5 my-5 md:flex md:my-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
