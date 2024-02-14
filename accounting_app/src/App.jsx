// import { useState } from 'react'
import './App.css'
import ServiceField from './components/Service'
// import Child from './components/Child'

// https://dev.to/okafor__mary/how-to-dynamically-add-input-fields-on-button-click-in-reactjs-5298#:~:text=Create%20A%20React%20Component&text=First%2C%20we%20initialized%20the%20inputs,manage%20our%20input%20field%20values.

function App() {


  return (
    <>
      <h1>Money Hero</h1>
      <ServiceField/>
      {/* <Child /> */}

    </>
  )
}



export default App

{/* get input fields up, then separate two by item or service, and then make them into their own files */}