
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {StockOverviewPage} from "./pages/StockOverviewPage";
import {StockDetailPage} from "./pages/StockDetailPage";

function App() {
  return (
    <main className="container">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<StockOverviewPage/>}/>
                <Route path='/details/:stock' element={<StockDetailPage/>}/>
            </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;
