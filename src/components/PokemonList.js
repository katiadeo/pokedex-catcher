import React from 'react';
import Pokemon from './Pokemon/Pokemon';

const PokemonList = ({ pokemons }) => {
    return (
        <>
            {pokemons && pokemons.map(poke => {
                return <Pokemon key={poke.id} id={poke.id} name={poke.name} captured={poke.captured}/>
            })}
        </>
    )
}

export default PokemonList;
