import { useTheme } from '../../context/ThemeContext';
import styles from './styles.module/DarkModeIcon.module.css';

function DarkModeIcon() {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <div className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={theme === 'dark'}
        onChange={toggleTheme} 
      />
      <label className={styles.label}>
        <div className={styles.iconWrapper}>
          <svg
            className={`${styles.icon} ${styles.iconLight}`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000000"
              d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"
            />
          </svg>
          <svg
            className={`${styles.icon} ${styles.iconDark}`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000000"
              d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"
            />
          </svg>
        </div>
      </label>
    </div>
  );
}

export default DarkModeIcon;
