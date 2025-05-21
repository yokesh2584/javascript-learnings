// ! Clipboard API
// ? What is it?
// The Clipboard API gives us programmatic access to the system clipboard — that sacred space where "copy" and "paste" live. ✂️📎

// * There are two main methods:
// navigator.clipboard.writeText(text) – copy text to clipboard
// navigator.clipboard.readText() – read clipboard content (user permission needed)

// * Copy Example
const textToCopy = "You are doing amazing!";
navigator.clipboard.writeText(textToCopy).then(() => {
  alert("Text copied to clipboard!");
});

// * Paste Example (requires permissions!)
navigator.clipboard.readText().then((text) => {
  console.log("Pasted content:", text);
});

// * Security Notes:
// Clipboard access is only available on HTTPS domains (or localhost)
// Reading from clipboard often requires user interaction (like a button click)

// * Real Use Cases:
// "Copy to clipboard" buttons for links, promo codes, or code snippets
// Paste detection in smart input fields
// Custom text editor or command runner apps
