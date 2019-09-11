import React, { useState } from 'react';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  const [newCar, setNewCar] = useState('');
  const handleChanges = e => {
    setNewCar(e.target.value)
  };
  const addNewCar = e => {
    e.preventDefault();
  };
  const updateCar = e => {
    e.preventDefault();
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addNewCar}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = state => {
  return {
    car: state.car.feature

  }
}
export default connect(mapStateToProps, {})(AdditionalFeature);
