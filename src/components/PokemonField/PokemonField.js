import React, { useState, useEffect } from 'react';
import PokemonList from '../PokemonList';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import './PokemonField.scss';

const PokemonField = () => {
	const [pokemons, setPokemons] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		const CancelToken = axios.CancelToken;
		let cancel;

		const loadPokemons = async () => {
			try {
				setLoading(true);
				setError(false);
				const response = await axios({
					method: 'GET',
					url: 'http://localhost:8000/pokemons/',
					params: { _page: page, _limit: 5 },
					cancelToken: new CancelToken(function executor(c) {
						cancel = c;
					}),
				});
				setPokemons((pokemons) => [...new Set([...pokemons, ...response.data])]);
				setHasMore(response.data.length > 0);
			} catch (e) {
				if (axios.isCancel(e)) return;
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		loadPokemons();
		return () => cancel();
	}, [page]);

	return (
		<main>
			<h2>Pokedex</h2>
			<div className="pokemons__field">
				<PokemonList pokemons={pokemons} />
				<hr />
				{error && <div>Error</div>}
				{loading && (
					<Spinner animation="border" variant="primary" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				)}
				{!loading && hasMore && (
					<button className="loadMoreBtn" onClick={() => setPage((page) => page + 1)}>
						Load more ...
					</button>
				)}
			</div>
		</main>
	);
};

export default PokemonField;
