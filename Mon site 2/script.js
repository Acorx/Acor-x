// Ouverture d'un lien dans un nouvel onglet
function openLink(url) {
  window.open(url, '_blank');
}

// Défilement vers une section spécifique
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Ouverture de la chaîne YouTube
function openYouTubeChannel() {
  const youtubeLink = 'https://www.youtube.com/acor_x';
  openLink(youtubeLink);
}

// Mise à jour de la date de dernière mise à jour dans le footer
function updateLastUpdateDate() {
  const lastUpdateElement = document.getElementById('last-update');
  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('fr-FR', options);
  lastUpdateElement.textContent = formattedDate;
}

// Gestion de l'événement de clic sur le bouton "Remonter en haut de la page"
const scrollTopButton = document.getElementById('scroll-top-button');
scrollTopButton.addEventListener('click', function() {
  scrollToSection('home');
});

// Mise à jour de la date de dernière mise à jour lors du chargement de la page
window.addEventListener('load', function() {
  updateLastUpdateDate();
});
