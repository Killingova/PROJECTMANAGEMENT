import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: []
  });

  function handleSelectProject(id) {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectID: id,
    }));
  }

  function handleStartAddProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectID: null,
    }));
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectID: undefined,
    }));
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectID);

  let content = <SelectedProject project={selectedProject} />;

  if (projectsState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects} 
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
