import './App.styles.css';

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

import Board from './components/TicTacToe/Board';
import { Counter } from './components/Counter/Counter';
import { Home } from './components/Home/Home';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/tictactoe" element={<Board />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
