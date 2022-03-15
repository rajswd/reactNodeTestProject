import * as React from "react";
import styles from "../../commonStyle";


const GenderRadio = ({ handler }) => (
  <div style={styles.genderContainer}>
    <label className="label">Gender:</label>
    
    <div style={styles.radioContainer}>
      <span>
        <input {...handler("radio", "Male")} />
        <label>Male</label>
      </span>
      <span>
        <input {...handler("radio", "Female")} />
        <label>Female</label>
      </span>
      <span>
        <input {...handler("radio", "Other")} />
        <label>Other</label>
      </span>
    </div>
  </div>
);

export default GenderRadio;
