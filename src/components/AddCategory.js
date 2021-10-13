import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { InputBox } from './styled'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {            
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <InputBox 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add a new category..."
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}