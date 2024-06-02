export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-stone-500 text-white rounded hover:bg-stone-700"
    >
      {children}
    </button>
  );
}
