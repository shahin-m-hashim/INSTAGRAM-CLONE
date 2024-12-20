import { cn } from "utils/cn";
import { useState } from "react";
import Footer from "components/Footer";
import LinksCard from "components/cards/LinksCard";
import LoginCard from "components/cards/LoginCard";
import SignupContent from "components/contents/SignupContent";
import BirthdayContent from "components/contents/BirthdayContent";
import EmailConfirmationContent from "components/contents/EmailConfirmationContent";

export default function SignUpPage() {
  const [activeContent, setActiveContent] = useState("signup");

  return (
    <main className="overflow-auto h-screen min-w-[320px]">
      <div className="flex items-center justify-center my-10 xs:px-8">
        <div className="flex flex-col gap-2 xs:w-[340px] ">
          <div
            className={cn(
              activeContent !== "signup" ? "px-4" : "px-10",
              "items-center text-center gap-4 xs:py-8 xs:border border-primary flex flex-col justify-center "
            )}
          >
            {activeContent === "birthday" ? (
              <BirthdayContent />
            ) : activeContent === "email_confirmation" ? (
              <EmailConfirmationContent />
            ) : (
              <SignupContent />
            )}
          </div>

          <LoginCard />

          <LinksCard />
        </div>
      </div>

      <div className="items-center justify-center hidden px-8 my-10 md:flex">
        <Footer />
      </div>
    </main>
  );
}
