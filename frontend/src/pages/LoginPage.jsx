import Footer from "components/Footer";
import PhoneFrame from "components/PhoneFrame";
import LoginForm from "components/forms/LoginForm";
import LinksCard from "components/cards/LinksCard";
import SignupCard from "components/cards/SignupCard";
import InstagramTextIcon from "icons/InstagramTextIcon";
import SplashScreen from "components/wrappers/SplashScreen";

export default function LoginPage() {
  return (
    <SplashScreen>
      <section className="flex flex-col min-h-screen gap-12 p-8 text-white bg-black lg:gap-2">
        <main className="flex items-center justify-center">
          <PhoneFrame />

          <div className="flex  flex-col gap-14 md:gap-3 w-[300px] md:w-[350px]">
            <div className="w-full md:p-10 md:border flex flex-col justify-center md:border-[rgb(54,54,54)]">
              <div className="flex flex-col items-center justify-center mt-6 mb-12">
                <InstagramTextIcon className="text-white transform scale-[1.6]" />
              </div>

              <LoginForm />
            </div>
            <SignupCard />
            <LinksCard />
          </div>
        </main>
        <Footer />
      </section>
    </SplashScreen>
  );
}
