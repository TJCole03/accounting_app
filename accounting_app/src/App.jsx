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
      <div className="card">
        {itemOrService.map((itemOrService, index) => 
        <div className='input-container' key={index}>
          <input 
            name = 'Item/Service'
            type="text"
            value={itemOrService}
          onChange={(e) => handleChange(e, index)}
          />
        )}
        </div>
        {index === inputs.length - 1 && (
          <button onClick={() => handleInput()}>
            Add
          </button>
        )}
        <div className='body'>{JSON.stringify(itemOrService)}</div>
      </div>
    </>
  )
}

export default App

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
{/* <div>
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div> */}
// <button onClick={() => setCount((count) => count + 1)}>
// count is {count}
// </button>
// <p>
//   Edit <code>src/App.jsx</code> and save to test HMR
// </p>