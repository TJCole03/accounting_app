import { useCallback, useMemo, useState } from "react";
// import Submission from "./Submission";
const SERVICES = ['Reiki (in-person)', 'Reiki (distance)', 'Tarot Reading', 'Mediumship', 'Reiki Attunement', 'Tarot Class', 'Event/Retreat Payment']


// note to self: I need the program to be able to detect my inputs in the input fields. I 
// need to research more into React hooks and see how to prevent instant rerenders 
// AND be able to store my information in the index array


function ServiceField() {
    const [inputs, setInputs] = useState([]);
    const [service, setService] = useState('');
    const [price, setPrice] = useState('');
    const index = useMemo(() => {
    }, [])

    const handleSubmit = useCallback((inputs) => {
        console.log('is this even working???')
        index.push(inputs)
    }, [index])

    console.log('INPUT YES', [index])
    console.log('inputs', {inputs})

    const handleAddInput = () => {
      setInputs([...inputs, { Date: "", service: "", price: ""}]);
      setService([...service, { service: ""}]);
      setPrice([...price, {  price: "" }]);

  };
    
    return (
        <div className='entry'>
            <form onClick={() =>
             handleSubmit(index)}
            >
            <label>Date: 
                <input
                    type="Date"
                    required
                    id='date'
                    onChange={(event) => handleAddInput(event, index)}
                    />
            </label>
            <label>Service: 
                <select
                    type="text"
                    required
                    id='service'
                    onChange={(event) => handleAddInput(event, index)}
                    >
                    <option />
                        {SERVICES.map((service) => (
                            <option key={service}>{service}</option>
                    ))}    
                </select>
            </label>
            <label>Price: 
                <input
                    type='number'
                    required
                    id='price'
                    onChange={(event) => handleAddInput(event, index)}
                    />
            </label>
            <button> Submit</button> 
                {/* cb={index}     */}
                
            </form> 
      </div>
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