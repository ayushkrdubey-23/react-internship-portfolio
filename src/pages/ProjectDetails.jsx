import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Project Details</h1>

      <h2>Project ID : {id}</h2>

      <p>
        This page uses React Router Dynamic Routing.
      </p>
    </div>
  );
}

export default ProjectDetails;