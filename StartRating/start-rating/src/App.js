import { useState } from 'react';
import './App.css';
import { StarRating } from './component/StartRating';

function App() {

  return (
    <div>
      <StarRating index={10} />
    </div>
  );
}

export default App;
