import React, {Component} from 'react';
import {Row, Col,Grid} from 'react-bootstrap';
import movieList from '../api/movieAPI.json'

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
    console.log(currentMovie);
  }

  findMovieFromList = (weekDay, id) => {
    let currentDayMovieList = []
    Object.keys(movieList.weeklyList).forEach(function(list) {
      
      if (movieList.weeklyList[list].weekday == weekDay) {

        currentDayMovieList = movieList.weeklyList[list]
      }
    });
    let currentMovie = currentDayMovieList.movieList.find(value => value.movieId == id)
    return currentMovie
  }

  render() {
  return(
    <Grid style = {{margin: '10px auto'}}>
    <Row>
        <Col xs={12} md={6}>
        {this.props.match.params.weekday}
        </Col>
        <Col xs={12} md={6}>
        {this.props.match.params.id}
        </Col>
    </Row>
  </Grid>
)}
}
export default MovieDetail;
