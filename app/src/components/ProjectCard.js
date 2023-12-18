import "./projects.css";
const ProjectCard = () => {
    return (
        <div className="card">
            <div className="projects-card">
                 <img src="https://nmcdn.io/e186d21f8c7946a19faed23c3da2f0da/347bed083486499c98f1609efa95efbd/files/Web-Design-Project-Post_Inspiration_.jpg" alt="project1" />
                  <h3>Business Agency Website Design</h3>
                  <p>We developed a website for a leading agency in brand management and startegy development... From user research, to user persona, to wireframing and finally interface design before setting up a proper befitting website. </p>
                  <a href="/project1">View Project</a>
            </div>
        </div>
    );
};
export default ProjectCard;