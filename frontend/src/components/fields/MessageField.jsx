import EmojiIcon from "icons/EmojiIcon";
import { useState } from "react";

export default function MessageField() {
  const [message, setMessage] = useState("");

  return (
    <label
      htmlFor="message"
      className="flex items-center w-full px-4 border rounded-full h-11 border-primary"
    >
      <div className="hidden pr-2 md:block">
        <EmojiIcon />
      </div>

      <input
        type="text"
        id="message"
        name="message"
        value={message}
        placeholder="Message..."
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 h-full bg-transparent outline-none"
      />

      {message && (
        <button
          className="font-semibold text-link-primary hover:text-link-secondary-hover"
          type="button"
        >
          Send
        </button>
      )}
    </label>
  );
}
