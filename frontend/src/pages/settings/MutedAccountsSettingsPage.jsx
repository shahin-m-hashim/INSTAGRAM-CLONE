import Footer from "components/Footer";

export default function MutedAccountsSettingsPage() {
  return (
    <div className="flex flex-col justify-between max-w-[650px] p-4 w-full">
      <div className="flex flex-col flex-1 w-full gap-6">
        <div className="hidden mt-14 md:block">
          <h1 className="text-xl font-bold">Muted accounts</h1>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 w-full">
          <span className="text-sm  text-secondary">
            You haven&apos;t muted anyone.
          </span>
        </div>
      </div>

      <div className="hidden w-full px-5 my-5 md:flex md:my-10">
        <Footer />
      </div>
    </div>
  );
}
