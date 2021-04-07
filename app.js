import { generateThreePokemon } from './data-utils.js';
import { capturePokemon } from './local-storage-utils.js';
import { findByPokemonName } from './utils.js';


const button = document.querySelector('button');

let totalCaptures = 0;

function createPokemonDom() {
    const pokeRadio1 = document.querySelector('#poke1-radio');
    const pokeRadio2 = document.querySelector('#poke2-radio');
    const pokeRadio3 = document.querySelector('#poke3-radio');

    const pokeLabel1 = document.querySelector('#poke1-label');
    const pokeLabel2 = document.querySelector('#poke2-label');
    const pokeLabel3 = document.querySelector('#poke3-label');
    console.log(pokeRadio1, pokeRadio2, pokeRadio3);
    const threePokemon = generateThreePokemon();

    const img1 = document.querySelector('#poke1-img');

    img1.src = threePokemon[0].url_image;
    pokeLabel1.append(img1);
    pokeRadio1.value = threePokemon[0].pokemon;

    const img2 = document.querySelector('#poke2-img');

    img2.src = threePokemon[1].url_image;
    pokeLabel2.append(img2);
    pokeRadio2.value = threePokemon[1].pokemon;

    const img3 = document.querySelector('#poke3-img');

    img3.src = threePokemon[2].url_image;
    pokeLabel3.append(img3);
    pokeRadio3.value = threePokemon[2].pokemon;

}

createPokemonDom();

button.addEventListener('click', () => {
    totalCaptures++;
    const selectedRadio = document.querySelector('input:checked');

    const pokeObject = findByPokemonName(selectedRadio.value);

    capturePokemon(pokeObject);

    if (totalCaptures >= 10) {
        window.location = '../results';
    }

    createPokemonDom();

});