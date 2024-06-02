import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectID: null,
    }));
  }

  function handleAddProject(projectData) {
    console.log('handleAddProject called with:', projectData);

    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      console.log('New project to be added:', newProject);

      return {
        ...prevState,
        selectedProjectID: undefined, // Optional: Set the selected project to the new one
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log('Current projectsState:', projectsState);

  let content;

  if (projectsState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects} 
      />
      {content}
    </main>
  );
}

export default App;
