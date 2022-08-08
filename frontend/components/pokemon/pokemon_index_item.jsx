import { render } from "react-dom";

const pokemonItems = pokemon.map(poke => (
    <PokemonIndexItem key={poke.id} pokemon={poke} />
));

render(){
    return(
        <section className="pokedex">
            <ul>{pokemonItems}</ul>
        </section>)}