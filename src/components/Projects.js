const Projects = (props) => {
    return (
      <div className="Projects">
        {projectsData.map((project, index) => (
          <div className="project-item" key={index}>
            <h2>{project.name}</h2>
            <p>
              <a href={project.github} target="_blank" >View Code on GitHub</a>
            </p>
            <p>
              <a href={project.deployedLink} target="_blank">Visit Live Site</a>
            </p>
            <img src={process.env.PUBLIC_URL + project.screenshot} alt={`Screenshot of ${project.name}`} />
            
          </div>
        ))}
      </div>
    );
  };
const projectsData = [
    {
        name: 'Project 1 - JavaScript',
        github: 'https://github.com/mrunaleepatel/project1',
        deployedLink: 'https://project-1-7yoo.onrender.com',
        screenshot: '/Images/project1screenshot.png'
    },
    {
        name: 'Project 2 - Express',
        github: 'https://github.com/mrunaleepatel/project2',
        deployedLink: 'https://project2-w4ca.onrender.com',
        screenshot: '/Images/project2screenshot.png'
    }
];


// export the component
export default Projects;
