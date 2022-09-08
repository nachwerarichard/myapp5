import { Outlet, Link } from "react-router-dom";
import "./layout.css";
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
        <li>
            <Link to="/signup" style={linkStyle}>Sign Up</Link>
          </li>
          <li>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li>
            <Link to="/blog" style={linkStyle}>Blogs</Link>
          </li>
          <li>
            <Link to="/contanct" style={linkStyle}>Contact</Link>
          </li>
          <li>
          <Link to="/about" style={linkStyle}>About</Link>
          </li>
          <li>
          <Link to="/signin" style={linkStyle}>Sign In</Link>
          </li>
          <li>
          <Link to="/NoPage" style={linkStyle}>NoPage</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;