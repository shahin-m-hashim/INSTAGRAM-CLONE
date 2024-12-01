import Image from "components/Image";

export default function LinksCard() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <p className="mb-4">Get the app.</p>
      <div className="flex h-10 gap-x-2">
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN"
        >
          <Image
            alt="playstore"
            className="h-full w-28"
            src="images/playstore.webp"
          />
        </a>
        <a
          target="_blank"
          href="https://apps.microsoft.com/detail/9nblggh5l9xt?hl=en-US&gl=US"
        >
          <Image
            alt="microsoft"
            className="h-full w-28"
            src="images/microsoft.webp"
          />
        </a>
      </div>
    </div>
  );
}
