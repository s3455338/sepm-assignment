import React from 'react';
import {Carousel} from 'react-bootstrap';
import pic1 from '../assets/images/pic1.jpg'
import pic2 from '../assets/images/pic2.jpg'
import pic3 from '../assets/images/pic3.jpg'


const Slider = () => (
  <Carousel>
    <Carousel.Item>
      <img width={940} height={450} alt='940x450' style={{margin: 'auto'}} src={pic1}/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>COMMING SOON</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={940} height={450} alt='940x450' style={{margin: 'auto'}} src={pic2}/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>NOW SHOWING</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={940} height={450} alt='940x450' style={{margin: 'auto'}} src={pic3}/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>NOW SHOWING</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
export default Slider;