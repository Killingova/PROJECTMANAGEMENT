import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  // Initialisieren des State für Projekte und Aufgaben
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: []
  });

  // Funktion zum Hinzufügen einer Aufgabe
  function handleAddTask(text) {
    setProjectsState(prevState => {
      const taskId = Math.random(); // Generierung einer zufälligen ID für die Aufgabe
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectID,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks], // Hinzufügen der neuen Aufgabe zum Anfang des Aufgaben-Arrays
      };
    });
  }

  // Funktion zum Löschen einer Aufgabe
  function handleDeleteTask(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id), // Entfernen der Aufgabe mit der angegebenen ID
      };
    });
  }

  // Funktion zum Auswählen eines Projekts
  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: id, // Setzen der ausgewählten Projekt-ID
      };
    });
  }

  // Funktion zum Starten eines neuen Projekts
  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: null, // Setzen der Projekt-ID auf null, um ein neues Projekt hinzuzufügen
      };
    });
  }

  // Funktion zum Abbrechen des Hinzufügens eines neuen Projekts
  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined, // Zurücksetzen der Projekt-ID
      };
    });
  }

  // Funktion zum Hinzufügen eines neuen Projekts
  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random(); // Generierung einer zufälligen ID für das Projekt
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, newProject], // Hinzufügen des neuen Projekts zum Projekt-Array
      };
    });
  }

  // Funktion zum Löschen eines Projekts
  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter(
          project => project.id !== prevState.selectedProjectID // Entfernen des Projekts mit der aktuellen ausgewählten ID
        ),
      };
    });
  }

  // Finden des aktuell ausgewählten Projekts
  const selectedProject = projectsState.projects.find(
    project => project.id === projectsState.selectedProjectID
  );

  // Definieren des Inhalts, basierend auf dem aktuellen Zustand
  let content = (
    <SelectedProject 
      project={selectedProject} 
      onDelete={handleDeleteProject} 
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  // Rückgabe des Hauptlayouts mit der Sidebar und dem aktuellen Inhalt
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects} 
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectID}
      />
      {content}
    </main>
  );
}

export default App;
