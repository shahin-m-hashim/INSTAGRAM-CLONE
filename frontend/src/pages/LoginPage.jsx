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
      <section className="text-white bg-black scrollbar-dark">
        <main className="overflow-auto h-screen min-w-[320px]">
          <div className="flex items-center justify-center px-8 my-5 md:my-10">
            <PhoneFrame />
            <div className="flex flex-col gap-14 xs:gap-2 w-[300px] md:w-[350px]">
              <div className="w-full xs:p-8 xs:border flex flex-col justify-center border-[rgb(54,54,54)]">
                <div className="flex flex-col items-center justify-center mt-6 mb-12">
                  <InstagramTextIcon className="text-white transform scale-[1.6]" />
                </div>

                <LoginForm />
              </div>
              <SignupCard />
              <LinksCard />
            </div>
          </div>

          <div className="items-center justify-center hidden px-8 my-10 md:flex">
            <Footer />
          </div>
        </main>
      </section>
    </SplashScreen>
  );
}
