// import React from 'react'
import {  useState } from "react";
// import StoreEntries from "./StoreEntries";
import { Button } from 'semantic-ui-react'
// import { findDOMNode } from 'react-dom'
// import PropTypes from 'semantic-ui-react'
const SERVICES = ['Reiki (in-person)', 'Reiki (distance)', 'Tarot Reading', 'Mediumship', 'Reiki Attunement', 'Tarot Class', 'Event/Retreat Payment']


export default function ServiceField() {
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
    e.preventDefault();
    setInputs({
      ...inputs,
      date: e.target.value,
    });
  }

  const handleService = (e) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      service: e.target.value,
    });
  };

  const handlePrice = (e) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      price: e.target.value,
    });
  };

  return (
  <>

      {/* <StoreEntries /> */}
      <form>
        <label>
        Date:
        <input
          type='Date'
          value={inputs.date}
          onChange={(e) => handleDate(e, index)}
            // action={transferValue}
          />
      </label>
      <label>
        Service:
        <select
          value={inputs.service}
          onChange={(e) => handleService(e, index)}
          // action={transferValue}
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
            // action={transferValue}
          />
        </label>        
        </form>
        <div className='table' >
        <table>
            <thead>
              <tr>
                <th scope='col'>  Date {index[0].date}  </th>
                <th scope='col'>  Service {index[0].service}  </th>
                <th scope='col'>  Price {index[0].price}  </th>
                {/* <th scope='col'>Spending</th> */}
              </tr>
              <tr>
               <th scope="row" >  </th>  
               <th scope="row" >  </th>  
               <td scope="row"> </td>
                {/* <td>[insert expenditures]</td> */}
              </tr>
            </thead>
      </table>
        </div>
        
        {/* <div>
                <Button primary onClick={() => { transferValue(inputs) }}>Click Child</Button>   
        </div> */}
      <Button primary type='submit' onClick={() => { transferValue(inputs) }} > Submit </Button> 

      <p>
        {index[0].date} {index[0].service} {index[0].price}
      </p>


    </>
  );
}