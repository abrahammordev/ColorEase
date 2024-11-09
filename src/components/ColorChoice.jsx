import { useRef } from "react";
import styles from "./ColorChoice.module.css";
import colorCircle from "../images/color-circle-icon.png"

function ColorChoice({ id, onColorChange = () => {} }){
    
    const colorInputRef=useRef(null);
    const handleClick= () => (
        colorInputRef.current.click()
    );

    const textInputRef=useRef(null);
    const handleChange= () => {
        //textInputRef.current.value = colorInputRef.current.value
        const colorValue = colorInputRef.current.value;
        textInputRef.current.value = colorValue;

        // Llama a la función que se pasa como prop para actualizar el valor en el componente padre
        onColorChange(colorValue);
        
    };
    
    return(
        <div className={styles.ColorChoice}>
            <input type="text" className={styles["text-input"]} placeholder="#Hex" readonly ref={textInputRef}/>
            <input type="color" ref={colorInputRef} className={styles["hidden-color-input"]} onInput={handleChange}/>
            <img src={colorCircle} alt="color-picker-icon" onClick={handleClick} className={styles["color-icon"]}/>
            <input type="hidden" id={textInputRef}/>
        </div>
    );

}

export default ColorChoice;