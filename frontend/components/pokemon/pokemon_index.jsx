import React from 'react';


class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }
  
  render(){
    return (
    <section className="pokedex">
      <ul>
      <PokemonIndexItem />
      </ul>
    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;