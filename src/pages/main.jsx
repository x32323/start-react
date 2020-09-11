import React from 'react';
import {Container} from 'react-bootstrap'
import MyNavbar from '../components/myNavbar';

export default () => {
    return(
      <Container>
        <MyNavbar/>
        <br/>
        <h2>Hello World</h2>
      </Container>
    )
}