import { useState } from 'react'
import './App.css'
// https://dev.to/okafor__mary/how-to-dynamically-add-input-fields-on-button-click-in-reactjs-5298#:~:text=Create%20A%20React%20Component&text=First%2C%20we%20initialized%20the%20inputs,manage%20our%20input%20field%20values.

function App() {
  const [itemOrService, setItemOrService] = useState(['Item/Service'])
  const [totalPrice, setTotalPrice] = useState([0])

  const handleInput = () => {
    setItemOrService([...itemOrService, {itemOrService: ''}])
  }

  const handleChange = (e, index) => {
    let { itemOrService, value} = e.target
    let onChangeValue = [...itemOrService]
    onChangeValue[index][itemOrService] = value
    setItemOrService(onChangeValue)
  }
  
  const handlePrice = (e, index) => {
    let { totalPrice, value } = e.target
    let onChangeValue = [...totalPrice]
    onChangeValue[index][itemOrService] = value
    setTotalPrice(onChangeValue)
}

  const handleDeleteInput = (index) => {
    const newArray = [...itemOrService]
    newArray.splice(index, 1);
    setItemOrService(newArray)
}

  return (
    <>
      <h1>Money Hero</h1>
      <div className="machine">
        {itemOrService.map((itemOrService, index) => (
          <div className='container' key={index}>
            <itemOrService
              name="Item/Service"
              type='text'
              value={itemOrService.name}
              onChange={(e) => handleChange(e, index)}
              />
            <totalPrice
              name='amnt'
              type='text'
              value={totalPrice.name}
              onChange={(e) => handleChange(e, index)}
            />
            {itemOrService.length > 1 && (
              <button onClick={() => handleDeleteInput(index)}>Delete</button>
            )}
            {itemOrService.length - 1 && (
              <button onClick={() => handleInput(index)}>Submit</button>
            )}
            {totalPrice.length > 1 && (
              <button onClick={() => handlePrice(index)}>Submit</button>
            )}
          </div>
        ))}
      <div className="body"> {JSON.stringify(itemOrService)} </div>
      </div>
    </>
  )
}



export default App

{/* get input fields up, then separate two by item or service, and then make them into their own files */}