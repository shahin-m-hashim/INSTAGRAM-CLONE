export default function Footer() {
  // console.log("Rendering footer");

  return (
    <footer className="flex flex-col gap-4 text-xs text-gray-400">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <p>Meta</p>
        <p>About</p>
        <p>Blog</p>
        <p>Jobs</p>
        <p>Help</p>
        <p>API</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Locations</p>
        <p>Instagram Lite</p>
        <p>Threads</p>
        <p>Contact Uploading & Non-Users</p>
        <p>Meta Verified</p>
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <p>English</p>
        <p>© 2024 Instagram Clone</p>
      </div>
    </footer>
  );
}
