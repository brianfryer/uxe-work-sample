import React from 'react'
import { Link } from 'react-router-dom'
import StatusIndicator from '../StatusIndicator'

const ControlList = ({ controls, location }) => (
  <div className="ControlList">
    <h2 className="ControlList-heading">
      Controls
    </h2>
    <div role="table">

      <div role="rowgroup">
        <div className="ControlList-table-headings-container" role="row">
          <h3 className="ControlList-table-heading" role="columnheader" aria-sort="none">
            Controls
          </h3>
          <h3 className="ControlList-table-heading" role="columnheader" aria-sort="none">
            Description
          </h3>
          <h3 className="ControlList-table-heading" role="columnheader" aria-sort="none">
            Status
          </h3>
        </div>
      </div>

      <ul role="rowgroup">
        { controls.map((control, i) => (
          <li
            key={control.id} role="row" aria-rowindex={i}
            className={ 'ControlList-item-wrapper' + (control.id.toString() === location ? ' is-active' : '') }>
            <Link className="ControlList-item" to={`/controls/${control.id}`}>

              <span className="ControlList-item-name" role="cell">
                {control.name}
              </span>

              <span className="ControlList-item-description" role="cell">
                {control.text}
              </span>

              <StatusIndicator status={control.state} />

            </Link>
          </li>
        ))}
      </ul>

    </div>
  </div>
)

export default ControlList;
