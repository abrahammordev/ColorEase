import ReactDOM from "react-dom/client";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ExtendedPreview from "./ExtendedPreview";
import style from "./styles.module/Lens.module.css";

//Component for the lens icon that opens the Extendedpreview component in a SweetAlert.

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
            backgroundColor: "var(--window-color)",
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
      showConfirmButton: false,
      customClass: {
        popup: "swal2-preview-modal",
      },
      didRender: () => {
        const popup = Swal.getPopup();
        if (popup) {
          popup.style.width = "70vw";
          popup.style.maxWidth = "none";
          popup.style.height = "80vw";
          popup.style.backgroundColor = "var(--window-color)"; 
          
          
          popup.style.padding = "0";
          popup.style.overflow = "hidden";
        }
      },
    });
  };

  return (
    <>
      <button onClick={showSwal} className={style.Lens}>
      <svg className={style["lens-icon"]} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="var(--text-color)" d="M4 21q-.425 0-.712-.288T3 20v-6q0-.425.288-.712T4 13t.713.288T5 14v3.6L17.6 5H14q-.425 0-.712-.288T13 4t.288-.712T14 3h6q.425 0 .713.288T21 4v6q0 .425-.288.713T20 11t-.712-.288T19 10V6.4L6.4 19H10q.425 0 .713.288T11 20t-.288.713T10 21z"/></svg>
      </button>
    </>
  );
}

export default Lens;
