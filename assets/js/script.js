window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// Dark mode toggle
const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;

if (localStorage.getItem("dark-mode") === "true") {
  body.classList.add("dark");
  toggleButton.checked = true;
} else if (localStorage.getItem("dark-mode") === "false") {
  body.classList.remove("dark");
  toggleButton.checked = false;
} else if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  body.classList.add("dark");
  toggleButton.checked = true;
} else {
  body.classList.remove("dark");
  toggleButton.checked = false;
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
    toggleButton.checked = true;
  } else {
    localStorage.setItem("dark-mode", "false");
    toggleButton.checked = false;
  }
});

// Copy to clipboard
function copyToClipboard() {
  const email = document.getElementById("email").textContent;
  navigator.clipboard.writeText(email);
}
