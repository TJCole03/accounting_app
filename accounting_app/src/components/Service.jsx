// import React from 'react'
import { useState } from "react";
// import StoreEntries from "./StoreEntries";
import { Button } from 'semantic-ui-react'
// import { findDOMNode } from 'react-dom'
// import PropTypes from 'semantic-ui-react'
const SERVICES = ['Reiki (in-person)', 'Reiki (distance)', 'Tarot Reading', 'Mediumship', 'Reiki Attunement', 'Tarot Class', 'Event/Retreat Payment']


// note to self: I need the program to be able to detect my inputs in the input fields. I 
// need to research more into React hooks and see how to prevent instant rerenders 
// AND be able to store my information in the index array

// https://www.geeksforgeeks.org/how-to-pass-data-into-table-from-a-form-using-react-components/

function ServiceField() {
    // const [inputs, setInputs] = useState([]);
    // const [inputs, setInputs] = useState([{Date: "", service: "", price: ""}]);
    const [date, setDate] = useState('date')
    const [service, setService] = useState('reiki');
    const [price, setPrice] = useState(0)
    // const index = useMemo(() => {
    // }, [])
    const dateIndex = [date]
    const serviceIndex = [service]
    const priceIndex = [price]
    // const index = [inputs]



    // class AutoselectingInput extends ServiceField {
    //     inputRef = createRef(null);
      
    //     componentDidMount() {
    //         const input = this.inputRef.current;
    //         input.select()
    //     }
    // }
    
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
        dateIndex.push(formJSON)
        priceIndex.push(formJSON)
        serviceIndex.push(formJSON)
        console.log(formJSON, 'formJSON')
        console.log({Date},dateIndex)
        console.log({service},serviceIndex)
        console.log({price},priceIndex)
        console.log({price},priceIndex[1])
        transferValue()
        // console.log(index)
        // console.log('formJson', [formJSON])
     

    }

    const transferValue = (formJSON) => {
        // setInputs("This is data from Parent Component to the Child Component.");
        setDate(formJSON);
        setService(formJSON);
        setPrice(formJSON);
        clearState()
    }

    // const transferValue = () => {
    //     // e.preventDefault();
    //     const val = {
    //         Date,
    //         service,
    //         price,
    //     };
    //     handleSubmit(val);
    //     clearState();
    // };
 
    const clearState = () => {
        setDate('')
        setService('');
        setPrice(0);
    };

//     const handleAddInput = (e) => {
//     //   setInputs([...inputs, { Date: "", service: "", price: ""}]);
//     //   setService([...service, { service: ""}]);
//     //   setPrice([...price, {  price: "" }]);
//         // setInputs(e.target.value)
//         setDate({ 
//             ...date,
//             date: e.target.value})
//         setService(e.target.value)
//         setPrice(e.target.value)

//   };
    
    const handleDate = (e) => {
        setDate({
            ...[date], 
            date: e.target.value
        })
    }

    const handleService = (e) => {
        setService({
            ...[service], 
            service: e.target.value
        })
    }

    const handlePrice = (e) => {
        ({
            ...[price], 
            price: e.target.value
        })
    }
    
    return (
        <>
        <div className='entry'>
            <form method="post" onSubmit={handleSubmit}>
            <label>Date: 
                <input 
                    // value={Date}            
                    type="Date"
                    required
                    name='date'
                    onChange={(e) => handleDate(e, dateIndex)}
                    action={transferValue}
                    />
            </label>
            <label>Service: 
                    <select
                    // value={service}
                    type="text"
                    required
                    name='service'
                    onChange={(e) => handleService(e, serviceIndex)}
                    action={transferValue}
                    >
                    <option />
                        {SERVICES.map((service) => (
                            <option key={service}>{service}</option>
                    ))}    
                </select>
            </label>
            <label>Price: 
                <input
                    // value={price}
                    type='number'
                    required
                    name='price'
                    onChange={(e) => handlePrice(e, priceIndex)}
                    action={transferValue}
                    />
            </label>
                    {/* <button type="submit" onClick={transferValue}> Submit</button>  */}
            <Button primary type="submit"  >Submit</Button>
                    <p> we got: [serviceIndex]</p>
                        

                {/* onClick={() => {transferValue(date, service, price)}} */}
                {/* {[[dateIndex], [serviceIndex], [priceIndex]]} */}
            </form> 
            </div>
        <div className='table' >
            <table>
                <thead>
                <tr>
                    <th scope='col'>Date</th>
                    <th scope='col'>Service</th>
                    <th scope='col'>Gross Earnings</th>
                {/* <th scope='col'>Spending</th> */}
                </tr>
                <tr>
                    <th scope="row">{dateIndex[1]}  </th>  
                    <td scope="row">{serviceIndex[1]}, </td>
                            <td scope="row">{priceIndex[1]}</td>
                {/* <td>[insert insert expenditures]</td> */}
                </tr>
                </thead>
            </table>
        </div>
        
      </>
  )        
}

// I've got the three input fields rendered on the UI and am able to type in them but not without errors showing up. 
// want to take all three new values and organize them into tables and lists 
// want to have a page that shows updated income for the year

export default ServiceField

// source code: https://dev.to/okafor__mary/how-to-dynamically-add-input-fields-on-button-click-in-reactjs-5298#:~:text=Create%20A%20React%20Component&text=First%2C%20we%20initialized%20the%20inputs,manage%20our%20input%20field%20values.

//   const handleChange = (event, index) => {
//     let { service, price } = event.target;
//     let onChangeValue = [...inputs];
//     onChangeValue[index][service] = price;
//     setInputs(onChangeValue);
//   };

//   const handleDeleteInput = (index) => {
//     const newArray = [...inputs];
//     newArray.splice(index, 1);
//     setInputs(newArray);
//   };


//   return (
//     <div className="container">
//       {inputs.map((item, index) => (
//           <div className="input_container" key={index}>
//          <h3>Date: </h3> 
//           <input
//             name="service"
//             type="Date"
//             value={item.date}
//             onChange={(event) => handleChange(event, index)}
//               />
//          <h3>Service: </h3> 
//           <input
//             name="Service: "
//             type="text"
//             value={item.service}
//             onChange={(event) => handleChange(event, index)}
//               />
//          <h3>Price: </h3> 
//           <input
//             name="Price: "
//             type='text'
//             value={item.price}
//             onChange={(event) => handleChange(event, index)}
//           />
//           {inputs.length > 1 && (
//             <button onClick={() => handleDeleteInput(index)}>Delete</button>
//           )}
//           {index === inputs.length - 1 && (
//             <button onClick={() => handleAddInput()}>Add</button>
//           )}
//         </div>
//       ))}

//       <div className="body"> {JSON.stringify(inputs)} </div>
//     </div>
//   ); )