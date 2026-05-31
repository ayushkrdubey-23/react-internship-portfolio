import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Credit Card Fraud Detection",
      description: "ML model to identify fraud transactions",
    },
    {
      id: 2,
      title: "Customer Churn Prediction",
      description: "Predict customer retention",
    },
    {
      id: 3,
      title: "Student Performance Prediction",
      description: "Analyze student performance",
    },
    {
      id: 4,
      title: "House Price Prediction",
      description: "Regression-based prediction",
    },
    {
      id: 5,
      title: "Sentiment Analysis Dashboard",
      description: "NLP-based dashboard",
    },
    {
      id: 6,
      title: "MIMA Fashion(E-Commerce Website)",
      description: "MIMA Fashion is a fashion e-commerce platform.",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Projects</h1>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default Projects;