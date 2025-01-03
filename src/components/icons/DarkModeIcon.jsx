import { useTheme } from '../../context/ThemeContext';
import styles from './styles.module/DarkModeIcon.module.css';

function DarkModeIcon() {
  const { theme, toggleTheme } = useTheme(); // Acceder al tema y la función para cambiarlo

  return (
    <div className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={theme === 'dark'}
        onChange={toggleTheme} // Cambiar tema al hacer clic
      />
      <label className={styles.label}>
        
      </label>
    </div>
  );
}

export default DarkModeIcon;