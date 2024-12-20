export default function ActivityPostsPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-5 text-center">
      <img src="images/exclamation.webp" className="size-24" />
      <h1 className="text-2xl font-bold">You haven&apos;t posted anything</h1>
      <p className="text-sm text-tertiary">
        When you create a post, it&apos;ll show up here.
      </p>
    </div>
  );
}
