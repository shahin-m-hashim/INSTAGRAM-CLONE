export default function ActivityHighlightsPage() {
  return (
    <div className="flex flex-col items-center gap-6 mt-10 text-center">
      <img src="images/exclamation.webp" className="size-24" />
      <h1 className="text-2xl font-bold">
        You haven&apos;t made any highlights
      </h1>
      <p className="text-sm  text-secondary">
        When you create a highlight, it&apos;ll show up here.
      </p>
    </div>
  );
}
