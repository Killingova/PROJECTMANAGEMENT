import Button from "./Button.jsx";

export default function ProjectSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>
          + Add Project
        </Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          const isSelected = project.id === selectedProjectId;
          const cssClasses = `
            w-full text-left px-2 py-1 rounded-sm my-1 
            ${isSelected ? 'bg-stone-800 text-stone-200' : 'text-stone-400 hover:bg-stone-800 hover:text-white focus:bg-stone-800 focus:text-white'}
          `;
          return (
            <li key={project.id}>
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
