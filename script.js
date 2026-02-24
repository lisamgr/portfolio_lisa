// Fonction pour charger un fichier HTML dans un élément
function loadHTML(selector, url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch((error) => console.error("Erreur :", error));
}

// Appel pour header et footer
document.addEventListener("DOMContentLoaded", () => {
  loadHTML("#header-placeholder", "header.html");
  loadHTML("#footer-placeholder", "footer.html");
});
