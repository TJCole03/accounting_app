import React from 'react'
import { useState } from "react";
// import StoreEntries from "./StoreEntries";
import { Button } from 'semantic-ui-react'
import { findDOMNode } from 'react-dom'
// import PropTypes from 'semantic-ui-react'
const SERVICES = ['Reiki (in-person)', 'Reiki (distance)', 'Tarot Reading', 'Mediumship', 'Reiki Attunement', 'Tarot Class', 'Event/Retreat Payment']


 function ServiceField() {
    // const [inputs, setInputs] = useState({
    //     date: "",
    //     service: "",
    //     price: 0
    // })
    const [date, setDate] = useState('')
    const [service, setService] = useState('')
    const [price, setPrice] = useState(0)
    // const index = [inputs]
    
    const handleDate = (e) => {
        e.preventDefault();
        setDate(e.target.value,);
    }
    
    const handleService = (e) => {
        e.preventDefault();
        setService(e.target.value, );
    };
    
    const handlePrice = (e) => {
        e.preventDefault();
        setPrice(e.target.value,);
          
        
        function transferValue(e) {
            e.preventDefault()
            const val = {
                date, 
                service, 
                price
            };
            props.func(val)
            handleDate()
            handleService()
            handlePrice()
            clearState()
        }
          
        const clearState = () => {
            setDate('')
            setService('');
            setPrice(0);
        }


    }
    return (
        <>
         <form>
        <label>
        Date:
        <input
          type='Date'
          value={date}
          onChange={handleDate}

          />
      </label>
      <label>
        Service:
        <select
          value={service}
          onChange={handleService}
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
          value={price}
          onChange={handlePrice}
          />
        </label>        
        </form>
     <Button primary type='submit' onClick={() => { transferValue}} > Submit </Button> 
     {/* <button onClick={transferValue}> Click Me</button> */}

        </>
    
    )
}    

export default ServiceField