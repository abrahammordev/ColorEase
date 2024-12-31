import ReactDOM from "react-dom/client";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Preview from "./Preview";

function Lens() {
  const [isChecked, setIsChecked] = useState(false);

  const currentFirstColor = isChecked ? "#e74c3c" : "#3498db"; // Colores dinámicos
  const currentSecondColor = isChecked ? "#3498db" : "#e74c3c";

  const showSwal = () => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      html: (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Preview
            firstColor={currentFirstColor}
            secondColor={currentSecondColor}
            isInModal={true} // Indicamos que está dentro de la alerta
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
          popup.style.width = "90vw"; // Ajustamos para que ocupe casi todo el ancho
          popup.style.maxWidth = "none";
          popup.style.height = "150vh"; // Altura ampliada
          popup.style.display = "flex";
          popup.style.alignItems = "center";
          popup.style.justifyContent = "center";
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
