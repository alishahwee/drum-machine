import React from 'react';
import DrumPad from './DrumPad.js';

export default function PadBank(props) {
  const colors = [
    "#FE2204",
    "#FFA500",
    "#FECE00",
    "#B5DA01",
    "#1DA50D",
    "#376162",
    "#4F6E95",
    "#7C3BA5",
    "#C199D3"
  ];
  
  let padBank = props.currentBankPad.map((bankObj, i) => {
    return (
      <DrumPad
        keyCode={bankObj.keyCode}
        keyTrigger={bankObj.keyTrigger}
        clipId={bankObj.id}
        clipUrl={bankObj.url}
        clipColor={colors[i]}
        clipVol={props.clipVol}
        power={props.power}
        updateDisplay={props.updateDisplay}
        updateBorder={props.updateBorder}
      />
    );
  });
  return <div className="PadBank">{padBank}</div>;
}


