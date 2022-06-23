import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

import "../App.css";
function Header() {
  return (
    <Navbar className="custom-navbar" variant="dark">
      <Navbar.Brand href="/">
        <Container fluid>Informatorio React 2022</Container>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
