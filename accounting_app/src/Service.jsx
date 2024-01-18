import { useState } from "react";
// const SERVICES = ['Reiki (in-person)', 'Reiki (distance)', 'Tarot Reading', 'Mediumship', 'Reiki Attunement', 'Tarot Class', 'Event/Retreat Payment']

function ServiceField() {
    // const [date, setDate] = useState({Date})
    const [service, setService] = useState("")
    const [price, setPrice] = useState([0])
  
  
    const handleAddInput = () => {
      setService(...service, [{ service: '' }])
      setPrice(...price, [{price: ''}])
    }
  
    const handleChange = (e, index) => {
      let { service } = e.target
      let onChangeValue = [service]
      onChangeValue[index][service] = service
      setService(onChangeValue)
    }
    
//     const handlePrice = (e, index) => {
//       let { price, value } = e.target
//       let onChangeValue = [...price]
//       onChangeValue[index][service] = value
//       setPrice(onChangeValue)
//   }
  
    const handleDeleteInput = (index) => {
      const newArray = [...service]
      newArray.splice(index, 1);
      setService(newArray)
  }

    return (
        <div className="container">
            {/* {service.map(( index) => ( */}
            <div className="input_container"
            // key={index}
            >
                    <h3>Date: </h3>
                    <input
                        name="Date"
                        type="text"
                        id={Date} //check on whether that's the right way to go about it
                        onChange={(event) => handleChange(event )}
                    />
                <h3>Service: </h3>
                    <input
                        name="service"
                        type="text"
                        id={service}
                        onChange={(event) => handleChange(event )}
                    />
                    <h3>Price: </h3>
                    <input
                        name="price"
                        type="text"
                        id={price}
                        onChange={(event) => handleChange(event )}
                    />
                    {service.length > 1 && (
                        <button onClick={() => handleDeleteInput()}>Delete</button>
                    )}
                    { service.length - 1 && (
                        <button onClick={() => handleAddInput()}>Add</button>
                    )}
                </div>
            {/* )) */}
            {/* } */}

            <div className="body"> {JSON.stringify(service)} </div>
        </div>
    )
}

// I've got the three input fields rendered on the UI and am able to type in them but not without errors showing up. 
// want to take all three new values and organize them into tables and lists 
// want to have a page that shows updated income for the year

export default ServiceField

                    {/* <select
                        id="service"
                        value={service}
                        onChange={(event) => {
                            setService(event.target.value)
                        }}
                    >
                        <option />
                        {SERVICES.map((service) => {
                            <option key={service}>{service}</option>
                        })}
                    </select> */}