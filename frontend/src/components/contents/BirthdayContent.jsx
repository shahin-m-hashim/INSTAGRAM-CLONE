import Image from "components/Image";
import BDayForm from "components/forms/BDayForm";

export default function BirthdayContent() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 mb-5">
        <Image
          imageId="cake"
          src="images/cake_dark.webp"
          className="h-24 w-36"
        />

        <h1>Add Your Birthday</h1>
        <div className="flex flex-col gap-2 text-sm">
          <p>This won&apos;t be a part of your public profile.</p>
          <a className="font-semibold text-link-primary hover:text-link-primary-hover">
            Why do I need to provide my birthday?
          </a>
        </div>
      </div>

      <BDayForm />

      <div className="w-full">
        <a className="font-semibold text-link-primary hover:text-link-primary-hover">
          Go Back
        </a>
      </div>
    </>
  );
}
