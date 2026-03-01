document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const icon = hamburger?.querySelector(".material-symbols-outlined");

  if (hamburger && navLinks && icon) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      icon.textContent = navLinks.classList.contains("active")
        ? "close"
        : "menu";
    });
  }
});
