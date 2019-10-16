import React from 'react'

const RadioButton = ({ id, filter, label, percentage }) => {
  return <span className="FilterControls-radioButton">
    <input
      className="FilterControls-radioButton-toggle"
      type="radio"
      id={id}
      name="controls-filter"
    />
    <label
      className="FilterControls-radioButton-label"
      htmlFor={id}>
      {label}
      {percentage && <span className="FilterControls-radioButton-percentage">{percentage}</span>}
    </label>
  </span>
}

export default RadioButton
