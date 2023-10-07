import { Link } from "react-router-dom";
import "./Styles/Header.css"
function Header() {
  return (
    <div className="Container">
      <div className="LOGO">
        <h1>TECHYSTAR</h1>
      </div>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  );
}
export default Header;
