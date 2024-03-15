// import {transferValue} from 'react'
import { useState } from "react";
// import StoreEntries from "./StoreEntries";
// import { Button, Tab, Table } from 'semantic-ui-react'
// import { findDOMNode } from 'react-dom'
// import PropTypes from 'semantic-ui-react'
// import TableData from "./Table";
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
          
    }    
    // function transferValue(e) {
    //         e.preventDefault()
    //         const val = {
    //             date, 
    //             service, 
    //             price
    //         };
    //         // props.func(val)
    //         handleDate(val)
    //         handleService(val)
    //         handlePrice(val)
    //         clearState()
    // }

    const transferValue = (formJSON) => {
      // setInputs("This is data from Parent Component to the Child Component.");
      if (date && service && price) {
          console.log({date, service, price})
      } else {
          console.log('piss')
      }
      setDate({formJSON});
      setService({formJSON});
      setPrice({formJSON});
      clearState()
  }
          
    const clearState = () => {
        setDate('')
        setService('');
        setPrice(0);
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
     {/* <Button primary type='submit' onClick={() => { transferValue}} > Submit </Button>  */}
     <button onClick={transferValue}> Click Me</button>
      {/* <TableData /> */}
        </>
    
    )
}    

export default ServiceField