const pokeContainer = document.getElementsByClassName("poke-container")[0]
const pokemonCount = 180;
const color ={
    fire:"#fddfdf",
    grass:"#defde0",
    electric: "#fcf7de",
    water: "#def3fd",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison:"#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#f5f5f5",
    fighting: "#e6e0d4",
    normal:"#f5f5f5"
}

const fetchpoke = async ()=> {
    for(let index = 1; index <= pokemonCount; index++){
    await  getPoke(index)
    }
}

const getPoke = async (i)=> {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}/`
    const response = await fetch(url);
    const data = await response.json();
    getCards(data);
}   



const getCards = (pokemon) => {
    let pokemonDiv = document.createElement("div");
    pokemonDiv.classList.add("pokemon")
    let id = pokemon.id.toString().padStart(3,"0");
    let name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    let type = pokemon.types[0].type.name;
    pokemonDiv.style.backgroundColor = color[type]
    const pokemonInnerHtml = `
            <div class="img-container">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png">
            </div>
            <div class="info">
                <span class="number">#${id}</span>
                <h3 class="name">${name}</h3>
                <small class="type">Type: <span>${type}</span></small>
            </div>
    
    `;
    pokemonDiv.innerHTML = pokemonInnerHtml;
    pokeContainer.appendChild(pokemonDiv);
}

fetchpoke()
