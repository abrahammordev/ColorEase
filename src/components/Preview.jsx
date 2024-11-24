import styles from "./Preview.module.css";

function Preview({ firstColor, secondColor }){
    return (
        <div className={styles.Preview}>
            <div className={styles.previewBox}  style={{
                backgroundColor: firstColor,
                color: secondColor,
                 border: `3px solid ${secondColor}`
            }}>
                <h1 className={styles.title}>{firstColor}</h1>
                <div className={styles.divider} style={{
                backgroundColor: secondColor
            }}></div>
                <div className={styles.code}>
                    <p>.Colors &#123;</p>
                    <p>&nbsp;&nbsp;color: {secondColor};</p>
                    <p>&nbsp;&nbsp;background-color: {firstColor};</p>
                    <p>&#125;</p>
                </div>
                <div className={styles.quote}>
                    <p>"Color is my day-long obsession, joy, and torment."</p>
                    <div className={styles.author}>Claude Monet</div>
                </div>
                <div className={styles.description}>
                    Color contrast is the difference in brightness between foreground and
                    background colors. For accessibility purposes, aim for a 4.5:1 ratio
                    between the foreground color (e.g. text, links, etc.) and the background
                    color. This ratio ensures people with moderately low vision can tell the
                    colors apart and see your content.
                </div>
                <p>Progress</p>
                <div className={styles.progress} style={{
                backgroundColor: secondColor
            }}>
                
                </div>
                <label htmlFor="inputField" className={styles.label}>
                    Input label
                </label>
                <input type="text" id="inputField" placeholder="" className={styles.input} style={{
                backgroundColor: secondColor,
                color: firstColor

            }}/>
                <div className={styles.radioLabel}>Do you have a favorite color?</div>
                <div className={styles.radioGroup}>
                    <label>
                    <input type="radio" name="favoriteColor" value="yes" /> Yes
                    </label>
                    <label>
                    <input type="radio" name="favoriteColor" value="no" /> No
                    </label>
                </div>
                <div className={styles.buttonContainer}>
                    <a href="#" className={styles.button}>
                    Click Here
                    </a>
                </div>
            </div>
        </div>
      );


}

export default Preview;