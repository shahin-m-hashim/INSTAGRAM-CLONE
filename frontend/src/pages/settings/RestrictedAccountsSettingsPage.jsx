import Footer from "components/Footer";

export default function RestrictedAccountsSettingsPage() {
  return (
    <div className="flex flex-col justify-between max-w-[600px] p-4 w-full">
      <div className="flex flex-col flex-1 w-full gap-10">
        <div className="hidden mt-14 md:block">
          <h1 className="text-xl font-bold">Restricted accounts</h1>
        </div>

        <p className=" text-secondary">
          Protect yourself from unwanted interactions without having to block or
          unfollow people you know. You can restrict them anytime from their
          profiles. <a className="text-white">Learn how it works</a>
        </p>

        <div className="flex flex-col items-center justify-center flex-1 w-full">
          <span className="text-sm  text-secondary">
            You haven&apos;t restricted anyone.
          </span>
        </div>
      </div>

      <div className="hidden w-full px-5 my-5 md:flex md:my-10">
        <Footer />
      </div>
    </div>
  );
}
