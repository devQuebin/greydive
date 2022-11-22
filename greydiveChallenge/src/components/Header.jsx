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
