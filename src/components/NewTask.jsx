import { useState } from "react";

// `NewTask`-Komponente zum Hinzufügen neuer Aufgaben
export default function NewTask({ onAdd }) {
  // State für die Eingabe der neuen Aufgabe
  const [enteredTask, setEnteredTask] = useState('');

  // Handler für das Ändern des Eingabefeldes
  function handleChange(event) {
    setEnteredTask(event.target.value); // Aktualisiert den State mit dem Wert des Eingabefeldes
  }

  // Handler für das Klicken des "Add Task"-Buttons
  function handleClick() {
    if (enteredTask.trim() === '') {
      return; // Verhindert das Hinzufügen leerer Aufgaben
    }
    onAdd(enteredTask); // Ruft die `onAdd`-Funktion mit der neuen Aufgabe auf
    setEnteredTask(''); // Setzt das Eingabefeld zurück
  }

  return (
    <div className="flex items-center gap-4">
      {/* Eingabefeld für neue Aufgaben */}
      <input 
        type="text" 
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange} // Handler für Änderungen im Eingabefeld
        value={enteredTask} // Bindet den Wert des Eingabefeldes an den State
      />
      {/* Button zum Hinzufügen der Aufgabe */}
      <button 
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick} // Handler für Klick auf den Button
      >
        Add Task
      </button>
    </div>
  );
}
