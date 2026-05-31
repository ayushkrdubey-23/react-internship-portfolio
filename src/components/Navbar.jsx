import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#222" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>
        Home
      </Link>

      <Link to="/about" style={{ color: "white", marginRight: "15px" }}>
        About
      </Link>

      <Link to="/projects" style={{ color: "white", marginRight: "15px" }}>
        Projects
      </Link>

      <Link to="/api" style={{ color: "white", marginRight: "15px" }}>
        API Project
      </Link>

      <Link to="/todo" style={{ color: "white" }}>
        Todo App
      </Link>
    </nav>
  );
}

export default Navbar;
