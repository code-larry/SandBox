const inpCard = document.getElementById('num');

// On écoute l'evt keyup
inpCard.addEventListener('keyup', () => {

	// On récupère la valeur saisie
	let val = inpCard.value;

	// On stocke l'ens des valeurs saisies dans cette variable
	let newVal = '';

	// On supprime l'espace pour qu'il ne soit pas pris en compte dans la recherche des multiples de 4
	val = val.replace(/\s/g, '');
	
	// Pour chaque valeur saisie
	for(let i = 0; i < val.length; i++) {

		// Si i est un multiple de 4,  et i > 0 on ajoute un espace
		if(i % 4 === 0 && i > 0) {
			newVal = newVal.concat(' ');
		}

		// On ajoute la valeur saisie
		newVal = newVal.concat(val[i]);

	}

	inpCard.value = newVal;
})