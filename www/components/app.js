//Search Function em breve

window.onload = () => {
    const fetchPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}/`

    const pokemonPromises = []

    for(let i = 1; i <= 150; i++) {
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    }

    Promise.all(pokemonPromises)
    .then(pokemons => {
        const lisPokemon = pokemons.reduce((accumulator, pokemon) => {
            const types = pokemon.types.map(typeInfo => typeInfo.type.name)
            accumulator += `
            <div class="card ${types[0]}">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" class="img">
                <div class="pk">
                    <h3>${pokemon.name}</h3>
                    <p>${types.join(' | ')}</p>
                </div>
            </div>
            `
            return accumulator
        }, '')

        const div = document.querySelector('#dados');
            div.innerHTML = lisPokemon
    })
}

fetchPokemon()
}