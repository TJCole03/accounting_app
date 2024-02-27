// import React from 'react'
import { useMemo, useState } from "react";
// import StoreEntries from "./StoreEntries";
import { Button } from 'semantic-ui-react'
// import { findDOMNode } from 'react-dom'
// import PropTypes from 'semantic-ui-react'
const SERVICES = ['Reiki (in-person)', 'Reiki (distance)', 'Tarot Reading', 'Mediumship', 'Reiki Attunement', 'Tarot Class', 'Event/Retreat Payment']


function ServiceField() {
  const [inputs, setInputs] = useState({
    date: "",
    service: "",
    price: 0
  })
  const index = [inputs]
  // const table = {"date": [], 'service': [], 'price': 0}

  const handleSubmit = (e) => {
    // prevents browser from reloading data
        e.preventDefault();
    // read form data
        const form = e.target; 
        const formData = new FormData(form)

    // you can pass formData as fetch body directly: 
    // fetch('/', { method: form.method, body: formData })
    // console.log(formData, 'formData')
        
    // OR you can work with it as a plain object
    const formJSON = Object.fromEntries(formData.entries())
        index.push(inputs)
        console.log(formJSON, 'formJSON', index, 'index')
        console.log(index[0])
        // clearState()
        transferValue()
        // console.log(index)
        // console.log('formJson', [formJSON])
     

  }
  const transferValue = (formJSON) => {
    // setInputs("This is data from Parent Component to the Child Component.");
    // if (inputs.date && inputs.service && inputs.price) {
    if (index[0]) {
      // inputs.push(table)
      console.log('look we have inputs', index[0])
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
          onChange={(e) => handleDate(e, index)}
          action={transferValue}/>
      </label>
      <label>
        Service:
        <select
          value={inputs.service}
          onChange={(e) => handleService(e, index)}
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
          onChange={(e) => handlePrice(e, index)}
          action={transferValue}/>
        </label>
        <Button primary type='submit' onClick={() => {transferValue(inputs)}}>Submit</Button>
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
              <th scope="row" >{index[0].date}  </th>  
              <th scope="row" >{index[0].service}  </th>  
              <td scope="row">{index[0].price}</td>
                {/* <td>[insert expenditures]</td> */}
                </tr>
                </thead>
      </table>


  </form> 
    </>
  );
}

export default ServiceField;

