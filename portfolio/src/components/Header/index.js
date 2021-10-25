import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header(props) {
    const {
        currentCategory,
        setCurrentCategory,
    } = props;
    return <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#">&nbsp;Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#about" onClick={() => { setCurrentCategory('about')}}>About Me</Nav.Link>
                <Nav.Link href="#my-work" onClick={() => { setCurrentCategory('my-work')}}>My Work</Nav.Link>
                <Nav.Link href="#resume" onClick={() => { setCurrentCategory('resume')}}>Resume</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}
export default Header;