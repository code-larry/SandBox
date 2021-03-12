const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

// Permet d'adapter la taille du canvas à la taille de la fénêtre
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Cette fonction permet d'adapter le canvas de manière dynamique et de redémarrer l'app pour conserver le contenu
window.addEventListener('resize', function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
})

// Permet de modifier la taille du canvas

// canvas.setAttribute('width', '500')
// canvas.setAttribute('height', '200')

function init(){
	// Création de plusieurs carré qui forment un dégradé de couleur
	for(let i = 0; i < 6; i++) {
		for(let j = 0; j < 6; j++) {
			ctx.fillStyle = `rgb(${255 - 42.5 * i}, ${255 - 42.5 * j}, ${42.5 * i})`;
			ctx.fillRect(j * 25, i * 25, 25,25);
		}
	}

	// Dessin d'un triangle
	ctx.beginPath();
	ctx.moveTo(75, 250);
	ctx.lineTo(100,275);
	ctx.lineTo(100,225);
	ctx.closePath; // Permet de fermer le dessin en revenant aux coordonnées du départ
	// ctx.lineTo(75,50);
	ctx.stroke();
	ctx.fill();


	// Dessin d'un cercle
	ctx.beginPath();
	ctx.arc(275,275,50, 0, 1.8 * Math.PI);
	ctx.moveTo(275,275);
	ctx.lineTo(325,275);
	ctx.moveTo(315,245)
	ctx.lineTo(275,275)
	ctx.stroke();

	// Ajouter du texte
	ctx.font = '40px serif';
	// ctx.strokeText('Hello World', 10, 50)
	ctx.fillStyle = "red"
	ctx.fillText('Hello World', 300, 50);
}

init();