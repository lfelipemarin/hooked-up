/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';
import './switch.styles.scss';

interface SwitchProperties {
  isOn: boolean; // Determines the state of the switch
  handleToggle: () => void; // Function to handle toggle
  onColor?: string; // Optional color for the ON state
  offColor?: string; // Optional color for the OFF state
  id?: string; // Optional id to avoid conflicts
}

const Switch: FC<SwitchProperties> = ({
  isOn,
  handleToggle,
  onColor = '#4caf50',
  offColor = '#ccc',
  id = `switch-${Math.random().toString(36).slice(2, 11)}` // Generate unique id
}) => (
  <div className="switch">
    <input
      checked={isOn}
      onChange={handleToggle}
      className="switch-checkbox"
      id={id}
      type="checkbox"
    />
    <label
      className="switch-label"
      style={{
        background: isOn ? onColor : offColor
      }}
      htmlFor={id}
    >
      <span className="switch-button" />
    </label>
  </div>
);

export default Switch;
