
import { useState } from 'react';
import { RandomColorGenerator } from './RandomColorGenerator/random-color-generator';

function App() {

  // Setting two states
  const [color, setColor] = useState({ value: `rgb(60, 234, 237)` });
  const [types, setType] = useState('rgb');

  // Selecting type to generate
  const onSelectType = (type) => {
    setType(type);
  };

  // Generating colors
  const onGenerateColors = () => {
    if (types === 'rgb') {
      const red = Math.random() * 255;
      const green = Math.random() * 255;
      const blue = Math.random() * 255;
      const colors = { value: `rgb(${Math.round(red)},${Math.round(green)},${Math.round(blue)})` }

      setColor(colors);
    }
    if (types === 'hex') {
      const colors = { value: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0') }

      setColor(colors);
    }
  };

  return (
    <RandomColorGenerator color={color} onGenaretColor={onGenerateColors} onSelectType={onSelectType} />
  );
}

export default App;
