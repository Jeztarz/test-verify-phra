
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';
function Cover() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (

        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/cover.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/cover.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/cover.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    )
}

export default Cover;