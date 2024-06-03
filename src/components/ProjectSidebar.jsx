import Button from "./Button.jsx";

// `ProjectSidebar`-Komponente zur Darstellung der Projektliste und Steuerung des Projektauswahlprozesses
export default function ProjectSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      {/* Überschrift für die Projektliste */}
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      
      {/* Button zum Starten eines neuen Projekts */}
      <div>
        <Button onClick={onStartAddProject}>
          + Add Project
        </Button>
      </div>
      
      {/* Liste der Projekte */}
      <ul className="mt-8">
        {projects.map((project) => {
          // Überprüfen, ob das aktuelle Projekt ausgewählt ist
          const isSelected = project.id === selectedProjectId;
          
          // Festlegen der CSS-Klassen basierend auf dem ausgewählten Zustand
          const cssClasses = `
            w-full text-left px-2 py-1 rounded-sm my-1 
            ${isSelected ? 'bg-stone-800 text-stone-200' : 'text-stone-400 hover:bg-stone-800 hover:text-white focus:bg-stone-800 focus:text-white'}
          `;
          
          return (
            <li key={project.id}>
              {/* Button zur Auswahl eines Projekts */}
              <button 
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
