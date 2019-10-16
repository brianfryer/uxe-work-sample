import React from 'react';

const PageHeader = ({ heading, subheading }) => (
  <div className="PageHeader">
    <h1 className="PageHeader-heading">{heading}</h1>
    <p className="PageHeader-subheading">{subheading}</p>
  </div>
)

export default PageHeader;
