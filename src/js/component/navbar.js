import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	const navigate = useNavigate();

	return (
		<div className="container">
			<div className="row">
				<nav className="navbar navbar-light bg-light ">
					<div className="d-flex justify-content-start" >
						<Link to="/">
							<span className="navbar-brand "
							><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"
								alt="..."
								width="90" /></span>
						</Link>
					</div>
					<div className="d-flex justify-content-end">
						<div className="dropdown ">
							<button className="btn btn-primary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<span className="mx-1">Favorites </span><span className="btn btn-secondary mx-1">{store.favorites.length}</span>
							</button>
							<ul className="dropdown-menu">
								{store.favorites.length === 0 && <p className="text-center"><b>(Empty)</b></p>}
								{store.favorites.map((value, index) => {
									return (

										<li className="d-flex justify-content-between align-items-center" key={`${value._id}-${index}`}>
											<button onClick={() => navigate(`/PersonDetails/${value.uid}`)}
												type="button"
												className="btn btn-link">
												{value.properties.name}</button>
											<p onClick={() => actions.addFavorite(value)} className="m-2">
												<i className="fas fa-trash"></i>
											</p>
										</li>

									)

								})}

							</ul>
						</div>
					</div>

				</nav>
			</div>
		</div>
	);
};
