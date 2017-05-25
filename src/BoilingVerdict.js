import React from 'react';

function BoilingVerdict(props) {
  if(props.celsius >= 100) { // eslint-disable-line
    return <p> Water would boil. </p>
  } else {
    return <p> Water will not boil </p>
  }
}

export default BoilingVerdict;
