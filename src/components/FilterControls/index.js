import React from 'react'
import RadioButton from './RadioButton'

const FilterControls = ({ selectedFilter, onFilterChange, controls }) => {
  let implemented = []
  let notImplemented = []
  let unknown = []

  controls.forEach(control => {
    control.state
      ? control.state.isImplemented
        ? implemented.push(control)
        : notImplemented.push(control)
      : unknown.push(control)
  })

  return <div className="FilterControls-wrapper">
    <p className="FilterControls-heading">
      Filter Controls
    </p>
    <div className="FilterControls">

      <RadioButton
        id="show-all"
        filter="all"
        selectedFilter={selectedFilter}
        onChange={onFilterChange}
        count={controls.length}
      />

      <RadioButton
        id="show-implemented"
        filter="implemented"
        selectedFilter={selectedFilter}
        onChange={onFilterChange}
        count={implemented.length}
        percentage={(implemented.length / controls.length).toFixed(2)}
      />

      <RadioButton
        id="show-not-implemented"
        filter="not-implemented"
        selectedFilter={selectedFilter}
        onChange={onFilterChange}
        count={notImplemented.length}
        percentage={(notImplemented.length / controls.length).toFixed(2)}
      />

      <RadioButton
        id="show-unknown"
        filter="unknown"
        selectedFilter={selectedFilter}
        onChange={onFilterChange}
        count={unknown.length}
        percentage={(unknown.length / controls.length).toFixed(2)}
      />

    </div>
  </div>
}

export default FilterControls
