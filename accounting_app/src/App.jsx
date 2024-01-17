import { useState } from 'react'
import './App.css'
// https://dev.to/okafor__mary/how-to-dynamically-add-input-fields-on-button-click-in-reactjs-5298#:~:text=Create%20A%20React%20Component&text=First%2C%20we%20initialized%20the%20inputs,manage%20our%20input%20field%20values.

function App() {
  const [itemOrService, setItemOrService] = useState('')
  // const [value, setValue] = useState(0)

  const handleInput = () => {
    setItemOrService([...itemOrService, {itemOrService: ''}])
  }

  const handleChange = (e, index) => {
    let { itemOrService, value} = e.target
    let onChangeValue = [...itemOrService]
    onChangeValue[index][itemOrService] = value
    setItemOrService(onChangeValue)
  }
  
  return (
    <>
      <h1>Money Hero</h1>
      <div className="machine">
        {itemOrService.map((itemOrService, index) => (
          <div className='container' key={index}>
  
          </div>
        )}
      </div>
    </>
  )
}



export default App
