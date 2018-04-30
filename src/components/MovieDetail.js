import React, {Component} from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import movieList from '../api/movieAPI.json'
import YouTube from 'react-youtube';
import {Jumbotron, Button} from 'react-bootstrap';

class MovieDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentMovie: null
    }
  }

  componentDidMount() {
    const movieId = this.props.match.params.id;
    const weekDay = this.props.match.params.weekday;
    const currentMovie = this.findMovieFromList(weekDay, movieId);
    this.setState({currentMovie: currentMovie})
  }

  findMovieFromList = (weekDay, id) => {
    let currentDayMovieList = []
    Object
      .keys(movieList.weeklyList)
      .forEach(function (list) {
        if (movieList.weeklyList[list].weekday == weekDay) {
          currentDayMovieList = movieList.weeklyList[list]
        }
      });
    let currentMovie = currentDayMovieList
      .movieList
      .find(value => value.movieId == id)
    return currentMovie
  }

  render() {
    return (
      <Grid>
      <h2 style={{marginBottom:'2rem'}}>Movie: {this.state.currentMovie && this.state.currentMovie.title}</h2>
        <Row>
          <Col xs={12} md={6}>
            <YouTube
              videoId={this.state.currentMovie && this.state.currentMovie.youtubeId}
              opts={opts}/>
          </Col>
          <Col xs={12} md={5} mdOffset={1}>
            <Jumbotron style={{height:'300px'}}>
              <p>
                {this.state.currentMovie && this.state.currentMovie.description}
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Button bsStyle="primary" style={{marginBottom:'80px'}}>Book Now</Button>
      </Grid>
    )
  }
}
const opts = {
  height: '300px',
  width: '500px',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
};
export default MovieDetail;
