import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import '../pages/index.css';

function NavbarComp(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="navbar__container">
          <Nav>
            <Nav.Link className="navbar__link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="navbar__link" href="/products">
              Products
            </Nav.Link>
            <Nav.Link className="navbar__link" href="/favorites">
              Favorites
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavbarComp;
