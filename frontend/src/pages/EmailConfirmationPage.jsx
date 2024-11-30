import Footer from "components/Footer";
import LinksCard from "components/cards/LinksCard";
import LoginCard from "components/cards/LoginCard";
import SplashScreen from "components/wrappers/SplashScreen";
import EmailConfirmationForm from "components/forms/EmailConfirmationForm";

export default function EmailConfirmationPage() {
  return (
    <SplashScreen>
      <section className="flex flex-col justify-center min-h-screen text-white bg-black lg:gap-2">
        <main className="flex items-center justify-center h-screen md:h-auto">
          <div className="w-[300px] md:w-[350px] text-center">
            <div className="w-full flex flex-col items-center md:border md:border-[rgb(54,54,54)] gap-5 p-5">
              <div className="flex flex-col items-center justify-center gap-3">
                <img src="images/email_confirm_dark.webp" />
                <h1 className="text-sm font-semibold">
                  Enter Confirmation Code
                </h1>
                <div className="text-sm">
                  <span>
                    <span>Enter the confirmation code we sent to&nbsp;</span>
                    <span className="font-semibold">email@example.com</span>
                    <span>.&nbsp;</span>
                  </span>
                  <a className="text-[rgb(0,149,246)] hover:text-white font-semibold">
                    Resend Code?
                  </a>
                </div>
              </div>

              <EmailConfirmationForm />
            </div>
            <div className="my-3">
              <LoginCard />
            </div>
            <LinksCard />
          </div>
        </main>
        <div className="mt-10 mb-10 md:mb-0">
          <Footer />
        </div>
      </section>
    </SplashScreen>
  );
}
