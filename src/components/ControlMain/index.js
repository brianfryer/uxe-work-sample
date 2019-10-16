import React from 'react'
import StatusIndicator from '../StatusIndicator'

const ControlMain = ({ control }) => (
  <div className="ControlMain-wrapper">
    <div className="ControlMain">

      <h1 className="ControlMain-heading">
        {control.name}
      </h1>

      <h2 className="ControlMain-status">
        <StatusIndicator status={control.state} />
      </h2>

      <div className="ControlMain-description">
        <p>{control.text}</p>
      </div>

    </div>
  </div>
)

export default ControlMain;
