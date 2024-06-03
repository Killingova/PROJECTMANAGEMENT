import { forwardRef, useImperativeHandle, useRef } from "react"; // Import von React-Hooks
import { createPortal } from "react-dom"; // Import von createPortal für die Portal-Funktionalität
import Button from "./Button.jsx"; // Import der Button-Komponente

// `Modal`-Komponente zur Anzeige von Modaldialogen
const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialogRef = useRef(); // Referenz für das Dialog-Element

  // Verwendung von useImperativeHandle, um Funktionen im Ref-Objekt bereitzustellen
  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal(); // Funktion zum Öffnen des Modals
    }
  }));

  return createPortal(
    // Portal für das Dialog-Element
    <dialog ref={dialogRef} className="backdrop:bg-stone-900/95 p-4 rounded-md shadow-md">
      {children}
      {/* Formular mit einem Button zum Schließen des Modals */}
      <form method="dialog" className="mt-4 text-right">
        <Button>
          {buttonCaption}
        </Button>
      </form>
    </dialog>,
    document.getElementById('modal-root') // Der Ort im DOM, an dem das Modal gerendert wird
  );
});

export default Modal;
