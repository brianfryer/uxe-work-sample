import React from 'react'
import { ReactComponent as IconCheckmark } from '../../icons/icon-checkmark.svg'
import { ReactComponent as IconTimes } from '../../icons/icon-times.svg'
import { ReactComponent as IconQuestionMark } from '../../icons/icon-question-mark.svg'

const StatusIndicator = ({ status }) => {
  const indicator = status
    ? status.isImplemented
      ? { modifier: 'is-implemented', label: 'Implemented', icon: IconCheckmark }
      : { modifier: 'is-not-implemented', label: 'Not Implemented', icon: IconTimes }
    : { modifier: 'is-unknown', label: 'Unknown', icon: IconQuestionMark }

  const Icon = indicator.icon

  return <span className={`StatusIndicator ${indicator.modifier}`}>
    <span className="StatusIndicator-label">{indicator.label}</span>
    <Icon className="StatusIndicator-icon" />
  </span>
}

export default StatusIndicator
