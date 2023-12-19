import Footer from "./Footer";
import Nav from "./Nav";
import ProjectCard from "./ProjectCard";
import "./projects.css";

const Projects = () => {
    return (
        <div className="projects-container">
            <Nav />
            <h1>Projects</h1>
            <div className="projects">
             <ProjectCard />
            <ProjectCard />
            </div>
            
        </div>
    );
};
export default Projects;