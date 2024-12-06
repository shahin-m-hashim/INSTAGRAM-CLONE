import Image from "components/Image";
import Footer from "components/Footer";
import LinksCard from "components/cards/LinksCard";
import LoginCard from "components/cards/LoginCard";
import SplashScreen from "components/wrappers/SplashScreen";
import EmailConfirmationForm from "components/forms/EmailConfirmationForm";

export default function EmailConfirmationPage() {
  return (
    <SplashScreen>
      <section className="text-white bg-black scrollbar-dark">
        <main className="overflow-auto h-screen min-w-[320px]">
          <div className="flex items-center justify-center px-8 my-10">
            <div className="w-[300px] md:w-[350px] text-center">
              <div className="w-full flex flex-col items-center xs:border border-[rgb(54,54,54)] gap-5 p-5">
                <div className="flex flex-col items-center justify-center gap-3">
                  <Image className="w-24 h-20" src="images/email_dark.webp" />
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
          </div>

          <div className="items-center justify-center hidden px-8 my-12 md:flex">
            <Footer />
          </div>
        </main>
      </section>
    </SplashScreen>
  );
}
