import Footer from "components/Footer";

export default function BlockedAccountsSettingsPage() {
  return (
    <div className="flex flex-col justify-between max-w-[650px] p-4 w-full">
      <div className="flex flex-col flex-1 w-full gap-6">
        <div className="hidden mb-5 mt-14 md:block">
          <h1 className="text-xl font-bold">Blocked accounts</h1>
        </div>

        <h2 className=" text-tertiary">
          You can block people anytime from their profiles.
        </h2>
        <div className="flex items-center justify-center size-full">
          <span className="text-sm  text-tertiary">
            You haven&apos;t blocked anyone.
          </span>
        </div>
      </div>

      <div className="hidden w-full px-5 my-5 md:flex md:my-10">
        <Footer />
      </div>
    </div>
  );
}
