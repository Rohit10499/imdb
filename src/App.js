// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar.js"
import Banner from "./components/Banner.js"
import Movies from "./components/Movies.js"
//  import Footer  from "./components/Footer.js"
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Favourites from './components/Favourites';
function App() {
  return (
    <BrowserRouter>
      {/* <h1>hello rohit welcome react 🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️</h1> */}
    {/* <h2>navebar</h2> */}
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<>
        <Banner/>
        <Movies/>
       {/* <Footer/>  */}
      </>}/>
      <Route path="/favourites" element={<Favourites />}/>
    </Routes>
    {/* <Banner></Banner> */}
    {/* <Movies></Movies> */}
    {/* <Footer></Footer> */}
    
    </BrowserRouter>
    
    );
}

export default App;
