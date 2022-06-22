import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

import "../App.css";
function Header() {
  return (
    <Navbar className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <svg
            alt=""
            src="../logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Informatorio React 2022
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
