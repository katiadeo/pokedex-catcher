/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import './PokemonPage.scss';
import { Link } from 'react-router-dom';
import { getPokemonImage } from '../getPokemonImage';

const PokemonPage = ({ id }) => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		fetch('https://pokedex-catcher.herokuapp.com/api/pokemons?captured=true')
			.then((response) => response.json())
			.then((data) => setPokemons(data));
	}, []);

	useEffect(() => {
		fetch('https://pokedex-catcher.herokuapp.com/api/pokemons')
			.then((response) => response.json())
			.then((data) => setPokemons(data));
	}, []);

	return (
		<main>
			<div className="pokemon__page">
				<h2>Pokemon Page</h2>
				<div className="poke-details">
					{pokemons
						.filter((poke) => poke.id == id)
						.map((poke) => (
							<div className="poke-details__inner" key={id}>
								<h3 className="poke-name">{poke.name}</h3>
								<h3>{poke.id}</h3>
								<div className="poke-status">
									<div className="captured">
										{poke.captured ? 'CAPTURED' : 'OUTSIDE'}
									</div>
									{poke.captured && (
										<div className="captured-info">
											<div className="time">TIME: {poke.captureTime}</div>
											<div className="date">DATE: {poke.captureDate}</div>
										</div>
									)}
								</div>
							</div>
						))}
					<img className="poke-img" alt="pokemon" src={getPokemonImage(id)} />
				</div>
				<Link to="/">
					<button className="goBackBtn">Back to Pokedex</button>
				</Link>
			</div>
		</main>
	);
};

export default PokemonPage;
