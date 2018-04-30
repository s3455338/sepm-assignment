import React from 'react';
import {Thumbnail, Row, Col,Grid} from 'react-bootstrap';
import { Link } from "react-router-dom";

const MovieBox = (props) => {
  return (
  <Grid style = {{margin: '30px auto'}}>
  <Row>
    {
     props.movieList && props.movieList.map((item, index) => {
      return(
        <Col xs={6} md={3} key={index}>
        <Link to ={'/movie/' + props.weekday + '/' + item.movieId}>
        <Thumbnail src={item.thumbnailUrl} alt={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Thumbnail>
        </Link>
      </Col>
      )})
    }
  </Row>
</Grid>
)};

export default MovieBox;