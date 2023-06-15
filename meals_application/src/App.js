import logo from './logo.svg';
import './App.css';
import './components/Favorites'
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
        <Search/>
        <Meals/>
    </div>
  );
}

export default App;
