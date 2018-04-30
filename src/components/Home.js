import React, {Component} from 'react';
import MovieTrailer from './MovieTrailer'
import Slider from './Slider';
import MovieSession from './MovieSession/MovieSession';

class Home extends Component {
  
  render() {
    return (
      <div>
        <Slider />
        <MovieTrailer />
        <MovieSession />
      </div>
    );
  }
}

export default Home;
