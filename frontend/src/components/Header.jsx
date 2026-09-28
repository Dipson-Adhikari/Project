import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/shop.png";
import { FaShoppingCart } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { NavLink } from "react-router";

function Header() {
  return (
    <Navbar bg="info" variant="light" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} width="40" height="40" alt="Logo" />
          Himalaya Shop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar" />

        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/cart">
              <FaShoppingCart /> Cart
            </Nav.Link>

            <Nav.Link as={NavLink} to="/login">
              <CiLogin /> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;