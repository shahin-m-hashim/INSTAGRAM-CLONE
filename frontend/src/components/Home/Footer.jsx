export default function Footer() {
  // console.log("Rendering footer");

  return (
    <footer className="flex flex-col gap-4 text-xs text-gray-400">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <a className="hover:underline">Meta</a>
        <a className="hover:underline">About</a>
        <a className="hover:underline">Blog</a>
        <a className="hover:underline">Jobs</a>
        <a className="hover:underline">Help</a>
        <a className="hover:underline">API</a>
        <a className="hover:underline">privacy</a>
        <a className="hover:underline">Terms</a>
        <a className="hover:underline">Locations</a>
        <a className="hover:underline">Instagram Lite</a>
        <a className="hover:underline">Threads</a>
        <a className="hover:underline">Contact Uploading & Non-Users</a>
        <a className="hover:underline">Meta Verified</a>
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <p>English</p>
        <p>© 2024 Instagram Clone</p>
      </div>
    </footer>
  );
}
