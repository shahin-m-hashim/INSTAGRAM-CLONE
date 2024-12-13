import Footer from "components/Footer";
import EditProfileForm from "components/forms/EditProfileForm";

export default function EditProfilePage() {
  return (
    <div className="flex flex-col w-full md:max-w-[600px]">
      <div className="hidden px-4 mb-5 mt-14 md:block">
        <h1 className="text-xl font-bold">Edit Profile</h1>
      </div>

      <EditProfileForm />

      <div className="justify-center hidden w-full px-5 my-5 md:flex md:my-10">
        <Footer />
      </div>
    </div>
  );
}
