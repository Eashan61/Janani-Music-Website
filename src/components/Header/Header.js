import './Header.css'
import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
 return (
  <div>
   <Navbar bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand to="/home"> <span className="brand">Janani Music </span></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink className="text-decoration-none mx-3 text-light" to="/home">Home</NavLink>
        <NavLink className="text-decoration-none mx-3 text-light" to="/services">Services</NavLink>
        <NavLink className="text-decoration-none mx-3 text-light" to="/about">About us</NavLink>
        <NavLink className="text-decoration-none mx-3 text-light" to="/contract">Contract</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  </div>
 );
};

export default Header;<h3>This is header</h3>