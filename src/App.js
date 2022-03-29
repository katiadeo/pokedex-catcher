import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ScrollButton from './components/ScrollButton/ScrollButton';
import PokemonField from './components/PokemonField/PokemonField';
import PokemonPage from './components/PokemonPage/PokemonPage';
import CapturedPokemons from './components/CapturedPokemons/CapturedPokemons';


const App = () => {

  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component={PokemonField} />
            <Route
              path="/pokemon/:id?"
              render={({ match }) => {
                const { id } = match.params;
                return <PokemonPage id={id} />
              }}
            />
            <Route path="/captured" component={CapturedPokemons} />
          </Switch>
        <ScrollButton />
      </Router>
    </>
  );
}

export default App;
