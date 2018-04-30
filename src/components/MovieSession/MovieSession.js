import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import MovieBox from './MovieBox'

import movieList from '../../api/movieAPI.json'

class MovieSession extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weeklyList: movieList.weeklyList
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div style={{
        padding: '10px'
      }}>
        <h2 style={subStyle}>
          <span style={spanStyle}>WHAT'S ON</span>
        </h2>
        <Tabs
          defaultActiveKey={2}
          id="uncontrolled-tab-example"
          style={{
          margin: '0 20px'
        }}>
          {this
            .state
            .weeklyList
            .map((item, index) => {
              return (
                <Tab key={index + 1} eventKey={index + 1} title={item.weekday}>
                  <MovieBox movieList={item.movieList} weekday={item.weekday}/>
                </Tab>
              )
            })
}

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