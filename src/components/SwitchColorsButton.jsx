import styles from './styles.module/SwitchColorsButton.module.css';
import React from 'react';

function SwitchColorsButton({ isChecked, onCheckboxChange }) {
    return (
        <div className={styles.checkboxWrapper}>
            <input
                type="checkbox"
                className={styles.checkbox}
                checked={isChecked}
                onChange={onCheckboxChange}
            />
        </div>
    );
}

export default SwitchColorsButton;