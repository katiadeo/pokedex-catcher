import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getPokemonImage } from '../getPokemonImage';
import './Pokemon.scss';

const Pokemon = ({ name, id, captured }) => {
	const card = useRef();
	const button = useRef();

	const capturePokemon = async () => {
		const date = new Date();
		const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
		const captureDate = date.toLocaleDateString('en-En', options);
		const captureTime = date.toLocaleTimeString();

		button.current.setAttribute('disabled', 'disabled');
		card.current.style.backgroundColor = 'black';
		card.current.style.boxShadow = '2px 2px 5px black, -2px -2px 5px black';

		await axios({
			method: 'PUT',
			url: `http://localhost:8000/pokemons/${id}`,
			data: {
				id: id,
				name: name,
				captured: true,
				captureTime: captureTime,
				captureDate: captureDate,
			},
		});
	};

	return (
		<>
			<div ref={card} className="pokemon-card">
				<div className="pokemon-card__info">
					<div className="name">{name}</div>

					{captured ? (
						<button className="catchBtn" disabled>
							Captured!
						</button>
					) : (
						<button ref={button} className="catchBtn" onClick={capturePokemon}>
							Capture me!
						</button>
					)}
				</div>
				<Link to={`/pokemon/${id}`}>
					<img className="pokemon-card__img" alt="pokemon" src={getPokemonImage(id)} />
				</Link>
			</div>
		</>
	);
};

export default Pokemon;

/* <img className='pokemon-card__img' alt='pokemon' src={`https://raw.githubusercontent.com/katiadeo/final-project/main/pokemons/${id}.png`} /> */
