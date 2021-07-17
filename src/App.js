import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PizzaForm from "./PizzaForm";

const App = () => {
  return (
    <Router>
      <header>
        <Link to='/'><h1>Lambda Eats</h1></Link>
      </header>

      <Route exact path='/'>
        <Link to='/BYOP'> Pizza </Link>
      </Route>

      <Route path='/BYOP'> 
        <PizzaForm></PizzaForm>
      </Route>

      <Route path='/submission'>
        
      </Route>
    </Router>
  );
};
export default App;
