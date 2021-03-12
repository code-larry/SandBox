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

const soleil = new Image();
const lune = new Image();
const terre = new Image();

soleil.src = "https://mdn.mozillademos.org/files/1456/Canvas_sun.png";
lune.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
terre.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';

function init() {

	// Permet d'affocher notre terre et notre lune au dessus de notre image du soleil
	ctx.globalCompositeOperation = 'destination-over';
	ctx.clearRect(0,0,300,300);

	// Dessin de l'orbite
	ctx.beginPath();
	ctx.strokeStyle = 'rgba(0,153,255,0.4'
	ctx.arc(150,150,105,0,Math.PI * 2);
	ctx.stroke();

	// Garder le translate par défaut
	ctx.save();
	ctx.translate(150,150);

	let time = new Date();
	ctx.rotate( ((2 * Math.PI/60) * time.getSeconds()) + ((2 * Math.PI/60000) * time.getMilliseconds()) );

	// on positionne notre terre sur l'orbite
	ctx.translate(105,0);
	ctx.drawImage(terre,-12,-12);

	// Lune
	ctx.rotate( ((2 * Math.PI/6) * time.getSeconds()) + ((2 * Math.PI/6000) * time.getMilliseconds()) );
	ctx.translate(0,28);
	ctx.drawImage(lune,-3.5,-3.5)

	// On restaure les valeurs de translate avant le save()
	ctx.restore()

	// On dessine le soleil
	ctx.drawImage(soleil,0,0);

	requestAnimationFrame(init);
}

init();