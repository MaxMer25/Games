import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styled from "styled-components";

function PageNavbar() {
  return (
    <StyledNavbar variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">GameHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Games">
              <NavDropdown.Item href="/games/tiktaktoe">
                TikTakToe
              </NavDropdown.Item>
              <NavDropdown.Item href="/games/schach">Schach</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/upcoming">
                Upcoming Games!
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

const StyledNavbar = styled(Navbar)`
  background-color: #d5dcf9;
`;

export default PageNavbar;
