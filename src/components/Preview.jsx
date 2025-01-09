import styles from "./styles.module/Preview.module.css";
import React, { useState } from "react";
import SwitchColorsButton from "./SwitchColorsButton";
import Lens from "./Lens";

function Preview({ firstColor, secondColor }) {
  const [isChecked, setIsChecked] = useState(false);

  const currentFirstColor = isChecked ? secondColor : firstColor;
  const currentSecondColor = isChecked ? firstColor : secondColor;

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className={styles.Preview}>
      <div
        className={styles.previewBox}
        style={{
          backgroundColor: currentFirstColor,
          color: currentSecondColor,
          border: `3px solid ${currentSecondColor}`,
        }}
      >
        <h1 className={styles.title}>{currentFirstColor}</h1>
        <div
          className={styles.divider}
          style={{
            backgroundColor: currentSecondColor,
          }}
        ></div>
        <div className={styles.code}>
          <p>.Colors &#123;</p>
          <p>&nbsp;&nbsp;color: {currentSecondColor};</p>
          <p>&nbsp;&nbsp;background-color: {currentFirstColor};</p>
          <p>&#125;</p>
        </div>
        <div className={styles.quote}>
          <p>"Color is my day-long obsession, joy, and torment."</p>
          <div className={styles.author}>Claude Monet</div>
        </div>
        <div className={styles.description}>
        Color contrast measures the brightness difference between foreground and background colors.
        For accessibility, im for a 4.5:1 ratio to ensure readability for people with moderately low vision.
        </div>
        <p className={styles.progress}>Progress</p>
        <div
          className={styles.progress}
          style={{
            backgroundColor: currentSecondColor,
          }}
        ></div>
        <label htmlFor="inputField" className={styles.label}>
          Input label
        </label>
        <input
          type="text"
          id="inputField"
          placeholder=""
          className={styles.input}
          style={{
            backgroundColor: currentSecondColor,
            color: currentFirstColor,
          }}
        />
        <div className={styles.radioLabel}>Do you have a favorite color?</div>
        <div className={styles.radioGroup}>
          <label
    style={{
      display: "flex",
      alignItems: "center",
      
    }}
  >
    <input
      type="radio"
      name="favoriteColor"
      value="yes"
      style={{
        appearance: "none",
        width: "1.05vw",
        height: "1.05vw",
        borderRadius: "50%",
        border: `2px solid ${currentSecondColor}`,
        marginRight: "0.52vw",
        
        backgroundColor: currentSecondColor,
      }}
      className={styles.customRadio}
    />
    Yes
  </label>
  <label
    style={{
      display: "flex",
      alignItems: "center",
      
    }}
  >
    <input
      type="radio"
      name="favoriteColor"
      value="no"
      style={{
        appearance: "none",
        width: "1.05vw",
        height: "1.05vw",
        borderRadius: "50%",
        border: `2px solid ${currentSecondColor}`,
        marginRight: "0.52vw",
        
        backgroundColor: currentSecondColor,
      }}
      className={styles.customRadio}
    />
    No
      </label>

      </div>
        <div
          className={styles.buttonContainer}
          style={{ border: `2px solid ${currentSecondColor}` }}
        >
          <a
            href="#"
            className={styles.button}
            style={{ color: `${currentSecondColor}` }}
          >
            Click Here
          </a>
        </div>
      </div>
      <div className={styles["icons"]}>
      <SwitchColorsButton
        isChecked={isChecked}
        onCheckboxChange={handleCheckboxChange}
      />
      
      <Lens 
        firstColor={currentFirstColor}
        secondColor={currentSecondColor}
        className={styles.lensIcon}/>
      </div>
        
    </div>
  );
}

export default Preview;
