import Image from "components/Image";
import NavigateBackBtn from "components/NavigateBackBtn";

export default function HiddenFeaturesSettingsPage() {
  return (
    <>
      <div className="items-center hidden gap-4 mb-5 -ml-2 md:flex">
        <NavigateBackBtn />
        <h1 className="text-xl font-bold">Features you can&apos;t use</h1>
      </div>

      <div className="flex items-center justify-between gap-2 p-4 rounded-xl bg-tertiary">
        <div className="flex items-center flex-1 gap-2 md:gap-5">
          <Image
            alt="tick"
            src="images/tick.webp"
            className="hidden xs:block size-14"
          />
          <div className="flex flex-col gap-2">
            <p className="font-bold">You can use all the features right now.</p>
            <p className="text-tertiary">
              Thank you for following our{" "}
              <span className="text-link-primary hover:text-link-primary-hover">
                Community Standards
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
