import NewTask from "./NewTask.jsx";

// `Tasks`-Komponente zur Darstellung und Verwaltung von Aufgaben
export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      {/* Überschrift für den Aufgabenbereich */}
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      
      {/* Komponente zum Hinzufügen neuer Aufgaben */}
      <NewTask onAdd={onAdd} />
      
      {/* Anzeige eines Hinweises, wenn keine Aufgaben vorhanden sind */}
      {tasks.length === 0 && (
        <p className="text-stone-800 mb-4">
          This Project does not have any tasks yet.
        </p>
      )}
      
      {/* Anzeige der Aufgabenliste, wenn Aufgaben vorhanden sind */}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              {/* Button zum Löschen einer Aufgabe */}
              <button 
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
