import './App.css';
import PokemonPage from './pages/PokemonPage';
import {Routes, Route} from 'react-router-dom'
import InfoPokemonPage from './pages/InfoPokemonPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PokemonPage />}/>
        <Route path='/info/:id' element={<InfoPokemonPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
