// `Button`-Komponente zum Erstellen eines stilisierten Buttons
export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick} // Handler für den Klick auf den Button
      className="px-4 py-2 bg-stone-500 text-white rounded hover:bg-stone-700" // CSS-Klassen für das Styling des Buttons
    >
      {children} {/* Anzeige der Kinderkomponenten (Text oder andere Elemente) innerhalb des Buttons */}
    </button>
  );
}
