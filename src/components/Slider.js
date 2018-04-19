import React from 'react';
import {Carousel} from 'react-bootstrap';

const Slider = () => (
  <Carousel>
    <Carousel.Item>
      <img width={940} height={450} alt='940x450' style={{margin: 'auto'}} src="http://via.placeholder.com/940x450"/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>COMMING SOON</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={940} height={450} alt='940x450' style={{margin: 'auto'}} src="http://via.placeholder.com/940x450"/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>NOW SHOWING</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={940} height={450} alt='940x450' style={{margin: 'auto'}} src="http://via.placeholder.com/940x450"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>NOW SHOWING</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
export default Slider;