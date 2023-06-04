
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Employees from "./Employees";

function App() {
  return (
    <div>
      <Header/>
      <Employees/>
      <Footer/>
    </div>
  );
}

export default App;
