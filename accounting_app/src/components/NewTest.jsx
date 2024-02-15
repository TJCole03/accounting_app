// import React from 'react'
import { useState } from "react";
// import StoreEntries from "./StoreEntries";
import { Button } from 'semantic-ui-react'
// import { findDOMNode } from 'react-dom'
// import PropTypes from 'semantic-ui-react'
const SERVICES = ['Reiki (in-person)', 'Reiki (distance)', 'Tarot Reading', 'Mediumship', 'Reiki Attunement', 'Tarot Class', 'Event/Retreat Payment']


function ServiceField() {
  const [inputs, setInputs] = useState({
    date: "",
    service: "",
    price: "",
  });

  function handleDate(e) {
    setInputs({
      ...inputs,
      date: e.target.value,
    });
  }

  const handleService = (e) => {
    setInputs({
      ...inputs,
      service: e.target.value,
    });
  };

  const handlePrice = (e) => {
    setInputs({
      ...inputs,
      price: e.target.value,
    });
  };

  return (
    <>
      <label>
        Date:
        <input value={inputs.date} onChange={handleDate} />
      </label>
      <label>
        Service:
        <input value={inputs.service} onChange={handleService} />
      </label>
      <label>
        Price:
        <input value={inputs.price} onChange={handlePrice} />
      </label>
      <p>
        {inputs.date} {inputs.service} {inputs.price}
      </p>
    </>
  );
}

export default ServiceField;

