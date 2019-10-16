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
        percentage={Math.round(implemented.length / controls.length * 100)}
      />

      <RadioButton
        id="show-not-implemented"
        filter="not-implemented"
        selectedFilter={selectedFilter}
        onChange={onFilterChange}
        count={notImplemented.length}
        percentage={Math.round(notImplemented.length / controls.length * 100)}
      />

      <RadioButton
        id="show-unknown"
        filter="unknown"
        selectedFilter={selectedFilter}
        onChange={onFilterChange}
        count={unknown.length}
        percentage={Math.round(unknown.length / controls.length * 100)}
      />

    </div>
  </div>
}

export default FilterControls
