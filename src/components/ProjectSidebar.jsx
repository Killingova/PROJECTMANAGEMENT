import Button from "./Button.jsx";

export default function ProjectSidebar({ onStartAddProject, projects }) {
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
        {projects.map(project => (
          <li key={project.id}>
            <button className="w-full text-left px-4 py-2 rounded-md my-2 bg-stone-700 text-stone-200 hover:bg-stone-600 hover:text-white focus:bg-stone-800 focus:text-white">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
