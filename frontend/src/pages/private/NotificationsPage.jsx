import NotFoundPage from "pages/NotFoundPage";
import NotificationsContent from "components/contents/NotificationsContent";

export default function NotificationsPage() {
  return (
    <main className="bg-primary text-primary h-screen overflow-auto min-w-[320px] md:pt-0 pb-[50px] md:pb-0 md:pl-[80px] xl:pl-[250px] pt-[60px]">
      <div className="flex flex-col px-5 md:hidden">
        <NotificationsContent />
      </div>

      <div className="hidden md:block">
        <NotFoundPage />
      </div>
    </main>
  );
}
