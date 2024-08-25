import React from 'react';

// Import images
import ProjectImage1 from './images/P3 - Style.png';
import ProjectImage2 from './images/P1 - DBMS.png';
import ProjectImage3 from './images/P2 - TODOLIST.png';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <center><div className="separator"></div></center> 
      <br></br><br></br>
      <div className="project-container">
        <div className="project">
          <a href="https://keerthanaabhat.github.io/Project/StepUpStyle/Motioncut%20Project/" target="_blank" rel="noopener noreferrer">
            <img src={ProjectImage1} alt="Project Image" />
          </a>
          <div className="project-info">
            <h3>E-Commerce Website</h3>
            <p>E-commerce website named "StepUpStyle". This was a great opportunity to apply my skills in HTML, CSS, and JavaScript. The product page includes elements such as product images, detailed descriptions, and pricing information.</p>
          </div>
        </div>

        <div className="project">
          <a href="https://keerthanaabhat.github.io/Project/Event%20Managemnt%20System/DBMS/" target="_blank" rel="noopener noreferrer">
            <img src={ProjectImage2} alt="Project Image" />
          </a>
          <div className="project-info">
            <h3>Event Management System</h3>
            <p>Designed and implemented a database management system using HTML, CSS, and JavaScript for the front end, and PHP, XAMPP, and phpMyAdmin for backend storage, ensuring efficient storage and retrieval of user registration data while effectively managing user registration details.</p>
          </div>
        </div>

        <div className="project">
          <a href="https://keerthanaabhat.github.io/Project/ToDoList%20-%20Project/To%20Do%20List/" target="_blank" rel="noopener noreferrer">
            <img src={ProjectImage3} alt="Project Image" />
          </a>
          <div className="project-info">
            <h3>To Do List</h3>
            <p>Add Task: Users can input tasks to be added to the list.
              Delete Task: Easily remove tasks from the list.
              Edit Task: Modify task details directly.
              Task Completion: Tick tasks off once they are completed.
              Live Task Count: A dynamic count of remaining tasks to complete.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
