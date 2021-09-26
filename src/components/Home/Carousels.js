import React from "react";
import { Carousel } from "react-bootstrap";
import Img1 from '../../images/Carousels/01.png';
import Img2 from '../../images/Carousels/02.png';
import Img3 from '../../images/Carousels/03.png';


export default function Carousels() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={Img1}
            alt="First slide"
            height="300px"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={Img2}
            alt="Second slide"
            height="300px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img3}
            alt="Third slide"
            height="300px"
            
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
