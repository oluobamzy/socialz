import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import "./projects.css";

const Projects = () => {
    return (
        <div className="projects-container">
             <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    );
};
export default Projects;