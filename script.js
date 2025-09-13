// Loading animation
window.addEventListener("load", function() {
  document.getElementById("loader").style.display = "none";
});

// Pop-up modal
function bukaPopup() {
  document.getElementById("popup").style.display = "block";
}

function tutupPopup() {
  document.getElementById("popup").style.display = "none";
}

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}