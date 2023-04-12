import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";



export const Home = () => {

	const { store, actions } = useContext(Context);

	const navigate = useNavigate();

	return (
		<div className="container">
			<h1 className="text-danger d-flex justify-content-start m-3" >Characters</h1>
			<div className="wrapper">
				{store.charactersApi.map((person) => {
					return (
						<div key={person._id} >
							<div className="card item ">
								<img src="https://picsum.photos/200" className="card-img-top  " alt="..."></img>
								<div className="card-body">
									<h4 className="card-title"><b>{person.properties.name}</b></h4>
									<div className="my-1"> Gender: {person.properties.gender}</div>
									<div className="my-1">Hair: {person.properties.hair_color}</div>
									<div className="mt-1 mb-3">Eye-Color: {person.properties.eye_color}</div>
									<div className="d-flex justify-content-between">
										<button type="button" className="btn btn-outline-primary" onClick={() => navigate(`/PersonDetails/${person.uid}`)}><b>Lear More!</b></button>
										<button type="button" className="btn btn-outline-warning" onClick={() => actions.addFavorite(person)} ><i className="far fa-heart" ></i></button>
									</div>
								</div>
							</div>
						</div>

					)
				})}
			</div>

			<h1 className="text-danger d-flex justify-content-start m-3">Planets</h1>
			<div className="wrapper">
				{store.planetApi.map((planets) => {
					return (
						<div key={planets._id} >
							<div className="card item">
								<img src="https://picsum.photos/200" className="card-img-top  " alt="..."></img>
								<div className="card-body contain" >
									<h4 className="card-title"><b>{planets.properties.name}</b></h4>
									<div className="my-1"> Population: {planets.properties.population}</div>
									<div className="my-1 mb-3">Terraint: {planets.properties.terrain}</div>
									<div className="d-flex ">
										<button type="button" className="btn btn-outline-primary" onClick={() => navigate(`/Planetdetails/${planets.uid}`)}><b>Lear More!</b></button>
										<button type="button" className="btn btn-outline-warning mx-2" onClick={() => actions.addFavorite(planets)} ><i className="far fa-heart" ></i></button>
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>



	)
};
