import { Header} from './components';
import { PokemonCards, } from './components/Pokemoncards';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header title={"POKEMON KINGDOM"}/>
     <PokemonCards />
    </div>
  );
}

export default App;
