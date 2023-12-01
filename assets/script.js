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

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");


let firstslide = 0;
const nbrSlides = slides.length;


caroussel(firstslide);
createDots();
switchDots(); 

arrowLeft.addEventListener("click", () => {
    if (firstslide === 0) {
        firstslide = nbrSlides - 1;
    } else {
        firstslide--;
    }
    caroussel(firstslide);
    switchDots(firstslide);
});

arrowRight.addEventListener("click", () => {
    if (firstslide === nbrSlides - 1) {
        firstslide = 0;
    } else {
        firstslide++;
    }
    caroussel(firstslide);
    switchDots(firstslide);
});

function createDots() {
    for (let index = 0; index < slides.length; index++) {
        const dot = document.createElement("div");
        dot.setAttribute("class", "dot");
        dots.appendChild(dot);
    }
}

function switchDots() {
    const listPoints = document.querySelectorAll(".dot");

    listPoints.forEach((dot, index) => {
        if (index === firstslide) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

function caroussel(firstslide){
	
	const element = slides[firstslide];
	  //console.log(element);
	  const img = document.querySelector(".banner-img");
	  const p = document.querySelector(".banner-txt");
	  img.setAttribute("src" , "./assets/images/slideshow/"+ element.image);
	  p.innerHTML= element.tagLine;
}