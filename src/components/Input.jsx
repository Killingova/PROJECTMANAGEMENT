import { forwardRef } from 'react'; // Import von forwardRef aus React

// `Input`-Komponente, die Textfelder und Textareas unterstützt
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  // CSS-Klassen für die Eingabeelemente
  const classes = "w-full p-1 border-b-2 rounded-sm border-stone-200 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      {/* Label für das Eingabefeld */}
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {/* Bedingte Anzeige von Textarea oder Input */}
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
