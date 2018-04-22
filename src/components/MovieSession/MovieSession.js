import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import MovieBox from './MovieBox'
class MovieSession extends Component {
  render() {
    return (
      <div style={{
        padding: '10px'
      }}>
        <h2 style={subStyle}>
          <span style={spanStyle}>WHAT'S ON</span>
        </h2>
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" style={{margin: '0 20px'}}>
          <Tab eventKey={1} title="Monday">
            <MovieBox />
          </Tab>
          <Tab eventKey={2} title="Tuesday">
          <MovieBox />
          </Tab>
          <Tab eventKey={3} title="Wednesday">
          <MovieBox />
          </Tab>
          <Tab eventKey={4} title="Thursday">
          <MovieBox />
          </Tab>
          <Tab eventKey={5} title="Friday">
          <MovieBox />
          </Tab>
          <Tab eventKey={6} title="Saturday">
          <MovieBox />
          </Tab>
          <Tab eventKey={7} title="Sunday">
          <MovieBox />
          </Tab>

        </Tabs>
      </div>
    );
  }
}
const subStyle = {
  textAlign: 'center',
  height: '25px',
  position: 'relative',
  margin: '20px auto',
  borderTop: '2px solid #cbcbd1',
  fontSize: '17px',
  color: '#ffff',
  fontWeight: '700'
}
const spanStyle = {
  paddingLeft: '50px',
  paddingRight: '50px',
  position: 'relative',
  top: '1px',
  backgroundColor: '#eb4d4b'
}
export default MovieSession;