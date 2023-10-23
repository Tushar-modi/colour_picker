// ColorPicker.js
import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    document.getElementById('color-picker-container').style.backgroundColor = color; // Set background color of the container
  };

  const handlePickButtonClick = () => {
    setSelectedColor(null);
    document.getElementById('color-picker-container').style.backgroundColor = ''; // Reset background color to default
  };

  return (
    <div className="color-picker-container" id="color-picker-container">
      <div className="color-picker">
        <button className="pick-button" onClick={handlePickButtonClick}>
          Pick a color
        </button>
        {selectedColor === null ? (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-box"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ColorPicker;
