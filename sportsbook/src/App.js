import './App.css';
import {Route, Link} from 'react-router-dom';
import GameLines from './Components/gameLines';
import Results from './Components/results';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Link to='/results'>
          <h3>Results</h3>
        </Link>
        <GameLines/>
      </Route>
      <Route path='/results'>
        <Results/>
      </Route>
    </div>
  );
}

export default App;
