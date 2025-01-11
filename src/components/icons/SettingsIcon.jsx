import React from "react";
import ReactDOM from "react-dom/client"; 
import Swal from "sweetalert2"; 
import styles from "./styles.module/SettingsIcon.module.css"; 

const AlertSettings = () => {
  return (
    <div className={styles.alertContainer}>
      <h2>New Features Coming Soon!</h2>
      <h3>Stay tuned for exciting updates and new features.</h3>
      <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="yellow"
          className="bi bi-lightning"
          viewBox="0 0 16 16"
        >
          <path d="M8 0c-.372 0-.736.217-.88.586L6.228 3h-1.04c-.644 0-1.126.76-.747 1.306l5.145 8.213c.47.747 1.61.384 1.61-.551v-4.686l1.846-.865c.538-.249.582-.987.065-1.399l-4.822-4.822C10.563.217 9.961 0 9.548 0H8z" />
        </svg>
      </div>
    </div>
  );
};

function SettingsIcon() {
  const showSettingsPanel = () => {
    Swal.fire({
      html: '<div id="alert-settings"></div>', 
      showCloseButton: true,
      focusConfirm: false,
      width: "40vw",
      padding: "1.25vw",
      fontsize: "1.25vw",
      customClass: {
        popup: "custom-popup",
        closeButton: "custom-close-button",
      },
      didOpen: () => {
        const root = ReactDOM.createRoot(
          document.getElementById("alert-settings")
        );
        root.render(<AlertSettings />);
      },
    });
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.SettingsIcon}
        width="1.25vw"
        height="1.25vw"
        viewBox="0 0 24 24"
        onClick={showSettingsPanel} 
        style={{ cursor: "pointer" }}
      >
        <path
          fill="currentColor"
          d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"
        ></path>
      </svg>
    </div>
  );
}

export default SettingsIcon;
