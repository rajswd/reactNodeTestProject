import * as React from "react";
import styles from "../../commonStyle";

// React SFC to render Input element
const TextInput = ({
  handler,
  meta: { label, placeholder }
}) => (
  <div>
    <label className="label">{label}:</label>
    <input placeholder={placeholder} style={styles.input} {...handler()} />
  </div>
);

export default TextInput;
