import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contract from './components/Contract/Contract';
import NotFound from './NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          {/* Landing site start  */}

          <Route exact path="/">
        <Home></Home>
          </Route>
          {/* Landing site home  */}

          <Route exact path="/home">
        <Home></Home>
          </Route>

          {/* Landing site service  */}

          <Route exact path="/services">
        <Services></Services>
          </Route>

          {/* Landing site about  */}

          <Route exact path="/about">
        <About></About>
          </Route>

          {/* Landing site contract  */}

          <Route exact path="/contract">
        <Contract></Contract>
          </Route>

          {/* Landing site Error 404  */}

          <Route exact path="*">
        <NotFound></NotFound>
          </Route>

          
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
