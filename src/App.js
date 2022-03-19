import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componenst/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './componenst/pages/Home';
import Services from './componenst/pages/Services';
import SignUp from './componenst/pages/SignUp';
import Products from './componenst/pages/Products';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/products">{Products}</Route>
          <Route path="/sign-up">{SignUp}</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
