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

  // componentDidMount() {
  //   const movieId = this.props.match.params.id;
  //   const weekDay = this.props.weekday
  //   const currentMovie = this.findMovieFromList();
  //   console.log(JSON.stringify(currentMovie));
  // }

  // findMovieFromList = () => {
  //   const currentDayMovieList = movieList.weeklyList.find(value => {
  //     debugger;
  //     value.weekday == this.props.match.params.weekDay;
  //   });
  //   console.log(currentDayMovieList)
  //   const currentMovie = currentDayMovieList.find(value => {
  //     debugger;
  //     value.movieId == this.props.match.params.id;
  //   })
  //   return currentMovie
  // }

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
