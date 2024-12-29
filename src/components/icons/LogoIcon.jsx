import styles from "./styles.module/LogoIcon.module.css";

function LogoIcon() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.LogoIcon}
        width="1.25vw"
        height="1.25vw"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          color="currentColor"
        >
          <circle cx={12} cy={12} r={10}></circle>
          <circle cx={12} cy={12} r={4}></circle>
          <path d="m8.534 14l-4.5-8M11.5 21.5l4-7.5M12 8h9"></path>
        </g>
      </svg>
    </div>
      
  );
}

export default LogoIcon;
