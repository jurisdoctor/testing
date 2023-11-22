import './App.styles.css';

import { Counter } from './components/Counter/Counter';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Counter />
      </div>
    </div>
  );
}

export default App;
