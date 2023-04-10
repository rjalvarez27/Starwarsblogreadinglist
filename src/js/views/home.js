import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";



export const Home = () => {

	const [todo, setTodo] = useState("")

	const { store, actions } = useContext(Context);
	console.log(store.charactersApi);

	const navigate = useNavigate();



	return (
		<div className="text-center mt-5 container ">
			<h1>Mi lista de personajes</h1>
			<div>
				{store.favorites.map((favorito,index) => {
                   return (
                     <p key={`${favorito._id}-${index}`}>{favorito.properties.name}</p>

				   )              


				})}
			</div>

			{store.charactersApi.map((personaje) => {
				return (
					<div>
						<div className="card m-2 " key={personaje._id} >
							<p>{personaje.properties.name}</p>
							<p>{personaje.properties.gender}</p>
							<p>{personaje.properties.hair_color}</p>
							<p>{personaje.properties.eye_color}</p>					

                         <div className="d-flex">   
							<button onClick={() => navigate(`/PersonDetails/${personaje.uid}`)}>Lear More</button>
						    <button onClick={() => actions.addFavorite(personaje)} className="btn">corazon</button>
						</div>
						</div>
					</div>
				)
			})}

			<h1>Planetas</h1>
			{store.planetApi.map((planets) => {
				return (
					<div>
						<div className="card m-2" key={planets._id} >
							{planets.properties.name}
							<p>{planets.properties.population}</p>
							<p>{planets.properties.diameter}</p>	
							<button onClick={() => navigate(`/Planetdetails/${planets.uid}`)}>Lear More</button>
						</div>
					</div>
				)
			})}



		</div>
	)
};
