let lightMode = true;

function myFunction() {
  const wrapper = document.querySelector(".kee-wrapper");
  const mode = document.getElementById("mode");

  if (lightMode === true) {
    wrapper.classList.add("dark-mode");
    mode.innerText = "sunny";
    lightMode = false;
  } else {
    wrapper.classList.remove("dark-mode");
    mode.innerText = "bedtime";
    lightMode = true;
  }
}
