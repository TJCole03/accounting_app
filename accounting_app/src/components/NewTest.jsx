// import React from 'react'
import { useState } from "react";
// import StoreEntries from "./StoreEntries";
import { Button } from 'semantic-ui-react'
// import { findDOMNode } from 'react-dom'
// import PropTypes from 'semantic-ui-react'
const SERVICES = ['Reiki (in-person)', 'Reiki (distance)', 'Tarot Reading', 'Mediumship', 'Reiki Attunement', 'Tarot Class', 'Event/Retreat Payment']


function ServiceField() {
  const [inputs, setInputs] = useState({
    date: "",
    service: "",
    price: "",
  });

  const handleSubmit = (e) => {
    // prevents browser from reloading data
        e.preventDefault();
    // read form data
        const form = e.target; 
        const formData = new FormData(form)

    // you can pass formData as fetch body directly: 
        // fetch('/', { method: form.method, body: formData })
        
    // OR you can work with it as a plain object
    const formJSON = Object.fromEntries(formData.entries())
        inputs.push(formJSON)
        console.log(formJSON, 'formJSON')
        transferValue()
        // console.log(index)
        // console.log('formJson', [formJSON])
     

  }
  const transferValue = (formJSON) => {
    // setInputs("This is data from Parent Component to the Child Component.");
    if (inputs.date && inputs.service && inputs.price) {
      console.log({ inputs })
    } else {
        console.log('still closer because you know this doesnt work')
    }
    setInputs({formJSON})
    clearState()
  }
  
  const clearState = () => {
    // setDate('')
    // setService('');
    // setPrice(0);
    setInputs({date: "", service: "", price: 0})
};

  function handleDate(e) {
    setInputs({
      ...inputs,
      date: e.target.value,
    });
  }

  const handleService = (e) => {
    setInputs({
      ...inputs,
      service: e.target.value,
    });
  };

  const handlePrice = (e) => {
    setInputs({
      ...inputs,
      price: e.target.value,
    });
  };

  return (
  <>
    <form method="post" onSubmit={handleSubmit}>

      <label>
        Date:
        <input
          type='Date'
          value={inputs.date}
          onChange={handleDate}
          action={transferValue}/>
      </label>
      <label>
        Service:
        <select
          value={inputs.service}
          onChange={handleService}
          action={transferValue}
        >
          <option />
            {SERVICES.map((service) => (
            <option key={service}>{service}
          </option>
            ))}
        </select>
      </label>
      <label>
        Price:
        <input
          type='number'
          value={inputs.price}
          onChange={handlePrice}
          action={transferValue}/>
      </label>
      {/* <p>
        {inputs.date} {inputs.service} {inputs.price}
      </p> */}
      <table>
                <thead>
                <tr>
                    <th scope='col'>  Date  </th>
                    <th scope='col'>  Service  </th>
                    <th scope='col'>  Gross Earnings  </th>
                {/* <th scope='col'>Spending</th> */}
                </tr>
                <tr>
                    <th scope="row" >{inputs.date}  </th>  
                    <td scope="row">{inputs.service} </td>
                    <td scope="row">{inputs.price}</td>
                {/* <td>[insert expenditures]</td> */}
                </tr>
                </thead>
      </table>
        <Button primary type='submit' onClick={handleSubmit}>Submit</Button>
  </form> 
    </>
  );
}

export default ServiceField;

