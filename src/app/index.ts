import ImageHandler from "./ImageHandler";

if (document.readyState === "complete") {
  const imageHandler = new ImageHandler();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    const imageHandler = new ImageHandler();
  });
}