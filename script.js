
javascript

window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header h1");
  header.style.opacity = 0;
  header.style.transition = "opacity 2s ease";
  setTimeout(() => {
    header.style.opacity = 1;
  }, 500);
});