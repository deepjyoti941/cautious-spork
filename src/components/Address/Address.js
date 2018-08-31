import React from 'react';
import './address.scss';

const createMarkup = props => {
  return { __html: props.address };
};
const Address = props => {
  return (
    <div
      className="address-results"
      dangerouslySetInnerHTML={createMarkup(props)}
    />
  );
};

export default Address;
