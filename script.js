// script.js

// Get the dark mode toggle button and the body element
const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check if dark mode is enabled from localStorage and apply it
if (localStorage.getItem("dark-mode") === "true") {
  body.classList.add("dark");
} else {
  body.classList.remove("dark");
}

// Toggle dark mode on button click
toggleButton.addEventListener("click", () => {
  // Toggle the 'dark' class on the body
  console.log("helo");
  body.classList.toggle("dark");

  // Save the dark mode preference to localStorage
  if (body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});
