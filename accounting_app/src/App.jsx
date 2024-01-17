import { useState } from 'react'
import AddDynamicInputFields from './goo'
import './App.css'
// https://dev.to/okafor__mary/how-to-dynamically-add-input-fields-on-button-click-in-reactjs-5298#:~:text=Create%20A%20React%20Component&text=First%2C%20we%20initialized%20the%20inputs,manage%20our%20input%20field%20values.

function App() {
  const [service, setService] = useState([{name: ""}])
  const [price, setPrice] = useState([0])
  // let Service = [setService]
  // let Price = [setPrice]

  const handleInput = () => {
    setService(...service, [{ service: '' }])
    setPrice(...price, [{price: ''}])
  }

  const handleChange = (e, index) => {
    let { service, value} = e.target
    let onChangeValue = [...service]
    onChangeValue[index][service] = value
    setService(onChangeValue)
  }
  
  const handlePrice = (e, index) => {
    let { price, value } = e.target
    let onChangeValue = [...price]
    onChangeValue[index][service] = value
    setPrice(onChangeValue)
}

  const handleDeleteInput = (index) => {
    const newArray = [...service]
    newArray.splice(index, 1);
    setService(newArray)
}

  return (
    <>
      <AddDynamicInputFields/>
      <h1>Money Hero</h1>
      <div className="machine">
        {service.map((service, index) => (
          <div className='container' key={index}>
            <input
              name="Item/Service"
              type='text'
              value={service.name}
              onChange={(e) => handleChange(e, index)}
            />
            {service.length > 1 && (
              <button onClick={() => handleDeleteInput(index)}>Delete</button>
            )}
            {service.length - 1 && (
              <button onClick={() => handleInput(index)}>Submit</button>
            )}
            <input
              name='amnt'
              type='text'
              value={price.name}
              onChange={(e) => handleChange(e, index)}
            />
            {service.length > 1 && (
              <button onClick={() => handleDeleteInput(index)}>Delete</button>
            )}
            {price.length > 1 && (
              <button onClick={() => handlePrice(index)}>Submit</button>
            )}
          </div>
        ))}
      <div className="body"> {JSON.stringify(service)} </div>
      </div>
    </>
  )
}



export default App

{/* get input fields up, then separate two by item or service, and then make them into their own files */}