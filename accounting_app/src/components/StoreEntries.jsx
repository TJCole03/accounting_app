// import {useState} from "react"
// import {Button} from 'semantic-ui-react'
// // import ServiceField from "./NewTest"
// // import {index} from './NewTest'
// const SERVICES = ['Reiki (in-person)', 'Reiki (distance)', 'Tarot Reading', 'Mediumship', 'Reiki Attunement', 'Tarot Class', 'Event/Retreat Payment']


// function StoreEntries() {
// const [inputs, setInputs] = useState({
//         date: "",
//         service: "",
//         price: 0
//       })
//     const index = [inputs]


// const transferValue = (formJSON) => {
//         // setInputs("This is data from Parent Component to the Child Component.");
//         // if (inputs.date && inputs.service && inputs.price) {
//     if (index[0]) {
//           // inputs.push(table)
//           console.log('look we have inputs', index[0])
//     } else {
//             console.log('still closer because you know this doesnt work')
//     }
//     setInputs({formJSON})
//     clearState()
//     }
      
//     const clearState = () => {
//         // setDate('')
//         // setService('');
//         // setPrice(0);
//      setInputs({date: "", service: "", price: 0})
// };



    
//   function handleDate(e) {
//     setInputs({
//       ...inputs,
//       date: e.target.value,
//     });
//   }

//   const handleService = (e) => {
//     setInputs({
//       ...inputs,
//       service: e.target.value,
//     });
//   };

//   const handlePrice = (e) => {
//     setInputs({
//       ...inputs,
//       price: e.target.value,
//     });
//   };
 
     
//     return (
//         <> 
//         <form>
//         <label>
//         Date:
//         <input
//           type='Date'
//           value={inputs.date}
//           onChange={(e) => handleDate(e, index)}
//             // action={transferValue}
//           />
//       </label>
//       <label>
//         Service:
//         <select
//           value={inputs.service}
//           onChange={(e) => handleService(e, index)}
//           // action={transferValue}
//         >
//           <option />
//             {SERVICES.map((service) => (
//             <option key={service}>{service}
//           </option>
//             ))}
//         </select>
//       </label>
//       <label>
//         Price:
//         <input
//           type='number'
//           value={inputs.price}
//           onChange={(e) => handlePrice(e, index)}
//             // action={transferValue}
//           />
//         </label>        
//         </form>
//         <div className='table' >
//         <table>
//             <thead>
//               <tr>
//                 <th scope='col'>  Date  </th>
//                 <th scope='col'>  Service  </th>
//                 <th scope='col'>  Gross Earnings  </th>
//                 {/* <th scope='col'>Spending</th> */}
//               </tr>
//               <tr>
//                <th scope="row" >  </th>  
//                <th scope="row" >  </th>  
//                <td scope="row"> </td>
//                 {/* <td>[insert expenditures]</td> */}
//               </tr>
//             </thead>
//       </table>
//         </div>
        
//         <div>
//                 <Button primary onClick={() => { transferValue(inputs) }}>Click Child</Button>   
//         </div>
//     </>  
//      )
// }

// export default StoreEntries

