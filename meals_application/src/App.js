import logo from './logo.svg';
import './App.css';
import './components/Favorites'
import {useGlobalContext} from "./context";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";

function App() {
    const {showModal, favorites} = useGlobalContext()
  return (
    <div className="App">
        <Search/>
        {favorites.length > 0&&<Favorites/>}
        <Meals/>
        {showModal&&<Modal/>}
    </div>
  );
}

export default App;
