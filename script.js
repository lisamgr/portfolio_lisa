<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
=======
// Fonction pour charger un fichier HTML dans un élément
function loadHTML(selector, url, callback) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(selector).innerHTML = data;
      // Si fonction de callback, exécute ici
      if (callback) callback();
    })
    .catch((error) => console.error("Erreur :", error));
}

function initNavigation() {
>>>>>>> 581bd56216e0bdd3605209c5397118bdd93cc6fe
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const icon = hamburger?.querySelector(".material-symbols-outlined");

  if (hamburger && navLinks && icon) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
<<<<<<< HEAD
      icon.textContent = navLinks.classList.contains("active")
        ? "close"
        : "menu";
    });
  }
=======

      
      if (navLinks.classList.contains("active")) {
        icon.textContent = "close";
      } else {
        icon.textContent = "menu";
      }
    });
  }
}

// header et footer
document.addEventListener("DOMContentLoaded", () => {
  // passe 'initNavigation' comme callback pour le header
  loadHTML("#header-placeholder", "header.html", initNavigation);
  loadHTML("#footer-placeholder", "footer.html");
>>>>>>> 581bd56216e0bdd3605209c5397118bdd93cc6fe
});
