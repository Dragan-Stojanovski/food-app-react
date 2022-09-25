import "./Header.css";
import { Link } from "react-router-dom";
export const Header = () => (
  <div className="header-style">
    <div className="top-logo">
    <Link
    className="link-to"
    to={`/`}
  > <h1>Bon Apetit!</h1>
  </Link>
    </div>
    <div className="nav-top">
      <ul>
        <li>
    <Link
    className="link-to"
    to={`/`}
  > Home</Link>
  </li>
  <li>
    <Link
    className="link-to"
    to={`/pizzas`}
  > Show Pizzas</Link>
  </li>
  </ul>
  </div>
  </div>
);
