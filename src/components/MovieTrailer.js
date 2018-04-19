import React from 'react';
import YouTube from 'react-youtube';

const MovieTrailer = () => (
  <div style={divStyle}>
    <h2 style={subStyle}>
      <span style={spanStyle}>NOW SHOWING</span>
    </h2>
    <div style={{
      margin: '20px auto'
    }}>
      <YouTube videoId="txBN-zGSHxc" opts={opts}/>
    </div>
    <div style={{
      margin: '20px auto'
    }}>
      <YouTube videoId="txBN-zGSHxc" opts={opts}/>
    </div>
    <div style={{
      margin: '20px auto'
    }}>
      <YouTube videoId="txBN-zGSHxc" opts={opts}/>
    </div>
    <div style={{
      margin: '20px auto'
    }}>
      <YouTube videoId="txBN-zGSHxc" opts={opts}/>
    </div>
  </div>
);
const opts = {
  height: '300px',
  width: '600px',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
};
const divStyle = {
  margin: '0 3rem',
  padding: '2rem',
  textAlign: 'center'
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
export default MovieTrailer;