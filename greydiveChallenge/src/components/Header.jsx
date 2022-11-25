import logo from "../simulacr..png";
import { Link } from "react-router-dom";
import "../App.css";

function Header({ items }) {
  console.log("🚀 ~ file: Header.jsx ~ line 6 ~ Header ~ data", items);

  return (
    <header className="header">
      <a href="https://www.greydive.com/">
        <img src={logo} className="logo" alt="simulacr" />
      </a>

      <nav>
        <ul className="nav-links">
          {items.map((item, i) => (
            <li key={item.idVideo}>
              <Link className="link" to={`/tester${i + 1}`}>
                Tester #{i + 1}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Header;

/* 
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

    <header className="header">
      <a href="https://www.greydive.com/">
        <img src={logo} className="logo" alt="simulacr" />
      </a>

      <nav>
        <ul className="nav-links">
          {items.map((item, i) => (
            <li key={item.idVideo}>
              <Link className="link" to={`/tester${i + 1}`}>
                Tester #{i + 1}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>

<Navbar className="header" expand="lg">
      <Container>
        <Navbar.Brand href="https://www.greydive.com/">
          <img src={logo} className="logo" alt="simulacr" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className="nav-links">
              {items.map((item, i) => (
                <li key={item.idVideo}>
                  <Nav.Link className="link" href={`/tester${i + 1}`}>
                    Tester #{i + 1}
                  </Nav.Link>
                </li>
              ))}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
*/
