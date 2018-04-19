import React, {Component} from 'react';
import Header from './components/Header';
import MovieTrailer from './components/MovieTrailer'
import {PageHeader} from 'react-bootstrap';
import Footer from './components/Footer';
import Slider from './components/Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <PageHeader style={pageHeaderStyle}>
          <strong>Cinema Aurora</strong>
        </PageHeader>
        <Slider />
        <MovieTrailer />
        <Footer/>
      </div>
    );
  }
}
const pageHeaderStyle = {
  fontWeight: '700',
  color: '#eb4d4b',
  marginLeft: '3.75rem',
  border:'none',
}
export default App;
