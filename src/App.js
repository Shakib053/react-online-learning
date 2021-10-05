import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Events from './Components/Events/Events';

function App() {
  return (
    <div className="text-center container">
      <Router>
        <Header>
        </Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/events'>
            <Events></Events>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
