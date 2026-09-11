import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/shop.png';
import { FaShoppingCart } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

function Header(){
    return(
        <Navbar bg="info" variant="light" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="HimalayanShop">
                    <img src={logo} width="40" height="40" alt="Logo" />
                    Himalaya Shop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar"  >
                    <Nav className="ms-auto">
                        <Nav.Link href="Cart"><FaShoppingCart /> Cart</Nav.Link>
                        <Nav.Link href="Login"><CiLogin /> Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;