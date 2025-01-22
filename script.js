const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;

if (localStorage.getItem("dark-mode") === "true") {
  body.classList.add("dark");
} else {
  body.classList.remove("dark");
}

toggleButton.addEventListener("click", () => {
  console.log("helo");
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

function copyToClipboard() {
  const email = document.getElementById("email").textContent;
}
