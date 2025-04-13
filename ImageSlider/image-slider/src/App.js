import { useState } from 'react';
import './App.css';
import { ImageSlider } from './component/ImageSlider';

function App() {
  const imageArr = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
  const [activeIndexImg, setActiveIndexImg] = useState(0);
  const onPrevClick = () => {
    setActiveIndexImg((ac) => ac - 1);
  };
  const onNextClick = () => {
    setActiveIndexImg((ac) => ac + 1);
  };
  const onButtonClick = (index) => {
    setActiveIndexImg(index);
  };
  return (
    <>
      <ImageSlider onButtonClick={onButtonClick} imageArray={imageArr} onPrevClick={onPrevClick} onNextClick={onNextClick} activeIndexImg={activeIndexImg} />
    </>
  );
}

export default App;
