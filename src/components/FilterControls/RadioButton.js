import React from 'react'
import { ReactComponent as IconCheckmark } from '../../icons/icon-checkmark.svg'
import { ReactComponent as IconTimes } from '../../icons/icon-times.svg'
import { ReactComponent as IconQuestionMark } from '../../icons/icon-question-mark.svg'

const RadioButton = ({ id, filter, selectedFilter, count, percentage, onChange }) => {

  const button = function(thing) {
    switch(thing) {
      case 'implemented':
        return { label: `${count} implemented`, modifier: 'is-implemented', icon: IconCheckmark }
        break
      case 'not-implemented':
        return { label: `${count} not implemented`, modifier: 'is-not-implemented', icon: IconTimes }
        break
      case 'unknown':
        return { label: `${count} unknown`, modifier: 'is-unknown', icon: IconQuestionMark }
        break
      default:
        return { label: `All ${count} controls`, modifier: null, icon: null }
        break
    }
  }(filter)

  const Icon = button.icon

  return <span className="FilterControls-radioButton-wrapper">
    <input
      className="FilterControls-radioButton-toggle"
      type="radio"
      id={id}
      name="controls-filter"
      defaultValue={filter}
      onChange={onChange}
      defaultChecked={filter === selectedFilter ? true : undefined}
    />
    <label
      className="FilterControls-radioButton"
      htmlFor={id}>
      {Icon ? <Icon className={ 'FilterControls-radioButton-icon ' + (button.modifier ? button.modifier : '') } /> : ''}
      <span>{button.label}</span>
      {percentage && <span className="FilterControls-radioButton-percentage">{percentage}%</span>}
    </label>
  </span>
}

export default RadioButton
