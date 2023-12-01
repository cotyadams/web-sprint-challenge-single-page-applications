import pizzaImage from './Pizza.jpg' 
import React, { useState, useEffect } from 'react'
import * as yup from 'yup';
import formSchema from './FormSchema'
//import axios from 'axios'

const initialValues = {
    name: '',
    size: '',
    mushrooms: false,
    hearts: false,
    grinch: false,
    pepperoni: false,
    specialInstructions: ''
}
const initialErrors = {
    name: '',
    size: ''
}
const PizzaBuilder = () => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrors);
    const [disabled, setDisabled] = useState(true);

    const validate = (name, value) => {
        yup.reach(formSchema, name)
            .validate(value)
            .then(() => {
                setErrors({ ...errors, [name]: '' });
                setDisabled(false);
            })
            .catch((err) => {
                setErrors({ ...errors, [name]: err.errors[0] });
                setDisabled(true);
            })
    }
    const onChange = (evt) => {
        const { name, type, value, checked } = evt.target
        let valueToUse = type === 'checkbox' ? checked : value;
        if (name === 'name' || name === 'size') validate(name, value);
        setValues(
            {...values,
            [name]: valueToUse}
        )
        
    }
    const onSubmit = (evt) => {
        evt.preventDefault()
        
    }
    useEffect(() => {
            console.log(values)
        }, [values])
    return (
        <>  <div id='pizzaBuilder'>
            
            <img
                src={pizzaImage}
                alt='pizza image'
                className='pizzaImage'
            />
            <h1
                className='title'
            >build a pizza</h1>
            <form id="pizza-form" onSubmit={onSubmit}>
                {/*name input*/}
                <span>
                    <p
                        id='name-title'
                        className='name'
                    >Name: </p>
                    <input
                        type='text'
                        placeholder='First Last'
                        id='name-input'
                        className='name'
                        onChange={onChange}
                        name='name'
                        value={values.name}
                    />
                </span>
                <div className='errors'>
                    <p className='error'>{errors.name}</p>
                </div>
                {/*pizza size selection*/}
                <div className='size-select'>
                    <select
                        id='size-dropdown'
                        onChange={onChange}
                        name='size'
                        value={values.size || undefined}>
                        <option value={undefined}>select a size</option>
                        <option value={8}>8 inch</option>
                        <option value={12}>12 inch</option>
                        <option value={16}>16 inch</option>
                    </select>
                    <div className='errors'>
                        <p className='error'>{errors.size}</p>
                    </div>
                </div>
                {/*toppings selection */}
                    <p>toppings:</p>
                    <span className='toppings'>
                        <label htmlFor='mushroom-topping' className='topping'>mushrooms: </label>
                        <input
                            type='checkbox'
                            className='topping'
                            checked={values.mushrooms}
                            id='mushroom-topping'
                            onChange={onChange}
                            name='mushrooms'
                        />
                    </span>
                    <span className='toppings'>
                        <label htmlFor='hearts-topping' className='topping'>the hearts of children who dont say please: </label>
                    <input
                            onChange={onChange}
                            type='checkbox'
                            className='topping'
                            checked={values.hearts}
                        id='hearts-topping'
                        name='hearts'
                    />
                    </span>
                    <span className='toppings'>
                        <label htmlFor='grinch-topping' className='topping'>The Grinch cooties: </label>
                    <input
                            onChange={onChange}
                            type='checkbox'
                            className='topping'
                            checked={values.grinch}
                        id='grinch-topping'
                        name='grinch'
                        />
                    </span>
                    <span className='toppings'>
                        <label htmlFor='pepperoni-topping' className='topping'>pepperoni: </label>
                    <input
                            onChange={onChange}
                            type='checkbox'
                            className='topping'
                            checked={values.pepperoni}
                            id='pepperoni-topping'
                            name='pepperoni'
                        />
                    </span>
                <div>
                    <label htmlFor='special-input'>special instructions: </label>
                    <input
                        onChange={onChange}
                        id='special-text'
                        type='text'
                        placeholder='Enter Special Instructions'
                        name='specialInstructions'
                        value={values.specialInstructions}
                    />
                    </div>
                    <div id='submit-button'>
                        <button disabled={disabled}>place order</button>
                    </div>
            </form>
            </div>
        </>
    )
}
export default PizzaBuilder