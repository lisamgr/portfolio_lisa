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

// NOTE: This doesn't use GSAP, It's just a recreation of the effect that's been used on the site

var circles = document.querySelectorAll(".button .circle");
var circleButtons = [];

window.addEventListener("resize", () => {
  circleButtons = Array.from(circles, (circle) =>
    circle.parentNode.getBoundingClientRect(),
  );
});

circles.forEach((circle, index) => {
  circleButtons.push(circle.parentNode.getBoundingClientRect());

  circle.parentNode.addEventListener("mousemove", (mouseMove) => {
    const buttonRect = circleButtons[index];

    circle.style.top = `${mouseMove.clientY - buttonRect.y}px`;
    circle.style.left = `${mouseMove.clientX - buttonRect.x}px`;
  });
});

const mainButton = document.getElementById("mainButton");
const actionButtons = document.getElementById("actionButtons");

mainButton.addEventListener("click", () => {
  actionButtons.classList.toggle("show");
});
