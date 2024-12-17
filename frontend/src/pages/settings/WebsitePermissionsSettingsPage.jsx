import { cn } from "utils/cn";
import { useState } from "react";
import Footer from "components/Footer";
import Separator from "components/Separator";
import { firstCharToUpperCase } from "utils/casing";

const Active = () => (
  <div className="flex flex-col gap-6">
    <p className="text-sm">
      These are apps and websites you&apos;ve connected to your Instagram
      account. They can access non-public information that you choose to share
      with them.
    </p>
    <p className="text-[rgb(138,138,138)] text-xs">
      You have not authorized any applications to access your Instagram account.
    </p>
  </div>
);

const Expired = () => (
  <div className="flex flex-col gap-6">
    <p className="text-sm">
      These are apps and websites you&apos;ve connected to your Instagram
      account that you may not have used in the last 90 days. They&apos;re no
      longer able to access your non-public information, but may still have the
      information you shared while they were active. &quot;Non-public&quot;
      means information that an app can only access if you choose to share it
      when you log in with your Instagram account (like your email address).
    </p>
    <p className="text-[rgb(138,138,138)] text-xs">
      You have no expired applications that had access to your Instagram
      account.
    </p>
  </div>
);

const Removed = () => (
  <div className="flex flex-col gap-6">
    <p className="text-sm">
      These are apps and websites that are no longer connected to your Instagram
      account. They can&apos;t access your non-public information anymore, but
      may still have the information you shared while they were active.
      &quot;Non-public&quot; means information that an app can only access if
      you choose to share it when you log in with your Instagram account (like
      your email address). You can ask an app to delete your information. To do
      it, review their Privacy Policy for details and contact information. If
      you contact an app, they may need your User ID.
    </p>
    <p className="text-[rgb(138,138,138)] text-xs">
      You have no removed applications that had access to your Instagram
      account.
    </p>
  </div>
);

export default function WebsitePermissionsSettingsPage() {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <>
      <div className="flex flex-col justify-between p-4 max-w-[600px] w-full">
        <div className="flex flex-col w-full gap-6">
          <div className="hidden mb-5 mt-14 md:block">
            <h1 className="text-xl font-bold">Website Permissions</h1>
          </div>

          <div className="flex items-center w-full border-b-2 border-b-[rgb(54,54,54,0.7)]">
            {["active", "expired", "removed"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "relative flex justify-center flex-1 transition-opacity duration-300 ease-in",
                  activeTab === tab ? "opacity-100" : "opacity-50"
                )}
              >
                <h1
                  className={cn(
                    "mb-2 text-sm transition-all duration-300 ease-in",
                    activeTab === tab ? "text-white" : "text-[rgb(138,138,138)]"
                  )}
                >
                  {firstCharToUpperCase(tab)}
                </h1>
                {activeTab === tab && (
                  <div className="absolute inset-x-0 -bottom-[2px]">
                    <Separator straight={true} className="h-[2px] bg-white" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <>
            {activeTab === "active" ? (
              <Active />
            ) : activeTab === "expired" ? (
              <Expired />
            ) : (
              <Removed />
            )}
          </>
        </div>

        <div className="hidden w-full px-5 my-5 md:flex md:my-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
