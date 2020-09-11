import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import MyNavbar from '../components/myNavbar';

export default () => {
    return(
        <Container fluid="md">
        <MyNavbar/>
        <br/>
        <Row>
            <Col><h2>Page2</h2></Col>
        </Row>
      </Container>
    )
}