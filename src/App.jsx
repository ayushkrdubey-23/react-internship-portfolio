import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import ApiProject from "./pages/ApiProject";
import Todo from "./pages/Todo";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/projects" element={<Projects />} />

        <Route
          path="/project/:id"
          element={<ProjectDetails />}
        />

        <Route
          path="/api"
          element={<ApiProject />}
        />

        <Route
          path="/todo"
          element={<Todo />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;