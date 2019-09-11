import React, { useState } from 'react';

const AddedFeature = props => {
  const [removeFeature, setRemoveFeature] = useState(false)

  const handleChanges = event => {
    setRemoveFeature({ removeCar: event.target.value);
  }

  const removeFeature = event => {
    event.preventDefault();


  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
