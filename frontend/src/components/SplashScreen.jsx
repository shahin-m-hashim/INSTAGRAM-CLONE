export default function SplashScreen() {
  return (
    <div className="fixed inset-0 min-w-[320px] h-screen z-[1000] pointer-events-none">
      <div className="flex flex-col items-center justify-center bg-primary text-primary size-full">
        <div className="flex flex-col items-center justify-end flex-1">
          <img
            width="60"
            src="images/instagram_logo.webp"
            alt="instagram logo"
          />
        </div>
        <div className="flex flex-col items-center justify-end flex-1 pb-10">
          <span className="text-gray-500 ">from</span>
          <img width="100" alt="meta logo" src="images/meta_logo.webp" />
        </div>
      </div>
    </div>
  );
}
