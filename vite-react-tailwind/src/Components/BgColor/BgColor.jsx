import React, { useState } from 'react';

const BackgroundChanger = () => {
  // Define an array of custom colors
  const colors = ['brown', 'green', 'pink', 'powderblue', 'purple'];

  // Initialize state for selected color
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  // Function to handle color change
  const changeBackgroundColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div style={{ backgroundColor: selectedColor, minHeight: '100vh', padding: '20px' }}>
      <h1>Background Changer</h1>
      <p>Select a color:</p>
      <div>
        {/* Render buttons for each color */}
        {colors.map((color, index) => (
          <button key={index} onClick={() => changeBackgroundColor(color)} style={{ backgroundColor: color, marginRight: '10px', marginBottom: '10px', borderRadius: '5px', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
            {color === selectedColor ? 'Selected' : 'Select'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BackgroundChanger;
 