import React, {Component} from 'react';
import Header from './components/Header';
import MovieTrailer from './components/MovieTrailer'
import {PageHeader} from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <PageHeader style={pageHeaderStyle}>
          Cinema Aurora
        </PageHeader>
        <MovieTrailer />
      </div>
    );
  }
}
const pageHeaderStyle = {
  color: '#535c68',
  marginLeft: '3.75rem',
  border:'none'
}
export default App;
