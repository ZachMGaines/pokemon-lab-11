import { findById } from './utils';

const POKEDEX = 'POKEDEX';
const parsedPokedex = JSON.parse(stringyPokedex);
export function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);

    if (!stringyPokedex) {
        return [];
    }
    return parsedPokedex;
}

export function setPokedex() {
    const stringyPokedex = JSON.stringify(parsedPokedex);
    localStorage.setItem(POKEDEX, stringyPokedex);
}

// encounterPokemon
export function encounterPokemon(pokemon) {
    const pokedex = getPokedex();
    const matchingPokedexItem = findById(pokedex, pokemon.pokemon);

    if (matchingPokedexItem) {
        matchingPokedexItem.encountered++;
    } else {
        const newPokedexItem = {
            id: pokemon.pokemon,
            captured: 0,
            encountered: 1
        };

        pokedex.push(newPokedexItem);
    }

    setPokedex(pokedex);

    return pokedex;
}


export function capturePokemon(pokemon) {
    const pokedex = getPokedex();
    const matchingPokedexItem = findById(pokedex, pokemon.pokemon);

    matchingPokedexItem.captured++;
    setPokedex(pokedex);
    return pokedex;
}