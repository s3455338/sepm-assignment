import React, {Component} from 'react';
import Header from './components/Header';
import MovieTrailer from './components/MovieTrailer'
import {PageHeader} from 'react-bootstrap';
import Footer from './components/Footer';
import Slider from './components/Slider';
import MovieSession from './components/MovieSession/MovieSession';
import {Route, Link} from "react-router-dom";
import Home from './components/Home';
import MovieDetail from './components/MovieDetail'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <PageHeader style={pageHeaderStyle}>
        <strong>Cinema Aurora</strong>
        </PageHeader>
        <Route exact path="/" component={Home}/>
        <Route
          path="/movie/:weekday/:id"
          component={MovieDetail}/>
        <Footer/>

      </div>
    );
  }
}
const pageHeaderStyle = {
  fontWeight: '700',
  color: '#eb4d4b',
  marginLeft: '3.75rem',
  border: 'none'
}
export default App;
