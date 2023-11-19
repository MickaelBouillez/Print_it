//Tableau pour définir les diapositives
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Sélectionner les éléments HTML
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelector(".dots");
const bannerImg = document.querySelector('.banner-img');

// Définir l'indice de la slide 1 et du nbr de diapo
let firstslide = 0;
const nbrSlides = slides.length;

//appel des fonctions
Caroussel(firstslide);
createDots();
switchDots(firstslide); // Mettez à jour les indicateurs au démarrage

// Gestionnaire d'événement clic flèche gauche
arrowLeft.addEventListener('click', function () {
	if (firstslide === 0) {
		firstslide = nbrSlides - 1;
	} else {
		firstslide--;
	}
	// Mettre à jour l'affichage du carrousel
	Caroussel(firstslide, 'left');
	switchDots(firstslide); // Mettez à jour les indicateurs
});

// Gestionnaire d'événement clic flèche droite
arrowRight.addEventListener('click', function () {
	if (firstslide === nbrSlides - 1) {
		firstslide = 0;
	} else {
		firstslide++;
	}
// Mettre à jour l'affichage du carrousel
	Caroussel(firstslide, 'right');
	switchDots(firstslide); // Mettez à jour les indicateurs
});

// Fonction pour créer les indicateurs de diapositives
    function createDots() {
        for (let index = 0; index < slides.length; index++) {
            const dot = document.createElement("div");
            dot.setAttribute("class", "dot");
            dots.appendChild(dot);
        }
    }
