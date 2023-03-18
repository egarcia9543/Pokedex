const pokemonImgDisplay = document.getElementById("firstDisplay");
const pokemonNameDisplay = document.getElementById("nameDisplay");
const pokemonInfoDisplay = document.getElementById("secondDisplay");

function fetchPokemon() {
    let id = document.getElementById("pokeSearch").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(data => {
            createPokemon(data)
        })
        .catch(error => {
            alert(`Ha ocurrido un error: ${error}`)
            console.log(error);
        });
}

let pokemonCard;
let statsCard;

function createPokemon(pokemon) {
    if (!pokemonCard) { // Si el elemento no existe, crear uno nuevo

        pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-block");

        const sprite = document.createElement("img");
        sprite.src = pokemon.sprites.other.dream_world.front_default;

        pokemonNameDisplay.value = pokemon.name

        //Información para mostrar en la segunda pantalla
        statsCard = document.createElement("div");
        statsCard.classList.add("details");

        const statsTitle = document.createElement("p");
        statsTitle.textContent = "Stats";

        const healthContainer = document.createElement("div");
        healthContainer.classList.add("details__stats");
        healthContainer.classList.add("health");
        const healthLabel = document.createElement("p");
        healthLabel.textContent = "Health";
        const health = document.createElement("p");
        health.textContent = pokemon.stats[0].base_stat;

        healthContainer.appendChild(healthLabel);
        healthContainer.appendChild(health);

        const attackContainer = document.createElement("div");
        attackContainer.classList.add("details__stats");
        attackContainer.classList.add("attack");
        const attackLabel = document.createElement("p");
        attackLabel.textContent = "Attack";
        const attack = document.createElement("p");
        attack.textContent = pokemon.stats[1].base_stat;

        attackContainer.appendChild(attackLabel);
        attackContainer.appendChild(attack);

        const defenseContainer = document.createElement("div");
        defenseContainer.classList.add("details__stats");
        defenseContainer.classList.add("defense");
        const defenseLabel = document.createElement("p");
        defenseLabel.textContent = "Defense";
        const defense = document.createElement("p");
        defense.textContent = pokemon.stats[2].base_stat;

        defenseContainer.appendChild(defenseLabel);
        defenseContainer.appendChild(defense);

        //Agregar elementos al div contenedor statsCard
        statsCard.appendChild(statsTitle);
        statsCard.appendChild(healthContainer);
        statsCard.appendChild(attackContainer);
        statsCard.appendChild(defenseContainer);

        pokemonCard.appendChild(sprite);
        pokemonImgDisplay.appendChild(pokemonCard);
        pokemonInfoDisplay.appendChild(statsCard);

    } else { // Si el elemento ya existe, actualizar sus valores

        const sprite = pokemonCard.querySelector("img");
        sprite.src = pokemon.sprites.other.dream_world.front_default;

        pokemonNameDisplay.value = pokemon.name

        const health = statsCard.querySelector(".health p:last-child");
        health.textContent = pokemon.stats[0].base_stat;

        const attack = statsCard.querySelector(".attack p:last-child");
        attack.textContent = pokemon.stats[1].base_stat;

        const defense = statsCard.querySelector(".defense p:last-child");
        defense.textContent = pokemon.stats[2].base_stat;
    }
}


function powerOn() {
    document.getElementById("onOff").style.backgroundColor = "#00d6fe";
    let unlockSearch = document.getElementById("pokeSearch");
    unlockSearch.removeAttribute("readonly");

    document.getElementById("firstDisplay").style.backgroundColor = "#97cb97"
    document.getElementById("secondDisplay").style.backgroundColor = "#97cb97"
}

// for (let i = 0; i < pokemon.types.length; i++) {
        //     const stats = document.createElement("p");
        //     stats.textContent = pokemon.types[i].type.name
        //     pokemonInfoDisplay.appendChild(stats)
        // }