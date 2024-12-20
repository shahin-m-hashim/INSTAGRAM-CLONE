export default function ActivityInteractionCommentsPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-5 my-5 text-center">
      <img src="images/exclamation.webp" className="size-24" />
      <h1 className="text-2xl font-bold">
        You haven&apos;t commented on anything
      </h1>
      <p className="text-sm text-tertiary">
        When you comment on a photo or video, it&apos;ll show up here.
      </p>
    </div>
  );
}
