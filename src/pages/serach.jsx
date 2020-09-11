import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import MyNavbar from '../components/myNavbar';

export default (props) => {
    console.log(props);
    return(
    <Container fluid="md">
        <MyNavbar/>
        <br/>
        <Row>
            <Col><h1>Your serach is {props.search}</h1></Col>
        </Row>
      </Container>
    )
}