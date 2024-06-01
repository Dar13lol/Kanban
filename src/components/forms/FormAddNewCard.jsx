import React from "react";
import { useState } from "react";
import css from './Form.module.css'

const FormAddNewCard = props => {
    const { formSubmit } = props;
    const [values, setValues] = useState({
        title: ''
    })

    const handleChange = e => {
        const fieldName = e.target.name
        setValues({...values, [fieldName]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.title) {
          formSubmit(values.title, values.description);
        }
    };
    
    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input 
            className={css.input}
            id='taskTitle'
            name='title'
            type='text'
            placeholder='Enter New task title...'
            value={values.title}
            onChange={handleChange} 
            />
            {values.title ? (
                <button className={css.submit} type="submit">Submit</button>
            ) : (
                <button className={css.submit} disabled="disabled" type="submit">Submit</button>
            )}
        </form>
    )
}

export default FormAddNewCard