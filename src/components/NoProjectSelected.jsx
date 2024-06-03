import noProjectImage from "../assets/no-projects.png"; // Import des Bildes für den Fall, dass kein Projekt ausgewählt ist
import Button from "./Button.jsx"; // Import der Button-Komponente

// `NoProjectSelected`-Komponente zur Anzeige, wenn kein Projekt ausgewählt ist
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3 mx-auto">
      {/* Bild, das anzeigt, dass keine Projekte ausgewählt sind */}
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      {/* Überschrift für den Zustand ohne ausgewähltes Projekt */}
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      {/* Beschreibungstext */}
      <p className="text-stone-400 mb-4">
        Select a Project or get started with a new one
      </p>
      {/* Button zum Erstellen eines neuen Projekts */}
      <div className="mt-8">
        <Button onClick={onStartAddProject}>Create new Project</Button>
      </div>
    </div>
  );
}
