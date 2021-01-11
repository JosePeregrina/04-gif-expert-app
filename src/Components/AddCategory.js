import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddCategory({ setCategories }) {
  const [inputvalue, setInputvalue] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputvalue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputvalue && inputvalue.trim().length > 2) {
      setCategories((categories) => [inputvalue,...categories,]);
      setInputvalue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p> {inputvalue} </p>
      <input type='text' value={inputvalue} onChange={handleInputChange} />
    </form>
  );
}

export default AddCategory;

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
