import React from 'react';


const PizzaForm = props => {
    return (
        <form id='pizza-form' onSubmit={props.submitHandler}>
            <h2> Build Your Own Pizza </h2>
            <div> 
                <label> Pizza Name</label>
                <input 
                       id='name-input'
                       name='name'
                       type='text'
                       value={props.form.name}
                       onChange={props.handleChange}>
                </input>
                <pre>{props.errors.name}</pre>

                <label> Pizza Size </label>
                <select 
                        id='size-dropdown'
                        name='size'
                        type='dropdown'
                        value={props.form.size}
                        onChange={props.handleChange}>
                    <option> Small </option>
                    <option> Medium </option>
                    <option> Large </option>
                    <option> Extra Large </option>
                </select>

                <div className='pizza-toppings'>
                    <label> Pepperoni </label>
                    <input name='pepperoni'
                        type='checkbox'
                        checked={props.form.pepperoni}
                        onChange={props.handleChange}> 
                    </input>

                    <label> Sausage </label>
                    <input name='sausage'
                        type='checkbox'
                        checked={props.form.sausage}
                        onChange={props.handleChange}> 
                    </input>

                    <label> Canadian Bacon </label>
                    <input name='can_bacon'
                        type='checkbox'
                        checked={props.form.can_bacon}
                        onChange={props.handleChange}> 
                    </input>

                    <label> Spicy Italian Sausage </label>
                    <input name='si_sausage'
                        type='checkbox'
                        checked={props.form.si_sausage}
                        onChange={props.handleChange}> 
                    </input>

                    <label> Grilled Chicken </label>
                    <input name='grilled_chicken'
                        type='checkbox'
                        checked={props.form.grilled_chicken}
                        onChange={props.handleChange}> 
                    </input>

                    <label> Onions </label>
                    <input name='onions'
                        type='checkbox'
                        checked={props.form.onions}
                        onChange={props.handleChange}> 
                    </input>

                    <label> Green Pepper </label>
                    <input name='green_pepper'
                        type='checkbox'
                        checked={props.form.green_pepper}
                        onChange={props.handleChange}> 
                    </input>

                    <label> Diced Tomatos </label>
                    <input name='diced_tomatos'
                        type='checkbox'
                        checked={props.form.diced_tomatos}
                        onChange={props.handleChange}> 
                    </input>

                    <label> Black Olives </label>
                    <input name='black_olives'
                        type='checkbox'
                        checked={props.form.black_olives}
                        onChange={props.handleChange}> 
                    </input>

                    <label> Roasted Garlic </label>
                    <input name='roasted_garlic'
                        type='checkbox'
                        checked={props.form.roasted_garlic}
                        onChange={props.handleChange}> 
                    </input>

                    <label> Three Cheese </label>
                    <input name='three_cheese'
                        type='checkbox'
                        checked={props.form.three_cheese}
                        onChange={props.handleChange}> 
                    </input>

                    <label> Pineapple </label>
                    <input name='pineapple'
                        type='checkbox'
                        checked={props.form.pineapple}
                        onChange={props.handleChange}> 
                    </input>
                </div>

                <label> Special Instructions </label> 
                <input id='special-text'
                       name='special'
                       type='text'
                       value={props.form.special}
                       onChange={props.handleChange}>
                </input>
                <button id='order-button'> Submit </button>
            </div>
        </form>
    );
}

export default PizzaForm;