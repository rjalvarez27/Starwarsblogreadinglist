import Planetdetails from "../views/Planetdetails.jsx";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			charactersApi: [],
			planetApi: [],
			favorites: [],
		},
		actions: {

			//funcion de consulta a la API (Personajes)
			fetchCharacters: async () => {
				try {
					const localCharacters = JSON.parse(localStorage.getItem("characters"));
					if (localCharacters) {
						setStore({ ...store, charactersApi: localCharacters })
						return;
					};

					const store = getStore();
					const response = await fetch("https://www.swapi.tech/api/people/");
					console.log(response)
					if (response.ok) {
						const data = await response.json();
						const characters = data.results;						
						let charactersDetail = [];
						for (let character of characters) {
							const detailResponse = await fetch(character.url);
							const detailData = await detailResponse.json();
							charactersDetail.push(detailData.result);
						}						
						localStorage.setItem("characters", JSON.stringify(charactersDetail));					
						setStore({ ...store, charactersApi: charactersDetail });
					};
				} catch (error) {
					console.log(error);
				};

			},
			//funcion de consulta a la API (Planetas)
			fetchPlanet: async () => {
				try {
					const localplanet = JSON.parse(localStorage.getItem("planetas"));
					if (localplanet) {
						setStore({ ...store, planetApi: localplanet })
						return;
					};

					const store = getStore(); // traer los valores del store			   
					const response = await fetch("https://www.swapi.tech/api/planets/");
					if (response.ok) {
						const data = await response.json();
						const planets = data.results						
						let planetsDetail = [];
						for (let planet of planets) {
							const detailResponse = await fetch(planet.url);
							const detailsData = await detailResponse.json();
							planetsDetail.push(detailsData.result);							
						}
						localStorage.setItem("planetas", JSON.stringify(planetsDetail));
						setStore({ ...store, planetApi: planetsDetail });
					};
				} catch (error) {
					console.log(error);
				};
			},

			addFavorite: (item) => {
				const store = getStore();
				const favorites = store.favorites;
				const exists = favorites.find((value) => value === item);
				if (exists) {
					const filterFavorite = favorites.filter((favorites) => favorites !== item)
					setStore({ ...store, favorites: filterFavorite })
					return;
				};
				const newFavorites = [...favorites, item];
				setStore({ ...store, favorites: newFavorites });
				
				
			},        
			
		},
	};
};

export default getState;
