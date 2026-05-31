import { Link } from "react-router-dom";

function ProjectCard({ id, title, description }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <h3>{title}</h3>

      <p>{description}</p>

      <Link to={`/project/${id}`}>
        View Details
      </Link>
    </div>
  );
}

export default ProjectCard;