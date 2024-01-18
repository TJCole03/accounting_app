import { useState } from "react";

function ServiceField() {
    const [service, setService] = useState([""])
    // const [price, setPrice] = useState([0])
  
  
    const handleAddInput = () => {
      setService(...service, [{ service: '' }])
    //   setPrice(...price, [{price: ''}])
    }
  
    const handleChange = (e, index) => {
      let { service, value} = e.target
      let onChangeValue = [service]
      onChangeValue[index][service] = value
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
            {service.map((item, index) => (
                <div className="input_container" key={index}>
                    <input
                        name="firstName"
                        type="text"
                        value={item.firstName}
                        onChange={(event) => handleChange(event, index)}
                    />
                    <input
                        name="lastName"
                        type="text"
                        value={item.lastName}
                        onChange={(event) => handleChange(event, index)}
                    />
                    {service.length > 1 && (
                        <button onClick={() => handleDeleteInput(index)}>Delete</button>
                    )}
                    {index === service.length - 1 && (
                        <button onClick={() => handleAddInput()}>Add</button>
                    )}
                </div>
            ))}

            <div className="body"> {JSON.stringify(service)} </div>
        </div>
    )
}

export default ServiceField