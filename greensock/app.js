const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const images = document.querySelectorAll('.img-test');
const titre1 = document.querySelector('h1');
const titre2 = document.querySelector('h2');
const btns = document.querySelectorAll('.btn');


const TL = gsap.timeline();

TL
.from(img1, {
	opacity: 0, 
	duration: 1,
	})
.from(img2, {
	opacity: 0, 
	duration: 1, 
	}, 
	'-=0.2')
.from(img3, {
	opacity: 0, 
	duration: 1,
	},
	'-=0.2')
.from(titre1, {
	opacity: 0, 
	duration: 1,
	},
	'-=0.2')
.from(titre2, {
	opacity: 0, 
	duration: 1, 
	},
	'-=0.2')


document.querySelector('#play').addEventListener('click', () => {
	TL.play();
})
document.querySelector('#pause').addEventListener('click', () => {
	TL.pause();
})
document.querySelector('#resume').addEventListener('click', () => {
	TL.resume();
})
document.querySelector('#timescale').addEventListener('click', () => {
	TL.timeScale(8);
})
document.querySelector('#progress').addEventListener('click', () => {
	TL.progress(0.5);
})
document.querySelector('#seek').addEventListener('click', () => {
	TL.seek(1);
})
document.querySelector('#restart').addEventListener('click', () => {
	TL.restart();
})
document.querySelector('#repeat').addEventListener('click', () => {
	TL.repeat(2);
})
