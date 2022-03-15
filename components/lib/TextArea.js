import * as React from "react";
import styles from "../../commonStyle";


const TextArea = ({ handler }) => (
  <div style={styles.genderContainer}>
      <label className="label align-top">Notes:</label>
      <textarea style={styles.textAreaStyles} {...handler()} />
  </div>
);

export default TextArea;
