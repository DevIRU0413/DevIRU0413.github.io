document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("search");
  if (!input) return;

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    document.querySelectorAll(".post-item").forEach(el => {
      const title = el.textContent.toLowerCase();
      el.style.display = title.includes(query) ? "" : "none";
    });
  });
});