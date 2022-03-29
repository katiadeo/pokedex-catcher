export const getPokemonImage = (id) => {
    try {
        return require(`../assets/pokemons/${id}.png`).default;
    } catch (e) {
        if (e instanceof Error && e.code === 'MODULE_NOT_FOUND') {
            return require(`../assets/unknown.png`).default;
        } else {
            throw e;
        }
    }
}