import React from 'react';
import WrapperAtomSpinner from './styles/WrapperAtomSpinner';

const AtomSpinner = () => {
  return (
    <WrapperAtomSpinner data-cy="atom-spinner">
      <div className="la-ball-atom la-3x">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </WrapperAtomSpinner>
  );
};

export default AtomSpinner;
