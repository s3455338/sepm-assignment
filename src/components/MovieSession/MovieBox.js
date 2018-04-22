import React from 'react';
import {Thumbnail, Row, Col,Grid} from 'react-bootstrap';

const MovieBox = () => (
  <Grid style = {{margin: '30px auto'}}>
  <Row>
    <Col xs={6} md={3}>
      <Thumbnail src="http://via.placeholder.com/200x200" alt="200x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail src="http://via.placeholder.com/200x200" alt="200x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail src="http://via.placeholder.com/200x200" alt="200x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={3}>
    <Thumbnail src="http://via.placeholder.com/200x200" alt="200x200">
      <h3>Thumbnail label</h3>
      <p>Description</p>
    </Thumbnail>
  </Col>
  </Row>
</Grid>
);

export default MovieBox;