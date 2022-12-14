import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import PokemonIndexContainer from './../components/pokemon/pokemon_index_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter> 
      <PokemonIndexContainer/>
    </HashRouter>
  </Provider>
);

export default Root;