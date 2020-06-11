import React from 'react';
import DrumPad from './DrumPad.js';

export default function PadBank(props) {
  let bank = props.currentBank.map((bankObj) => {
    return (
      <DrumPad />
    );
  });
  return (
    <div className="PadBank">
      {bank}
    </div>
  );
}