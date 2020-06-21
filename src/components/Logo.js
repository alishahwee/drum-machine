import React from 'react';

export default function Logo(props) {
  return (
    <div className="Logo">
      <span className="Logo--rainbow-text">{props.name}</span>
    </div>
  );
}
