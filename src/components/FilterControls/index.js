import React from 'react'
import RadioButton from './RadioButton'

const FilterControls = ({ controls }) => {
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
    <p>
      Filter Controls
    </p>
    <div className="FilterControls">

      <RadioButton
        id="show-all"
        filter="All"
        label={`All ${controls.length} controls`}
      />
      <RadioButton
        id="show-implemented"
        filter={true}
        label={`${implemented.length} implemented`}
        percentage={(implemented.length / controls.length).toFixed(2)}
      />
      <RadioButton
        id="show-not-implemented"
        filter={false}
        label={`${notImplemented.length} not implemented`}
        percentage={(notImplemented.length / controls.length).toFixed(2)}
      />
      <RadioButton
        id="show-unknown"
        filter="Unknown"
        label={`${unknown.length} unknown`}
        percentage={(unknown.length / controls.length).toFixed(2)}
      />

    </div>
  </div>
}

export default FilterControls
