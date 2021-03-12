// je récupère l'élément qui affiche ma liste
const liste = document.querySelector('.liste')

// je récupère mon bouton
const btn = document.querySelector('.btn')

// Je mets un écouteur sur mon bouton pour l'event "mousover"
btn.addEventListener('mouseover', () => {
	
	// Je parcours les données de l'API
	fetch('https://jsonplaceholder.typicode.com/posts')

	// Ensuite, je récupère la réponse au format JSON
	.then((response) => response.json())

	// Ensuite, j'utilise les données pour les afficher sous forme de carte
	.then((data) => {
	
		// Avec cette boucle je parcours tous les objets reçus dans la réponse
		for(let i = 0; i < data.length ; i++) {
			// Je créé les éléments de ma liste
			let newLi = document.createElement('li');

			// Je créé un élément h2
			let newTitreCarte = document.createElement('h2');

			// Je créé un élément p
			let newBodyCarte = document.createElement('p');
	
			// Dans mon élément h2, j'insère le titre récupéré par l'API
			newTitreCarte.innerText = data[i].title;

			// Dans mon élément p, j'insère le texte récupéré par l'API
			newBodyCarte.innerText = data[i].body;
	
			// J'ajoute le titre et le texte dans mon élément li
			newLi.appendChild(newTitreCarte);
			newLi.appendChild(newBodyCarte);

			// J'ajoute le li dans mon élément ul
			liste.appendChild(newLi);
		}
	})	
})

