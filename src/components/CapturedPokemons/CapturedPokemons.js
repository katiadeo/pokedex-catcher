import React, { useState, useEffect } from 'react';
import { getPokemonImage } from '../getPokemonImage';
import { Link } from 'react-router-dom';

const CapturedPokemons = () => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		fetch('https://pokedex-catcher.herokuapp.com/api/pokemons?captured=true')
			.then((response) => response.json())
			.then((data) => setPokemons(data));
	}, []);

	return (
		<main>
			<h2>Captured Pokemons</h2>
			<div className="pokemons__field">
				{pokemons &&
					pokemons
						.filter((poke) => poke.captured)
						.map((poke) => (
							<div
								key={poke.id}
								className="pokemon-card"
								style={{
									backgroundColor: 'black',
									boxShadow: '2px 2px 5px black, -2px -2px 5px black',
								}}
							>
								<div className="pokemon-card__info">
									<div className="name">{poke.name}</div>
								</div>
								<Link to={`/pokemon/${poke.id}`}>
									<img
										className="pokemon-card__img"
										alt="pokemon"
										src={getPokemonImage(poke.id)}
									/>
								</Link>
							</div>
						))}
			</div>
		</main>
	);
};

export default CapturedPokemons;
