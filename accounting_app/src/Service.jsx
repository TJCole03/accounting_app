import { useState } from "react";
// import Submission from "./Submission";
// const SERVICES = ['Reiki (in-person)', 'Reiki (distance)', 'Tarot Reading', 'Mediumship', 'Reiki Attunement', 'Tarot Class', 'Event/Retreat Payment']

function ServiceField() {
    const [inputs, setInputs] = useState('');
    const index = []

  const handleAddInput = () => {
      setInputs([...inputs, { service: "", price: "" }]);

  };
    
    return (
        <div className='entry'>
                <form>
                    <label>Date: </label>
                    <input
                        type="Date"
                    required
                    onChange={(event) => handleAddInput(event, index)}
                    />
                    <label>Service: </label>
                    <input
                        type="text"
                    required
                    onChange={(event) => handleAddInput(event, index)}
                    />
                    <label>Price: </label>
                    <input
                        type='number'
                    required
                    onChange={(event) => handleAddInput(event, index)}
                />
            <button onClick={() =>
             
             {if (!index) {
                console.log('on button click')
         } else {
             console.log('we got input')
             }}
             
         
            }  > Submit</button>  
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