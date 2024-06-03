import { useRef } from "react"; // Import von useRef für die Referenzierung der DOM-Elemente
import Input from "./Input.jsx"; // Import der Input-Komponente
import Modal from "./Modal.jsx"; // Import der Modal-Komponente

// `NewProject`-Komponente zum Hinzufügen eines neuen Projekts
export default function NewProject({ onAdd, onCancel }) {
  // Referenzen für das Modal und die Eingabefelder
  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  // Handler für das Speichern des neuen Projekts
  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    // Überprüfung, ob alle Felder ausgefüllt sind
    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
      modalRef.current.open(); // Öffnen des Modals bei ungültiger Eingabe
      return;
    }

    // Aufruf der `onAdd`-Funktion mit den Eingabewerten
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      {/* Modal für ungültige Eingabe */}
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
      </Modal>

      {/* Formular zum Hinzufügen eines neuen Projekts */}
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            {/* Button zum Abbrechen */}
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            {/* Button zum Speichern */}
            <button
              className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          {/* Eingabefelder für Titel, Beschreibung und Fälligkeitsdatum */}
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input type="date" ref={dueDateRef} label="Due Date" />
        </div>
      </div>
    </>
  );
}
