import React, {useState} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

export default () => {

    const [inputInfo, setInputInfo] = useState(null);

    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="https://react-bootstrap.github.io/getting-started/introduction/">
                Navbar
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Page1">Page1</Nav.Link>
                <Nav.Link href="/Page2">Page2</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" 
                    onChange = {(e) => setInputInfo(e.target.value)}/>
                <Button variant="outline-info" href={`/search/${inputInfo}`}>Search</Button>
            </Form>
        </Navbar>
    )
}