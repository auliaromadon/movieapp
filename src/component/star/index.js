import React from 'react';
import propTypes from 'prop-types';
// import './index.scss';

export default function Star({ className, value, height, width, spacing }) {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPos = 0;
  for (let index = 0; index < 10 && index < value - decimals; index++) {
    leftPos = leftPos + width;
    star.push(<div key={`star-${index}`} className='star' style={{ left: index * width, height: height, width: width, marginRight: spacing }}></div>);
  }

  if (decimals > 0 && value <= 5) {
    star.push(<div key={`starWidthDecimals`} className='star' style={{ left: leftPos, height: height, width: decimals * width - spacing }}></div>);
  }

  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(<div key={`starPlaceholder-${index}`} className='star placeholder' style={{ left: index * width, height: height, width: width, marginRight: spacing }}></div>);
  }

  return (
    <>
      <div className={['stars', className].join(' ')}>
        {star}
        {starPlaceholder}
      </div>
    </>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  hieght: propTypes.number,
};
