// return (
//     <div className="container">
//       {inputs.map((item, index) => (
//         <div className="input_container" key={index}>
//           <input
//             name="firstName"
//             type="text"
//             value={item.firstName}
//             onChange={(event) => handleChange(event, index)}
//           />
//           <input
//             name="lastName"
//             type="text"
//             value={item.lastName}
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
//   );