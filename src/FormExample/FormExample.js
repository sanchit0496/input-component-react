import React, { useState } from "react";
import InputComponentReact from "input-component-react"
import "./FormExample.css"

const FormExample = () => {
  //useState for input values
  const [inputValue, setInputValue] = useState({ firstName: "", lastName: "" ,price: "", color: "", date: "", file: "" });

  //useState to store error objects
  const [firstNameError, setFirstNameError] = useState({ errorMessage: "", errorExists: false })
  const [lastNameError, setLastNameError] = useState({ lastNameErrorMessage: "", lastNameErrorExists: false })

  const { firstName, lastName, price, color, date, file } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
    //error handling for first name
    if(inputValue.firstName.length === 0){
      setFirstNameError({errorMessage: "First Name Cannot Be Empty", errorExists: true})
    }else{
      setFirstNameError({errorMessage: "", errorExists: false})
    }

    //error handling for last name
    if(inputValue.lastName.length === 0){
      setLastNameError({errorMessage: "Last Name Cannot Be Empty", errorExists: true})
    }else{
      setLastNameError({errorMessage: "", errorExists: false})
    }
  }

  return (
    <div className='form'>
      <h1>Search Your Car!</h1>
      <form>
        <InputComponentReact
          type="text"
          value={firstName}
          placeholder="First Name"
          label="First Name"
          name="firstName"
          onChange={handleChange}
          isError={firstNameError.errorExists}
          errorMessage={firstNameError.errorMessage}
        />
        <InputComponentReact
          type="text"
          value={lastName}
          placeholder="Last Name"
          label="Last Name"
          name="lastName"
          onChange={handleChange}
          isError={lastNameError.errorExists}
          errorMessage={lastNameError.errorMessage}
        />
        <InputComponentReact
          type="number"
          value={price}
          placeholder="Add Price"
          label="Price"
          name="price"
          onChange={handleChange}
        />
        <InputComponentReact
          type="color"
          value={color}
          placeholder="Select Color"
          label="Color"
          name="color"
          onChange={handleChange}
        />
        <InputComponentReact
          type="date"
          value={date}
          placeholder="Select Date"
          label="Date"
          name="date"
          onChange={handleChange}
        />
        <InputComponentReact
          type="file"
          value={file}
          placeholder="Upload Documents"
          label="Upload Documents"
          name="file"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default FormExample;