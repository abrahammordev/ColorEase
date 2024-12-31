import ReactDOM from "react-dom/client";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ExtendedPreview from "./ExtendedPreview";

function Lens({ firstColor, secondColor }) {
  const [isChecked, setIsChecked] = useState(false);

  const currentFirstColor = firstColor 
  const currentSecondColor = secondColor

  const showSwal = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      html: (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ExtendedPreview
            firstColor={currentFirstColor}
            secondColor={currentSecondColor}
          />
        </div>
      ),
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false, // Sin botones adicionales
      customClass: {
        popup: "swal2-preview-modal",
      },
      didRender: () => {
        const popup = Swal.getPopup();
        if (popup) {
          popup.style.width = "70vw"; // Ajustamos para que ocupe casi todo el ancho
          popup.style.maxWidth = "none";
          popup.style.height = "80vw"; // Altura ampliada
          
          
          popup.style.padding = "0"; // Eliminamos el padding para un uso óptimo del espacio
          popup.style.overflow = "hidden";
        }
      },
    });
  };

  return (
    <>
      <button onClick={showSwal}>ExtendedPreview</button>
    </>
  );
}

export default Lens;
