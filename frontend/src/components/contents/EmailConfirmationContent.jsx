import Image from "components/Image";
import EmailConfirmationForm from "components/forms/EmailConfirmationForm";

export default function EmailConfirmationContent() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3">
        <Image
          imageId="email"
          className="w-24 h-20"
          src="images/email_dark.webp"
        />
        <h1 className="text-sm font-semibold">Enter Confirmation Code</h1>
        <div className="text-sm">
          <span>
            <span>Enter the confirmation code we sent to&nbsp;</span>
            <span className="font-semibold">email@example.com</span>
            <span>.&nbsp;</span>
          </span>
          <a className="font-semibold text-link-primary hover:text-link-primary-hover">
            Resend Code?
          </a>
        </div>
      </div>

      <EmailConfirmationForm />
    </>
  );
}
