import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './containers/Home/index';
import RentACourt from "./containers/RentACourt/RentACourt";
import Competitions from './containers/Competitions/Competitions';
import Coaches from './containers/Coaches/Coaches';
import Equipment from './containers/Equipment/Equipment';
import Login from './containers/Login/Login';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Title from "./components/Title/Title";
import { Register } from "./containers/Register/Register";

function App() {
  return (
    
    <Router>
      <div className="App">
      <Title />
      <NavBar />
       <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rentacourt" element={<RentACourt />}></Route>
          <Route path="/competitions" element={<Competitions />}></Route>
          <Route path="/coaches" element={<Coaches />}></Route>
          <Route path="/equipment" element={<Equipment />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
       <Footer />
      </div>
    </Router>

  );
}

export default App;
