import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PizzaForm from "./PizzaForm";
//import SubmissionForm from './SubmissionForm';
import * as yup from 'yup';
import axios from 'axios';

let pizzaSchema = yup.object().shape({
  name:            yup.string().min(2, 'name must be at least 2 characters').required('Name is Required'),
  size:            yup.string().required('You must select a pizza size').oneOf(['Small', 'Medium', 'Large', 'Extra Large'], 'You must select a pizza size'),
  pepperoni:       yup.boolean(),
  sausage:         yup.boolean(),
  can_bacon:       yup.boolean(),
  si_sausage:      yup.boolean(),
  grilled_chicken: yup.boolean(),
  onions:          yup.boolean(),
  green_pepper:    yup.boolean(),
  diced_tomatos:   yup.boolean(),
  black_olives:    yup.boolean(),
  roasted_garlic:  yup.boolean(),
  three_cheese:    yup.boolean(),
  pineapple:       yup.boolean(),
  special:         yup.string()
});

const App = () => {
  const defaultPizza = {
    name:            '',
    size:            '',
    pepperoni:       false,
    sausage:         false,
    can_bacon:       false,
    si_sausage:      false,
    grilled_chicken: false,
    onions:          false,
    green_pepper:    false,
    diced_tomatos:   false,
    black_olives:    false,
    roasted_garlic:  false,
    three_cheese:    false,
    pineapple:       false,
    special:         ''
  };

  const [pizza, setPizza]   = useState(defaultPizza);
  const [errors, setErrors] = useState(defaultPizza);

  const setFormErrors = (name, value) => {
    yup.reach(pizzaSchema, name)
      .validate(value)
      .then(() => {
        setErrors({...errors, [name] : ''});
      })
      .catch(err => {
        setErrors({...errors, [name] : err.errors[0]})
      });
  }

  const submitHandler = event => {
    event.preventDefault();
    
    // new Pizza

    // axios POST Requst

    // Reset form here
  }

  const handleChange = event => {
    const {name, type, value, checked} = event.target;
    const updatedInfo                  = type === 'checkbox' ? checked : value;

    setFormErrors(name, updatedInfo);
    setPizza({
      ...pizza,
      [name]: updatedInfo
    });
  }

  // For enabling / disabling our submit button
  // useEffect(() => {
  //   pizzaSchema.isValid(pizza).then(value => setDisabled(!valid))
  // }, [pizza])

  return (
    <Router>
      <header>
        <Link to='/'><h1>Lambda Eats</h1></Link>
      </header>

      <Route exact path='/'>
        <Link to='/BYOP' id='order-pizza'> Order Pizza </Link>
      </Route>

      <Route path='/BYOP'> 
        <PizzaForm form={pizza} submitHandler={submitHandler} handleChange={handleChange}> </PizzaForm>
      </Route>

      <Route path='/submission'>

      </Route>
    </Router>
  );
};
export default App;
