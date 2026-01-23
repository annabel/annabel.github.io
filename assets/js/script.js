window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// Copy to clipboard
function copyToClipboard() {
  const email = document.getElementById("email").textContent;
  navigator.clipboard.writeText(email);
}
